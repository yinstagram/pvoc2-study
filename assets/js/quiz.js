import { QUESTIONS, TOPICS } from "./data.js";
import { clearWrongBook, loadState, recordAnswer } from "./storage.js";

export function assetPath(path) {
  if (!path) return null;
  const deep = location.pathname.includes("/topics/") || location.pathname.includes("/stories/");
  return `${deep ? "../" : ""}${path}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function optionText(q, key, lang = "tc") {
  return q.options?.[key]?.[`text_${lang}`] || "";
}

function questionImage(q) {
  const webp = assetPath(q.image_webp_asset_path);
  const png = assetPath(q.image_asset_path);
  if (!webp && !png) return "";
  const alt = q.image_alt_tc || `${q.id} 圖像`;
  return `<picture><source srcset="${webp || png}" type="image/webp"><img class="question-image" loading="lazy" src="${png || webp}" alt="${alt}"></picture>`;
}

export function renderQuestionCard(q, { record = true, reveal = false } = {}) {
  const el = document.createElement("article");
  el.className = "question-card";
  el.dataset.qid = q.id;
  const options = ["A", "B", "C", "D"].map((key) => {
    const cls = reveal && key === q.answer ? " correct" : "";
    return `<button class="option-btn${cls}" type="button" data-answer="${key}"><strong>${key}.</strong> ${optionText(q, key)}</button>`;
  }).join("");
  el.innerHTML = `
    <div class="question-head">
      <span class="badge">${q.part}.${q.q_no}</span>
      <button class="btn ghost" type="button" data-en-toggle>EN</button>
    </div>
    <div class="question-stem">${q.stem_tc}</div>
    ${questionImage(q)}
    <div class="en-block is-hidden" data-en-block>
      <strong>${q.stem_en || ""}</strong>
      <ol type="A">
        ${["A", "B", "C", "D"].map((key) => `<li>${optionText(q, key, "en")}</li>`).join("")}
      </ol>
    </div>
    <div class="option-list">${options}</div>
    <div class="answer-note ${reveal ? "" : "is-hidden"}" data-answer-note>
      <strong>答案：${q.answer}</strong><br>${q.explanation_tc || ""}
    </div>
  `;
  el.querySelector("[data-en-toggle]").addEventListener("click", () => {
    el.querySelector("[data-en-block]").classList.toggle("is-hidden");
  });
  el.querySelectorAll("[data-answer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.answer;
      const correct = chosen === q.answer;
      el.querySelectorAll("[data-answer]").forEach((b) => {
        b.disabled = true;
        if (b.dataset.answer === q.answer) b.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");
      el.querySelector("[data-answer-note]").classList.remove("is-hidden");
      if (record) recordAnswer(q, correct);
    });
  });
  return el;
}

export function initTopicQuizzes() {
  document.querySelectorAll("[data-topic-quiz]").forEach((panel) => {
    const topic = panel.dataset.topicQuiz;
    const root = panel.querySelector(".quiz-root");
    const pool = QUESTIONS.filter((q) => q.topics.includes(topic));
    if (!pool.length) {
      root.innerHTML = "<p>呢個 topic 暫時未有直接 tagged 題目。</p>";
      return;
    }
    const selected = shuffle(pool).slice(0, Math.min(8, pool.length));
    root.innerHTML = "";
    const list = document.createElement("div");
    list.className = "question-list";
    selected.forEach((q) => list.appendChild(renderQuestionCard(q)));
    root.appendChild(list);
  });
}

export function initQuestionBrowser() {
  const root = document.querySelector("#question-browser");
  if (!root) return;
  root.innerHTML = `
    <div class="controls">
      <input type="search" placeholder="搜尋題目" aria-label="搜尋題目" data-search>
      <select data-part><option value="">全部 Part</option><option>A</option><option>B</option></select>
      <select data-topic><option value="">全部 Topic</option>${Object.keys(TOPICS).map((t) => `<option value="${t}">${t}</option>`).join("")}</select>
    </div>
    <div class="question-list" data-list></div>
  `;
  const list = root.querySelector("[data-list]");
  const render = () => {
    const term = root.querySelector("[data-search]").value.trim().toLowerCase();
    const part = root.querySelector("[data-part]").value;
    const topic = root.querySelector("[data-topic]").value;
    const filtered = QUESTIONS.filter((q) => {
      if (part && q.part !== part) return false;
      if (topic && !q.topics.includes(topic)) return false;
      if (!term) return true;
      return `${q.id} ${q.stem_tc} ${q.stem_en}`.toLowerCase().includes(term);
    });
    list.innerHTML = "";
    filtered.forEach((q) => list.appendChild(renderQuestionCard(q, { record: false })));
  };
  root.querySelectorAll("input,select").forEach((el) => el.addEventListener("input", render));
  render();
}

export function initWrongBook() {
  const root = document.querySelector("#wrongbook-root");
  if (!root) return;
  const state = loadState();
  const wrong = QUESTIONS.filter((q) => state.wrong.includes(q.id));
  root.innerHTML = `
    <div class="controls">
      <button class="btn primary" type="button" data-redo>重做錯題</button>
      <button class="btn ghost" type="button" data-clear>清空錯題本</button>
    </div>
    <div class="question-list" data-list></div>
  `;
  const list = root.querySelector("[data-list]");
  if (!wrong.length) {
    list.innerHTML = "<p>暫時未有錯題。做完 quiz 或 mock 後會自動加入。</p>";
  } else {
    wrong.forEach((q) => list.appendChild(renderQuestionCard(q)));
  }
  root.querySelector("[data-clear]").addEventListener("click", () => {
    clearWrongBook();
    location.reload();
  });
  root.querySelector("[data-redo]").addEventListener("click", () => {
    list.innerHTML = "";
    shuffle(wrong).forEach((q) => list.appendChild(renderQuestionCard(q)));
  });
}
