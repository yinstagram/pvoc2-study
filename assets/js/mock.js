import { QUESTIONS, TOPICS } from "./data.js";
import { assetPath } from "./quiz.js";
import { recordAnswer, recordMock } from "./storage.js";

const LETTERS = ["A", "B", "C", "D"];

function optionText(q, key, lang = "tc") {
  return q.options?.[key]?.[`text_${lang}`] || "";
}

function imageHtml(q) {
  const webp = assetPath(q.image_webp_asset_path);
  const png = assetPath(q.image_asset_path);
  if (!webp && !png) return "";
  return `<picture><source srcset="${webp || png}" type="image/webp"><img class="question-image" loading="lazy" src="${png || webp}" alt="${q.image_alt_tc || q.id}"></picture>`;
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function renderExam(root, part) {
  const qs = QUESTIONS.filter((q) => q.part === part).sort((a, b) => a.q_no - b.q_no);
  let remaining = 45 * 60;
  const answers = {};
  root.innerHTML = `
    <div class="timer"><strong>Part ${part}</strong><span data-clock>${formatTime(remaining)}</span><button class="btn primary" type="button" data-submit>交卷</button></div>
    <form class="question-list" data-form>
      ${qs.map((q) => `
        <article class="question-card" data-qid="${q.id}">
          <div class="question-head"><span class="badge">${q.part}.${q.q_no}</span><button class="btn ghost" type="button" data-en="${q.id}">EN</button></div>
          <div class="question-stem">${q.stem_tc}</div>
          ${imageHtml(q)}
          <div class="en-block is-hidden" id="en-${q.id}">
            <strong>${q.stem_en || ""}</strong>
            <ol type="A">${LETTERS.map((key) => `<li>${optionText(q, key, "en")}</li>`).join("")}</ol>
          </div>
          <div class="option-list">
            ${LETTERS.map((key) => `
              <label class="option-row">
                <input type="radio" name="${q.id}" value="${key}"> <strong>${key}.</strong> ${optionText(q, key)}
              </label>`).join("")}
          </div>
        </article>`).join("")}
    </form>
  `;
  const timer = setInterval(() => {
    remaining -= 1;
    const clock = root.querySelector("[data-clock]");
    if (clock) clock.textContent = formatTime(Math.max(0, remaining));
    if (remaining <= 0) submit();
  }, 1000);

  root.querySelectorAll("[data-en]").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelector(`#en-${btn.dataset.en}`).classList.toggle("is-hidden");
    });
  });
  root.querySelectorAll("input[type=radio]").forEach((input) => {
    input.addEventListener("change", () => {
      answers[input.name] = input.value;
    });
  });
  root.querySelector("[data-submit]").addEventListener("click", submit);

  function submit() {
    clearInterval(timer);
    let correct = 0;
    const byTopic = {};
    qs.forEach((q) => {
      const ok = answers[q.id] === q.answer;
      if (ok) correct += 1;
      recordAnswer(q, ok);
      for (const topic of q.topics) {
        byTopic[topic] = byTopic[topic] || { total: 0, correct: 0 };
        byTopic[topic].total += 1;
        if (ok) byTopic[topic].correct += 1;
      }
    });
    recordMock();
    const pass = correct >= 24;
    root.innerHTML = `
      <article class="result-card">
        <p class="eyebrow">Part ${part} result</p>
        <div class="score">${correct}/40 ${pass ? "合格" : "未合格"}</div>
        <p>合格線：24/40。錯題已加入錯題本；答啱嘅舊錯題會自動移除。</p>
        <div class="controls"><button class="btn primary" type="button" data-retry>重做 Part ${part}</button><a class="btn ghost" href="wrongbook.html">去錯題本</a></div>
      </article>
      <section class="question-list">
        ${Object.entries(byTopic).sort().map(([topic, stat]) => `
          <article class="question-card"><strong>${topic} ${TOPICS[topic] || ""}</strong><p>${stat.correct}/${stat.total}</p></article>
        `).join("")}
      </section>
    `;
    root.querySelector("[data-retry]").addEventListener("click", () => renderExam(root, part));
  }
}

export function initMock() {
  const root = document.querySelector("#mock-root");
  if (!root) return;
  root.innerHTML = `
    <div class="controls">
      <button class="btn primary" type="button" data-start="A">開始 Part A</button>
      <button class="btn primary" type="button" data-start="B">開始 Part B</button>
    </div>
    <p>作答期間不會即時顯示答案；交卷後按 topic 出 breakdown。</p>
  `;
  root.querySelectorAll("[data-start]").forEach((btn) => {
    btn.addEventListener("click", () => renderExam(root, btn.dataset.start));
  });
}
