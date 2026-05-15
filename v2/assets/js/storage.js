const KEY = "pvoc2_state_v1";

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function emptyState() {
  return {
    opened: [],
    streak: 0,
    wrong: [],
    attempts: {},
    topicStats: {},
    daily: {}
  };
}

export function loadState() {
  try {
    return { ...emptyState(), ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return emptyState();
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
  return state;
}

export function touchOpen() {
  const state = loadState();
  const today = todayKey();
  if (!state.opened.includes(today)) state.opened.push(today);
  state.opened = state.opened.slice(-120);
  let streak = 0;
  const opened = new Set(state.opened);
  const cursor = new Date(`${today}T00:00:00`);
  while (opened.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  state.streak = streak;
  state.daily[today] = state.daily[today] || { answered: 0, correct: 0, mock: 0 };
  return saveState(state);
}

export function recordAnswer(question, correct) {
  const state = loadState();
  const today = todayKey();
  state.daily[today] = state.daily[today] || { answered: 0, correct: 0, mock: 0 };
  state.daily[today].answered += 1;
  if (correct) state.daily[today].correct += 1;
  state.attempts[question.id] = state.attempts[question.id] || { answered: 0, correct: 0 };
  state.attempts[question.id].answered += 1;
  if (correct) state.attempts[question.id].correct += 1;
  if (!correct && !state.wrong.includes(question.id)) state.wrong.push(question.id);
  if (correct) state.wrong = state.wrong.filter((id) => id !== question.id);
  for (const topic of question.topics || []) {
    state.topicStats[topic] = state.topicStats[topic] || { answered: 0, correct: 0 };
    state.topicStats[topic].answered += 1;
    if (correct) state.topicStats[topic].correct += 1;
  }
  return saveState(state);
}

export function recordMock() {
  const state = loadState();
  const today = todayKey();
  state.daily[today] = state.daily[today] || { answered: 0, correct: 0, mock: 0 };
  state.daily[today].mock += 1;
  return saveState(state);
}

export function clearWrongBook() {
  const state = loadState();
  state.wrong = [];
  return saveState(state);
}

export function progressSummary(topics) {
  const state = loadState();
  const today = todayKey();
  const daily = state.daily[today] || { answered: 0, correct: 0, mock: 0 };
  const mastered = Object.keys(topics).filter((topic) => {
    const stat = state.topicStats[topic];
    return stat && stat.answered >= 3 && stat.correct / stat.answered >= 0.8;
  }).length;
  return {
    streak: state.streak || 0,
    wrong: state.wrong.length,
    mastered,
    totalTopics: Object.keys(topics).length,
    todayAnswered: daily.answered,
    todayCorrect: daily.correct,
    todayMock: daily.mock
  };
}
