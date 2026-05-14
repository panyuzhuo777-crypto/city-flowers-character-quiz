const roleOrder = ["牧也", "麦穗", "江澈", "宛童", "简言", "窦蔻"];

const roles = {
  "牧也": {
    gender: "male",
    mark: "牧",
    image: "assets/characters/muye.jpg",
    caption: "橙红花封面｜“孤独是所有英雄的宿命”",
    line: "热血、守护、把友情扛在肩上的人",
    description:
      "你更像那个先行动、后解释的人。遇见重要的人和事，你会本能地站出去，哪怕方式有些笨拙，也不愿让珍贵的东西被生活轻易夺走。",
    tags: ["爱情", "友情", "热血青年", "青梅竹马"]
  },
  "麦穗": {
    gender: "female",
    mark: "麦",
    image: "assets/characters/maisui.jpg",
    caption: "蓝花封面｜“我不拒绝踏进这条河流”",
    line: "文艺、细腻、在安静里发光的人",
    description:
      "你对情感的感知很深，常常把话藏进诗句、记忆和温柔的行动里。你不一定走在人群最前面，却很清楚自己想守住什么。",
    tags: ["友情", "爱情", "母爱", "文学青年"]
  },
  "江澈": {
    gender: "male",
    mark: "澈",
    image: "assets/characters/jiangche.jpg",
    caption: "紫花封面｜“我想做些疯狂的事”",
    line: "理性、遗憾、仍然想做疯狂事的人",
    description:
      "你习惯用理性撑住自己，也容易把许多话吞回去。你的适配感来自那种不甘心：知道现实坚硬，却仍想为真正重要的事撕开一道口子。",
    tags: ["爱情", "隔代情", "学业", "遗憾"]
  },
  "宛童": {
    gender: "female",
    mark: "宛",
    image: "assets/characters/wantong.jpg",
    caption: "黄玫瑰封面｜“我们都醉了，就像场战斗”",
    line: "明亮、义气、带着冲劲奔跑的人",
    description:
      "你身上有很强的生命力，直接、热烈，也很重情义。你适合在故事里带动气氛、保护朋友，并在亲密关系里学着听见柔软的部分。",
    tags: ["爱情", "父爱", "隔代情", "体育特长"]
  },
  "简言": {
    gender: "male",
    mark: "简",
    image: "assets/characters/jianyan.jpg",
    caption: "白花封面｜“就像流星总会划过夜空”",
    line: "舞台、沉默、把光藏在眼底的人",
    description:
      "你对梦想与自我表达有天然的靠近，也可能习惯用冷静的外壳保护自己。你的角色适配点在于艺术感、距离感，以及不轻易说出口的渴望。",
    tags: ["爱情", "父爱", "艺术特长", "一见钟情"]
  },
  "窦蔻": {
    gender: "female",
    mark: "蔻",
    image: "assets/characters/doukou.jpg",
    caption: "向日葵封面｜“失望坠落，狂奔的我会重新难过”",
    line: "漂泊、真挚、跌倒后还会再笑的人",
    description:
      "你看重关系里的真诚，也懂得人在陌生处寻找归属的心情。你适合那些表面轻松、心里有重量的情感线，越到后面越能显出韧性。",
    tags: ["爱情", "友情", "真挚", "漂泊感"]
  }
};

const roleEmotions = {
  "牧也": ["爱情", "友情"],
  "麦穗": ["友情", "爱情", "母爱"],
  "江澈": ["爱情", "隔代情"],
  "宛童": ["爱情", "父爱", "隔代情"],
  "简言": ["爱情", "父爱"],
  "窦蔻": ["爱情", "友情"]
};

const questions = [
  {
    kicker: "校园",
    type: "single",
    title: "在校园里，你是一个怎样的人？",
    options: [
      { label: "A", text: "执着学业，醉心学习的学霸", score: { "江澈": 1, "麦穗": 1 } },
      { label: "B", text: "放飞自我，就要不走寻常路", score: { "牧也": 1, "宛童": 1 } },
      { label: "C", text: "按部就班，我是听话守纪律乖学生", score: { "简言": 1, "窦蔻": 1 } }
    ]
  },
  {
    kicker: "青春",
    type: "single",
    title: "对于青春，你的理解是怎样的？",
    options: [
      { label: "A", text: "遗憾就是青春", score: { "江澈": 1, "简言": 1 } },
      { label: "B", text: "梦想就是青春", score: { "牧也": 1, "宛童": 1, "麦穗": 1 } },
      { label: "C", text: "初恋就是青春", score: { "简言": 1, "窦蔻": 1 } }
    ]
  },
  {
    kicker: "爱情",
    type: "multi",
    title: "在爱情中，以下哪种剧情更加能够打动你？",
    options: [
      { label: "A", text: "青梅竹马，两小无猜", score: { "牧也": 2, "麦穗": 2, "江澈": 1, "宛童": 1 } },
      { label: "B", text: "惊鸿一瞥，一见钟情", score: { "简言": 2, "窦蔻": 2 } },
      { label: "C", text: "相伴相依，共同成长", score: { "江澈": 2, "宛童": 2 } },
      { label: "D", text: "历经艰辛，修成正果", score: { "牧也": 1, "麦穗": 1 } }
    ]
  },
  {
    kicker: "边界",
    type: "single",
    title: "在爱情中，以下哪种剧情你无法接受？",
    options: [
      { label: "A", text: "一直以来的单方面默默付出", score: { "牧也": -2 } },
      { label: "B", text: "不知彼此想要的是什么", score: { "江澈": -2, "宛童": -2 } },
      { label: "C", text: "巨大误会产生的分别", score: { "简言": -2, "窦蔻": -2 } }
    ]
  },
  {
    kicker: "求学",
    type: "single",
    title: "求学之路上，你曾是一名？",
    options: [
      { label: "A", text: "艺术特长生", score: { "简言": 2 } },
      { label: "B", text: "体育特长生", score: { "宛童": 2 } },
      { label: "C", text: "有过当兵的履历", score: { "牧也": 2 } },
      { label: "D", text: "标准文化课学生", score: { "江澈": 1, "麦穗": 1, "窦蔻": 1 } }
    ]
  },
  {
    kicker: "梦想",
    type: "single",
    title: "青春时期的梦想或者兴趣，你曾更接近哪一种？",
    options: [
      { label: "A", text: "文学青年", score: { "麦穗": 2 } },
      { label: "B", text: "热血青年", score: { "牧也": 2 } },
      { label: "C", text: "艺术达人", score: { "简言": 2 } }
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
      { label: "A", text: "我有从小一起长大的发小", score: { "牧也": 2, "麦穗": 2 } },
      { label: "B", text: "我十分能够理解友情的真挚", score: { "窦蔻": 2, "宛童": 2 } },
      { label: "C", text: "我曾愧对过朋友们而选择逃避", score: { "江澈": 2 } },
      { label: "D", text: "我并不能感受友情可贵", score: { "牧也": -2, "麦穗": -2, "窦蔻": -2, "宛童": -2 } }
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
      { label: "A", text: "扮演一名戏精，带飞全场", score: { "牧也": 2, "宛童": 2, "麦穗": -2 } },
      { label: "B", text: "扮演一名旁观者，冷酷沉默", score: { "窦蔻": 1, "麦穗": 1 } }
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
const roleBadge = document.querySelector("#roleBadge");
const roleImage = document.querySelector("#roleImage");
const roleCaption = document.querySelector("#roleCaption");
const roleName = document.querySelector("#roleName");
const roleLine = document.querySelector("#roleLine");
const roleDescription = document.querySelector("#roleDescription");
const roleTags = document.querySelector("#roleTags");
const resultMatch = document.querySelector("#resultMatch");

totalSteps.textContent = String(questions.length).padStart(2, "0");
renderRolePreviewStrip();

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.preference = button.dataset.preference;
  });
});

document.querySelector("#startButton").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});

document.querySelector("#restartButton").addEventListener("click", resetQuiz);
document.querySelector("#againButton").addEventListener("click", resetQuiz);

document.querySelector("#shareButton").addEventListener("click", async () => {
  const text = `我的《城市里应该有鲜花》适配角色是：${roleName.textContent}`;
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      copyWithFallback(text);
    }
    document.querySelector("#shareButton").textContent = "已复制";
    setTimeout(() => {
      document.querySelector("#shareButton").textContent = "复制结果";
    }, 1400);
  } catch {
    copyWithFallback(text);
    document.querySelector("#shareButton").textContent = "已复制";
    setTimeout(() => {
      document.querySelector("#shareButton").textContent = "复制结果";
    }, 1400);
  }
});

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

function getWinner(scores) {
  const candidates = roleOrder
    .filter((role) => state.preference === "all" || roles[role].gender === state.preference)
    .map((role) => ({ role, score: scores[role] }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    });

  return candidates[0];
}

function renderResult() {
  const scores = getScores();
  const winner = getWinner(scores);
  const role = roles[winner.role];
  const maxScore = Math.max(...Object.values(scores));
  const minScore = Math.min(...Object.values(scores));
  const spread = Math.max(1, maxScore - minScore);
  const match = Math.round(((winner.score - minScore) / spread) * 18 + 82);

  roleBadge.textContent = role.mark;
  roleImage.src = role.image;
  roleImage.alt = `${winner.role}角色海报`;
  roleCaption.textContent = role.caption;
  roleName.textContent = winner.role;
  roleLine.textContent = role.line;
  roleDescription.textContent = role.description;
  resultMatch.textContent = `${match}% MATCH`;
  roleTags.innerHTML = "";
  role.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    roleTags.appendChild(item);
  });

  showScreen("result");
}

function resetQuiz() {
  state.step = 0;
  state.answers = questions.map(() => []);
  showScreen("intro");
}

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function renderRolePreviewStrip() {
  const strip = document.querySelector("#rolePreviewStrip");
  strip.innerHTML = "";

  roleOrder.forEach((roleNameValue) => {
    const role = roles[roleNameValue];
    const item = document.createElement("div");
    item.className = "role-preview";
    item.innerHTML = `
      <img src="${role.image}" alt="${roleNameValue}角色海报" loading="lazy" />
      <span>${roleNameValue}</span>
    `;
    strip.appendChild(item);
  });
}
