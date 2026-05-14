import { TOPICS } from "./data.js";
import { initMock } from "./mock.js";
import { initQuestionBrowser, initTopicQuizzes, initWrongBook } from "./quiz.js";
import { progressSummary, touchOpen } from "./storage.js";

function initTheme() {
  const saved = localStorage.getItem("pvoc2_theme");
  if (saved) document.documentElement.dataset.theme = saved;
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("pvoc2_theme", next);
  });
}

function initToggles() {
  document.querySelectorAll("[data-toggle-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.toggleTarget);
      if (target) target.classList.toggle("is-hidden");
    });
  });
}

function renderProgress() {
  const root = document.querySelector("[data-progress-summary]");
  if (!root) return;
  const p = progressSummary(TOPICS);
  const accuracy = p.todayAnswered ? Math.round((p.todayCorrect / p.todayAnswered) * 100) : 0;
  root.innerHTML = `
    <article class="stat-card"><p>連續開站</p><strong class="score">${p.streak}</strong><p>日 streak</p></article>
    <article class="stat-card"><p>今日答題</p><strong class="score">${p.todayAnswered}</strong><p>${accuracy}% 正確</p></article>
    <article class="stat-card"><p>Mastered topics</p><strong class="score">${p.mastered}/${p.totalTopics}</strong><p>80%+ 且至少 3 次作答</p></article>
    <article class="stat-card"><p>錯題本</p><strong class="score">${p.wrong}</strong><p>待重做</p></article>
  `;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const deep = location.pathname.includes("/topics/") || location.pathname.includes("/stories/");
    navigator.serviceWorker.register(`${deep ? "../" : ""}service-worker.js`).catch(() => {});
  }
}

touchOpen();
initTheme();
initToggles();
renderProgress();
initTopicQuizzes();
initQuestionBrowser();
initWrongBook();
initMock();
registerServiceWorker();
