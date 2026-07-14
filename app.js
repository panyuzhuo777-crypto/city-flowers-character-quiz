const roleOrder = ["role01", "role02", "role03", "role04", "role05", "role06"];

const roles = {
  role01: {
    gender: "male",
    image: "assets/characters/character-01.jpg",
    maxScore: 13,
    absoluteMaxScore: 16.5
  },
  role02: {
    gender: "female",
    image: "assets/characters/character-02.jpg",
    maxScore: 12,
    absoluteMaxScore: 15.5
  },
  role03: {
    gender: "male",
    image: "assets/characters/character-03.jpg",
    maxScore: 9,
    absoluteMaxScore: 11.5
  },
  role04: {
    gender: "female",
    image: "assets/characters/character-04.jpg",
    maxScore: 12,
    absoluteMaxScore: 15.5
  },
  role05: {
    gender: "male",
    image: "assets/characters/character-05.jpg",
    maxScore: 9,
    absoluteMaxScore: 11.5
  },
  role06: {
    gender: "female",
    image: "assets/characters/character-06.jpg",
    maxScore: 9,
    absoluteMaxScore: 11.5
  }
};

const roleEmotions = {
  role01: ["爱情", "友情"],
  role02: ["友情", "爱情", "母爱"],
  role03: ["爱情", "隔代情"],
  role04: ["爱情", "父爱", "隔代情"],
  role05: ["爱情", "父爱"],
  role06: ["爱情", "友情"]
};

const questions = [
  {
    kicker: "校园",
    type: "single",
    title: "在校园里，你是一个怎样的人？",
    options: [
      { label: "A", text: "执着学业，醉心学习的学霸", score: { role03: 1, role02: 1 } },
      { label: "B", text: "放飞自我，就要不走寻常路", score: { role01: 1, role04: 1 } },
      { label: "C", text: "按部就班，我是听话守纪律乖学生", score: { role05: 1, role06: 1 } }
    ]
  },
  {
    kicker: "青春",
    type: "single",
    title: "对于青春，你的理解是怎样的？",
    options: [
      { label: "A", text: "遗憾就是青春", score: { role03: 1, role05: 1 } },
      { label: "B", text: "梦想就是青春", score: { role01: 1, role04: 1, role02: 1 } },
      { label: "C", text: "初恋就是青春", score: { role05: 1, role06: 1 } }
    ]
  },
  {
    kicker: "爱情",
    type: "multi",
    title: "在爱情中，以下哪种剧情更加能够打动你？",
    options: [
      { label: "A", text: "青梅竹马，两小无猜", score: { role01: 2, role02: 2, role03: 1, role04: 1 } },
      { label: "B", text: "惊鸿一瞥，一见钟情", score: { role05: 2, role06: 2 } },
      { label: "C", text: "相伴相依，共同成长", score: { role03: 2, role04: 2 } },
      { label: "D", text: "历经艰辛，修成正果", score: { role01: 1, role02: 1 } }
    ]
  },
  {
    kicker: "边界",
    type: "single",
    title: "在爱情中，以下哪种剧情你无法接受？",
    options: [
      { label: "A", text: "一直以来的单方面默默付出", score: { role01: -2 } },
      { label: "B", text: "不知彼此想要的是什么", score: { role03: -2, role04: -2 } },
      { label: "C", text: "巨大误会产生的分别", score: { role05: -2, role06: -2 } }
    ]
  },
  {
    kicker: "求学",
    type: "single",
    title: "求学之路上，你曾是一名？",
    options: [
      { label: "A", text: "艺术特长生", score: { role05: 2 } },
      { label: "B", text: "体育特长生", score: { role04: 2 } },
      { label: "C", text: "有过当兵的履历", score: { role01: 2 } },
      { label: "D", text: "标准文化课学生", score: { role03: 1, role02: 1, role06: 1 } }
    ]
  },
  {
    kicker: "梦想",
    type: "single",
    title: "青春时期的梦想或者兴趣，你曾更接近哪一种？",
    options: [
      { label: "A", text: "文学青年", score: { role02: 2 } },
      { label: "B", text: "热血青年", score: { role01: 2 } },
      { label: "C", text: "艺术达人", score: { role05: 2 } }
    ]
  },
  {
    kicker: "摇滚",
    type: "single",
    title: "关于摇滚乐，你的认知是怎样的？",
    options: [
      { label: "A", text: "特别躁，不爱听", score: {} },
      { label: "B", text: "有所了解，不常听但勉强能够接受", score: {} },
      { label: "C", text: "忠实粉丝，常去音乐节和 Livehouse", score: {} },
      { label: "D", text: "哥们儿玩乐队的，你懂吗", score: {} }
    ]
  },
  {
    kicker: "友情",
    type: "single",
    title: "关于友情，你的体会是怎样的？",
    options: [
      { label: "A", text: "我有从小一起长大的发小", score: { role01: 2, role02: 2 } },
      { label: "B", text: "我十分能够理解友情的真挚", score: { role06: 2, role04: 2 } },
      { label: "C", text: "我曾愧对过朋友们而选择逃避", score: { role03: 2 } },
      { label: "D", text: "我并不能感受友情可贵", score: { role01: -2, role02: -2, role06: -2, role04: -2 } }
    ]
  },
  {
    kicker: "情感",
    type: "rank",
    title: "现代情感本中，请选出最打动你的前三种情感类型。",
    options: [
      { label: "A", text: "爱情", emotion: "爱情" },
      { label: "B", text: "友情", emotion: "友情" },
      { label: "C", text: "母爱", emotion: "母爱" },
      { label: "D", text: "父爱", emotion: "父爱" },
      { label: "E", text: "隔代情", emotion: "隔代情" }
    ]
  },
  {
    kicker: "体验",
    type: "single",
    title: "本次剧本体验中，你更倾向于？",
    options: [
      { label: "A", text: "扮演一名戏精，带飞全场", score: { role01: 2, role04: 2, role02: -2 } },
      { label: "B", text: "扮演一名旁观者，冷酷沉默", score: { role06: 1, role02: 1 } }
    ]
  }
];

const state = {
  step: 0,
  preference: "all",
  answers: questions.map(() => [])
};

const introScreen = document.querySelector("#introScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const questionKicker = document.querySelector("#questionKicker");
const questionTitle = document.querySelector("#questionTitle");
const optionsEl = document.querySelector("#options");
const currentStep = document.querySelector("#currentStep");
const totalSteps = document.querySelector("#totalSteps");
const progressFill = document.querySelector("#progressFill");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const roleImage = document.querySelector("#roleImage");
const bgm = document.querySelector("#bgm");
const audioToggle = document.querySelector("#audioToggle");
const audioToggleLabel = document.querySelector("#audioToggleLabel");
const saveButton = document.querySelector("#saveButton");
const resultMatch = document.querySelector("#resultMatch");
const matchList = document.querySelector("#matchList");
let bgmEnabled = true;

totalSteps.textContent = String(questions.length).padStart(2, "0");
bgm.volume = 0.52;
updateAudioToggle();

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.preference = button.dataset.preference;
  });
});

document.querySelector("#startButton").addEventListener("click", () => {
  playBgm();
  showScreen("quiz");
  renderQuestion();
});

document.querySelector("#restartButton").addEventListener("click", resetQuiz);
document.querySelector("#againButton").addEventListener("click", resetQuiz);

audioToggle.addEventListener("click", () => {
  bgmEnabled = !bgmEnabled;
  if (bgmEnabled) {
    playBgm();
  } else {
    bgm.pause();
  }
  updateAudioToggle();
});

document.addEventListener("pointerdown", playBgm, { once: true });

prevButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!isAnswered()) return;

  if (state.step === questions.length - 1) {
    renderResult();
    return;
  }

  state.step += 1;
  renderQuestion();
});

function showScreen(name) {
  introScreen.classList.toggle("is-hidden", name !== "intro");
  quizScreen.classList.toggle("is-hidden", name !== "quiz");
  resultScreen.classList.toggle("is-hidden", name !== "result");
}

function playBgm() {
  if (!bgmEnabled || !bgm.paused) return;
  bgm.play().catch(() => {});
}

function updateAudioToggle() {
  audioToggle.classList.toggle("is-playing", bgmEnabled);
  audioToggleLabel.textContent = bgmEnabled ? "BGM ON" : "BGM OFF";
  audioToggle.setAttribute("aria-pressed", String(bgmEnabled));
  audioToggle.setAttribute(
    "aria-label",
    bgmEnabled ? "背景音樂目前開啟，點擊關閉" : "背景音樂目前關閉，點擊開啟"
  );
}

function renderQuestion() {
  const question = questions[state.step];
  const answer = state.answers[state.step];

  questionKicker.textContent = question.kicker;
  questionTitle.textContent = question.title;
  currentStep.textContent = String(state.step + 1).padStart(2, "0");
  progressFill.style.width = `${((state.step + 1) / questions.length) * 100}%`;
  prevButton.disabled = state.step === 0;
  nextButton.textContent = state.step === questions.length - 1 ? "看结果" : "下一题";

  optionsEl.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const isSelected = answer.includes(index);
    const rankIndex = answer.indexOf(index);

    button.className = `option${isSelected ? " is-selected" : ""}`;
    button.type = "button";
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="option-mark">${option.label}</span>
      <span class="option-text">${option.text}</span>
      <span class="rank-mark">${question.type === "rank" && isSelected ? `第${rankIndex + 1}` : ""}</span>
    `;

    button.addEventListener("click", () => selectOption(index));
    optionsEl.appendChild(button);
  });

  updateNextState();
}

function selectOption(index) {
  const question = questions[state.step];
  const answer = state.answers[state.step];

  if (question.type === "single") {
    state.answers[state.step] = [index];
  }

  if (question.type === "multi") {
    if (answer.includes(index)) {
      state.answers[state.step] = answer.filter((item) => item !== index);
    } else {
      state.answers[state.step] = [...answer, index];
    }
  }

  if (question.type === "rank") {
    if (answer.includes(index)) {
      state.answers[state.step] = answer.filter((item) => item !== index);
    } else if (answer.length < 3) {
      state.answers[state.step] = [...answer, index];
    }
  }

  renderQuestion();
}

function updateNextState() {
  nextButton.disabled = !isAnswered();
}

function isAnswered() {
  const question = questions[state.step];
  const answer = state.answers[state.step];
  return question.type === "rank" ? answer.length === 3 : answer.length > 0;
}

function getScores() {
  const scores = Object.fromEntries(roleOrder.map((role) => [role, 0]));
  const rankPoints = [2, 1.5, 1];

  questions.forEach((question, questionIndex) => {
    const answer = state.answers[questionIndex];

    if (question.type === "rank") {
      answer.forEach((optionIndex, rankIndex) => {
        const emotion = question.options[optionIndex].emotion;
        roleOrder.forEach((role) => {
          if (roleEmotions[role].includes(emotion)) {
            scores[role] += rankPoints[rankIndex];
          }
        });
      });
      return;
    }

    answer.forEach((optionIndex) => {
      const score = question.options[optionIndex].score || {};
      Object.entries(score).forEach(([role, points]) => {
        scores[role] += points;
      });
    });
  });

  return scores;
}

function getRankings(scores) {
  return roleOrder
    .filter((role) => state.preference === "all" || roles[role].gender === state.preference)
    .map((role) => ({
      role,
      score: scores[role],
      match: Math.round((scores[role] / roles[role].maxScore) * 100)
    }))
    .sort((a, b) => {
      if (b.match !== a.match) return b.match - a.match;
      if (b.score !== a.score) return b.score - a.score;
      return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    });
}

function renderResult() {
  const scores = getScores();
  const rankings = getRankings(scores);
  const winner = rankings[0];
  const role = roles[winner.role];
  roleImage.src = role.image;
  roleImage.alt = "測驗結果角色封面";
  saveButton.href = role.image;
  resultMatch.textContent = `${winner.match}%`;
  renderMatchList(rankings.slice(1));

  showScreen("result");
}

function renderMatchList(rankings) {
  matchList.innerHTML = "";

  rankings.forEach((candidate, index) => {
    const item = document.createElement("div");
    const barWidth = Math.min(100, Math.max(0, candidate.match));
    const stateClass = candidate.match < 0 ? " is-negative" : candidate.match > 100 ? " is-over" : "";

    item.className = `match-item${stateClass}`;
    item.innerHTML = `
      <div class="match-meta">
        <span>候选角色 ${String(index + 1).padStart(2, "0")}</span>
        <strong>${candidate.match}%</strong>
      </div>
      <div class="match-track" aria-hidden="true">
        <span style="width: ${barWidth}%"></span>
      </div>
    `;
    matchList.appendChild(item);
  });
}

function resetQuiz() {
  state.step = 0;
  state.answers = questions.map(() => []);
  showScreen("intro");
}
