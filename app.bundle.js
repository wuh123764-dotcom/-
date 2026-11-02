/* 由 scripts/build.mjs 从 src/ 生成。可在 file:// 和 GitHub Pages 运行。 */
(() => {
"use strict";
// src/questions.js
const categories = {
  research: {
    name: "研究型",
    short: "把原因弄明白",
    color: "#516ac3",
    description: "更常被追问原因、寻找证据和理解原理的活动吸引。",
    activity: "找一个真正好奇的问题，查阅两种解释，写下支持各自解释的证据。"
  },
  applied: {
    name: "应用型",
    short: "把问题解决掉",
    color: "#d48349",
    description: "更常被发现现实问题、设计方案并根据反馈改进的活动吸引。",
    activity: "观察一个身边的小问题，提出两种解决办法，试行其中一种并记录效果。"
  },
  skill: {
    name: "技能型",
    short: "亲手做出来",
    color: "#4d9a8b",
    description: "更常被动手完成作品、反复练习和提升操作质量的活动吸引。",
    activity: "选一项想学的具体操作，做一个小作品，连续练习三次并比较改进。"
  }
};

const categoryOrder = ["research", "applied", "skill"];

// 三类各五题。所有文字均为本项目原创，未复制现成量表题项。
const questions = [
  {
    id: "R1", category: "research", facet: "追问原因",
    student: "遇到感兴趣的现象时，我愿意继续追问它为什么会发生。",
    parent: "对方遇到感兴趣的现象时，会继续追问它为什么会发生。"
  },
  {
    id: "A1", category: "applied", facet: "识别问题",
    student: "看到生活、学习或工作中的不便时，我愿意想办法让它变得更好。",
    parent: "对方看到生活、学习或工作中的不便时，会尝试想办法改进。"
  },
  {
    id: "S1", category: "skill", facet: "动手操作",
    student: "有机会亲手制作或操作时，我愿意自己上手试一试。",
    parent: "有机会亲手制作或操作时，对方会主动上手尝试。"
  },
  {
    id: "R2", category: "research", facet: "寻找资料",
    student: "对一个问题好奇时，我愿意寻找熟悉范围之外的资料了解它。",
    parent: "对一个问题好奇时，对方会主动寻找熟悉范围之外的资料。"
  },
  {
    id: "A2", category: "applied", facet: "方案设计",
    student: "面对一个具体问题时，我愿意先想出几种可实行的办法。",
    parent: "面对一个具体问题时，对方会提出几种可实行的办法。"
  },
  {
    id: "S2", category: "skill", facet: "操作练习",
    student: "学会一项具体操作后，我愿意再练几次，让动作更熟练。",
    parent: "学会一项具体操作后，对方会继续练习，让动作更熟练。"
  },
  {
    id: "R3", category: "research", facet: "比较解释",
    student: "听到不同说法时，我愿意比较它们各自的依据。",
    parent: "听到不同说法时，对方会追问或比较它们各自的依据。"
  },
  {
    id: "A3", category: "applied", facet: "比较可行性",
    student: "想到解决办法后，我愿意比较哪一种更容易在现实中实行。",
    parent: "想到解决办法后，对方会比较哪一种更容易实行。"
  },
  {
    id: "S3", category: "skill", facet: "排查问题",
    student: "制作或操作出现问题时，我愿意一步步找出哪里出了错。",
    parent: "制作或操作出现问题时，对方会尝试一步步找出原因。"
  },
  {
    id: "R4", category: "research", facet: "理解原理",
    student: "学到一种做法时，我愿意弄明白它背后的原理。",
    parent: "学到一种做法时，对方会主动问它背后的原理。"
  },
  {
    id: "A4", category: "applied", facet: "尝试实施",
    student: "有了一个改进想法后，我愿意尝试把它做出来或用起来。",
    parent: "有了一个改进想法后，对方会尝试把它做出来或用起来。"
  },
  {
    id: "S4", category: "skill", facet: "质量改进",
    student: "完成一个作品后，我愿意再调整细节，让它做得更好。",
    parent: "完成一个作品后，对方会继续调整细节，改善完成质量。"
  },
  {
    id: "R5", category: "research", facet: "持续探究",
    student: "一个问题暂时没有答案时，我愿意过些时间再接着查找。",
    parent: "一个问题暂时没有答案时，对方会过些时间再接着查找。"
  },
  {
    id: "A5", category: "applied", facet: "根据反馈调整",
    student: "试过一种办法后，我愿意根据实际效果调整方案。",
    parent: "试过一种办法后，对方会根据实际效果调整方案。"
  },
  {
    id: "S5", category: "skill", facet: "反复精进",
    student: "做一件需要手上功夫的事时，我愿意反复练到更稳。",
    parent: "做一件需要手上功夫的事时，对方会反复练习，做得更稳。"
  }
];

const responseLabels = ["很不符合", "不太符合", "一般", "比较符合", "非常符合"];

const extraQuestions = [
  { id: "F1", tag: "脑洞现场", student: "给你一间空房间和一个自由周末，你最想把它变成什么？", parent: "如果让对方安排一间空房间和一个自由周末，哪个选项更像对方的选择？", choices: ["装满问题与线索的小型探索室", "把一个生活难题变简单的改造现场", "能亲手做出作品的迷你工作室"], replies: ["给自己留一个问题角：把最近想搞明白的三个问题记下来，挑一个继续追。", "从一个真实不便开工：先改一小处，让方案接受一次真实使用。", "给作品留个位置：做一个看得见的小成果，再改进一处细节。"] },
  { id: "F2", tag: "你的开局方式", student: "刚拿到一件没用过的新工具，你通常怎么开局？", parent: "对方刚拿到一件没用过的新工具，通常怎么开局？", choices: ["先看它为什么这样设计", "先想它能替我解决什么问题", "先试几个按钮，边用边摸索"], replies: ["这次你选了先理解原理。下次可以补一次实际试用，看看解释是否站得住。", "这次你选了先找用途。下次可以先定一个小目标，再看工具能否真正帮上忙。", "这次你选了先动手。试过之后记下一个规律，让摸索变成可重复的方法。"] },
  { id: "L1", tag: "逻辑小彩蛋", student: "钥匙藏在红、蓝、绿三个盒子中的一个。红盒说“钥匙不在红盒”，蓝盒说“钥匙在红盒”，绿盒说“钥匙不在蓝盒”。三句话只有一句是真的。钥匙在哪？", parent: "一起想一想：红盒说“钥匙不在红盒”，蓝盒说“钥匙在红盒”，绿盒说“钥匙不在蓝盒”。钥匙只在一个盒子里，三句话只有一句真。在哪个盒子？", choices: ["红盒", "蓝盒", "绿盒"], correct: 2, explanation: "钥匙在蓝盒。逐一代入：放红盒时两句真；放蓝盒时只有红盒那句话为真；放绿盒时仍有两句真。只有蓝盒满足条件。" },
  { id: "M1", tag: "数学挑战", student: "一个水池有 A、B、C 三根进水管，速度恒定。A+B 注满要 6 小时，B+C 要 8 小时，A+C 要 12 小时。空池三管一起开，多久注满？", parent: "一个水池的三根进水管速度恒定。A+B 注满要 6 小时，B+C 要 8 小时，A+C 要 12 小时。空池三管一起开，多久注满？", choices: ["5 小时 20 分钟", "8 小时", "4 小时"], correct: 1, explanation: "三组组合每小时分别完成 1/6、1/8、1/12 池。相加为 3/8 池，但每根管被算了两次，所以三管合开每小时完成 3/16 池。总时间为 16/3 小时，即 5 小时 20 分钟。" }
];



// src/guidance.js
const reportSources = [
  {
    name: "《教育强国建设规划纲要（2024—2035年）》",
    note: "提供研究型、应用型、技能型等办学定位的政策背景。",
    url: "https://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202501/t20250119_1176193.html"
  },
  {
    name: "《中华人民共和国职业教育法》",
    note: "说明职业教育的类型地位与多层次发展。",
    url: "https://qspfw.moe.gov.cn/html/sublaws/20220512/19489.html"
  },
  {
    name: "中国青少年学术兴趣研究（Luo 等，2019）",
    note: "提示兴趣有不同成分，不能只凭一个回答下结论。",
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.02301/full"
  },
  {
    name: "兴趣发展的四阶段模型（Hidi 与 Renninger，2006）",
    note: "提示兴趣会随着参与和体验发展。",
    url: "https://eric.ed.gov/?id=EJ736298"
  }
];

const policyContent = {
  common: {
    date: "2026 年 9 月 · 中办、国办文件",
    title: "高校正在按不同方向分类发展",
    quote: "分类推进高校改革",
    takeaways: ["2026 年 9 月的新文件提出，高校将按照研究型、应用型、技能型等定位分类发展。", "简单说，大学不再只用一把尺子衡量。有人更适合钻研原理，有人擅长解决真实问题，也有人靠扎实的动手能力成长。"],
    source: "《关于分类推进高校改革的意见》发布报道（教育部网站）",
    url: "https://www.moe.gov.cn/jyb_xwfb/s5147/202609/t20260921_1451497.html"
  },
  research: {
    date: "2026 年 9 月 · 发布会政策说明",
    title: "研究型：把问题追到底",
    quote: "国家重大战略需求",
    takeaways: ["教育部发布会提到，研究型高校重点支撑国家重大战略需求。", "这类学习不只要求知道答案，还要会提问题、找证据、做研究。"],
    source: "教育部网站：2026 年 9 月 23 日发布会报道《加快推进教育强国建设》",
    url: "https://www.moe.gov.cn/jyb_xwfb/s5147/202609/t20260924_1451839.html"
  },
  applied: {
    date: "2026 年 9 月 · 发布会政策说明",
    title: "应用型：学到的东西要真的能用",
    quote: "区域高质量发展",
    takeaways: ["教育部发布会提出，应用型高校重点服务区域高质量发展，“十五五”时期支持建设 200 所左右高水平应用型本科高校。", "这类学习更常围绕项目、案例和真实需求展开，重点是能不能把知识变成解决办法。"],
    source: "教育部网站：2026 年 9 月 23 日发布会报道《加快推进教育强国建设》",
    url: "https://www.moe.gov.cn/jyb_xwfb/s5147/202609/t20260924_1451839.html"
  },
  skill: {
    date: "2026 年 9 月 · 发布会政策说明",
    title: "技能型：靠实操把本事练出来",
    quote: "生产实践一线",
    takeaways: ["教育部发布会提出，技能型高校要紧密对接生产实践一线，加强学校、地方和企业的合作。", "这类学习强调上手、反复练习和完成质量，不是“低一等”，而是把本事真正练到手。"],
    source: "教育部网站：2026 年 9 月 23 日发布会报道《加快推进教育强国建设》",
    url: "https://www.moe.gov.cn/jyb_xwfb/s5147/202609/t20260924_1451839.html"
  }
};

const experienceTasks = {
  research: {
    title: "把一个“为什么”查明白",
    materials: "纸笔，能查阅书籍或网页的条件",
    example: "默认题目：同样的一张纸，为什么折叠后更容易支撑小物件？也可换成自己好奇的自然、历史或生活问题。",
    steps: ["前 3 分钟：先写下自己的解释，以及想弄清的一个疑问。", "接着 12 分钟：找两份解释，至少一份来自教材、科普机构或其他可确认作者的资料；记录出处与不同点。", "最后 5 分钟：用自己的话写 100 字左右的解释，标出一处仍不确定的地方。"],
    output: "一张“问题—原先解释—资料依据—现在理解”的记录卡。",
    observe: "时间到了以后，是否还想继续查证？有没有主动提出下一个问题？"
  },
  applied: {
    title: "解决一个身边的小不便",
    materials: "纸笔、身边已有物品；可用手机拍照记录",
    example: "默认题目：常用学习用品找起来不方便。也可换成任务安排混乱、活动通知容易遗漏等具体问题。",
    steps: ["前 5 分钟：写清谁遇到什么不便，选一个可观察的目标，例如常用物品有固定位置。", "接着 5 分钟：写两种办法，各记下一项好处和一项限制，再选一种。", "最后 10 分钟：做出最小改进并试用一次；请一位使用者或自己提出一个问题，再调整一处。"],
    output: "一张“问题—两种办法—实施前后—一处修改”的方案卡。",
    observe: "是否愿意主动把办法做出来？听到反馈后，是否想再改一版？"
  },
  skill: {
    title: "把同一项操作练习三次",
    materials: "三张相同的纸、少量胶带；或选择无需新增材料的书写、排版等操作",
    example: "默认任务：制作三角桌牌。把纸沿长边三等分折叠，围成三角柱，固定接缝，放在桌面检查。",
    steps: ["前 3 分钟：确定同一种做法，只选一个改进标准，例如折边对齐、站立稳定。", "接着 12 分钟：完成三轮操作，每轮约 4 分钟；第二、三轮针对上一轮的一个问题调整。", "最后 5 分钟：把三轮成果并排，记录哪里更稳定、哪里仍需练习。"],
    output: "三轮成果或照片，加一张“本轮问题—下轮改法”的练习记录。",
    observe: "重复时是否仍愿意投入？是否会注意细节并主动修正？"
  }
};

const strengthProfiles = [
  {
    id: "research-why", category: "research", title: "别人记住答案，你还会再问一句为什么", questions: ["R1", "R4"],
    action: "挑一个最近好奇的问题，查清原理，再用自己的话讲给别人听。",
    evidence: "追问原因、理解原理", summary: "你不太满足于“大家都这么说”，更想知道一件事为什么成立。这个习惯会帮你看懂表面背后的规律。",
    habit: "每周保留一个“为什么”，先写自己的解释，再找资料核对。每次用三句话向别人讲清楚。",
    progress: "连续做 4 周，整理成 4 张解释卡；给每张卡补一个反例或仍未解决的问题。",
    signal: "能说清“原来怎么想、依据是什么、哪里还不确定”。"
  },
  {
    id: "research-evidence", category: "research", title: "你不容易被第一种说法带着走", questions: ["R2", "R3", "R5"],
    action: "找两份不同解释，比较它们各自的依据，写下自己更认可哪一种。",
    evidence: "寻找资料、比较依据、持续查找", summary: "听到不同说法时，你会想看看各自凭什么。暂时找不到答案，你也愿意过一阵再回来继续查。",
    habit: "每周选一个疑问，用“说法—依据—出处”三栏比较两份资料，不急着把第一种解释当结论。",
    progress: "4 周后选一张记录复查，补充新资料，写出一次改观点或保持观点的理由。",
    signal: "资料来源更清楚，能够区分事实、解释和自己的猜测。"
  },
  {
    id: "applied-options", category: "applied", title: "看见麻烦，你脑子里会自动冒出办法", questions: ["A1", "A2", "A3"],
    action: "找一个身边的小不便，想出两种办法，选一种试试看。",
    evidence: "发现不便、提出办法、比较可行性", summary: "遇到不方便的地方，你不只会吐槽，还会想有没有别的做法，并判断哪一种真的行得通。",
    habit: "每周写一张小问题卡，至少列两种办法，用时间、需要的资源、可能效果做简单比较。",
    progress: "连续积累 4 张方案卡；最后一周给任务加一个限制，例如只用现有物品或 20 分钟内完成。",
    signal: "能清楚说出为什么选这个办法，以及它放弃了什么。"
  },
  {
    id: "applied-iterate", category: "applied", title: "你不是只会想，还会真的去试", questions: ["A4", "A5"],
    action: "把一个想法做成能试用的第一版，请人用一次，再改一处。",
    evidence: "动手试、看效果再调整", summary: "有了想法以后，你愿意先做出一版。发现不好用，也不会死守原方案，而是根据实际效果继续改。",
    habit: "每周做一个小改进，先完成能试用的第一版，记录一次使用反馈，再改一个具体细节。",
    progress: "坚持 4 周，保留“第一版—反馈—第二版”的过程记录，选一项让别人实际试用。",
    signal: "能够展示改前与改后的差别，并讲清修改依据。"
  },
  {
    id: "skill-troubleshoot", category: "skill", title: "东西出了问题，你愿意自己找原因", questions: ["S1", "S3"],
    action: "选一项小操作，出现问题时只改一个步骤，看看结果怎样变化。",
    evidence: "自己上手、一步步排查", summary: "你不怕先上手试。出了问题，你也愿意把步骤拆开，找到到底是哪一步不对。",
    habit: "每周选一次小操作，遇到问题先记录现象，再一次只改一个步骤，观察变化。",
    progress: "积累 4 条“现象—排查—有效改法”，整理成下次能照着用的检查清单。",
    signal: "能够复现问题、描述排查顺序，而不只靠反复重来。"
  },
  {
    id: "skill-practice", category: "skill", title: "同一件事，你能越做越顺", questions: ["S2", "S4", "S5"],
    action: "把同一项操作连续做三次，只盯一个细节，比较前后有没有进步。",
    evidence: "重复练习、调整细节、做得更稳", summary: "第一次做完并不是结束。你会注意细节，再练几次，直到动作更顺、结果更稳定。",
    habit: "每周安排 3 次、每次 10–15 分钟的短练习，只盯一个可观察标准，保留第一次与最后一次成果。",
    progress: "连续练 4 周，每周请一位熟悉这项操作的人给一个具体反馈，下周只挑一点改进。",
    signal: "完成质量更稳定，能指出自己具体改进了哪一步。"
  }
];

function selectStrengths(answers) {
  const qualified = strengthProfiles.map(profile => {
    const values = profile.questions.map(id => answers[id]).filter(value => Number.isInteger(value) && value >= 1 && value <= 5);
    const mean = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    return { ...profile, valid: values.length, positive: values.filter(value => value >= 4).length, mean };
  }).filter(profile => profile.valid >= 2 && profile.positive >= 2 && profile.mean >= 4)
    .sort((a, b) => b.mean - a.mean || b.valid - a.valid);
  // 同分时尽量展示不同方向；每个长板至少由两道有效回答共同支持。
  const selected = [];
  while (qualified.length && selected.length < 3) {
    const bestMean = qualified[0].mean;
    const index = qualified.findIndex(profile => profile.mean === bestMean && !selected.some(item => item.category === profile.category));
    selected.push(qualified.splice(index >= 0 ? index : 0, 1)[0]);
  }
  return selected;
}


// src/scoring.js

const MIN_VALID_PER_CATEGORY = 3;
const LOW_SIGNAL_MEAN = 2.4;
const UNDIFFERENTIATED_RANGE = 0.35;

function integerPercentages(values) {
  const sum = values.reduce((acc, value) => acc + value, 0);
  const exact = values.map(value => value / sum * 100);
  const floor = exact.map(Math.floor);
  let remaining = 100 - floor.reduce((acc, value) => acc + value, 0);
  const indexes = exact.map((value, index) => ({ index, remainder: value - floor[index] }))
    .sort((a, b) => b.remainder - a.remainder || a.index - b.index);
  for (let i = 0; i < remaining; i += 1) floor[indexes[i].index] += 1;
  return { exact, rounded: floor };
}

function scoreAnswers(answers) {
  const values = Object.fromEntries(categoryOrder.map(id => [id, []]));
  for (const question of questions) {
    const answer = answers[question.id];
    if (answer === null || answer === undefined) continue;
    if (!Number.isInteger(answer) || answer < 1 || answer > 5) {
      throw new Error(`题目 ${question.id} 的答案无效`);
    }
    values[question.category].push(answer);
  }

  const counts = Object.fromEntries(categoryOrder.map(id => [id, values[id].length]));
  const missingCategories = categoryOrder.filter(id => counts[id] < MIN_VALID_PER_CATEGORY);
  if (missingCategories.length) return { status: "insufficient", counts, missingCategories };

  const means = Object.fromEntries(categoryOrder.map(id => [
    id, values[id].reduce((a, b) => a + b, 0) / values[id].length
  ]));
  const maximum = Math.max(...Object.values(means));
  if (maximum < LOW_SIGNAL_MEAN) return { status: "low-signal", counts, means };

  // 探索性产品规则：情境题每题加 0.10，任务题仅作小幅辅助线索。
  // 正误不产生智力等级；未答不扣分。单道任务题最多加 0.04，不能取代核心回答。
  const extraContributions = { research: 0, applied: 0, skill: 0 };
  for (const q of extraQuestions) {
    const answer = answers[q.id];
    if (answer === null || answer === undefined) continue;
    if (!Number.isInteger(answer) || answer < 1 || answer > q.choices.length) throw new Error(`题目 ${q.id} 的答案无效`);
    if (q.id === "F1" || q.id === "F2") extraContributions[categoryOrder[answer - 1]] += 0.10;
    if (q.id === "L1" && answer === q.correct) { extraContributions.research += 0.04; extraContributions.applied += 0.02; }
    if (q.id === "M1" && answer === q.correct) { extraContributions.research += 0.02; extraContributions.applied += 0.04; }
  }
  const matchingScores = Object.fromEntries(categoryOrder.map(id => [id, means[id] + extraContributions[id]]));
  const { exact, rounded } = integerPercentages(categoryOrder.map(id => matchingScores[id]));
  const percentages = Object.fromEntries(categoryOrder.map((id, index) => [id, rounded[index]]));
  const exactPercentages = Object.fromEntries(categoryOrder.map((id, index) => [id, exact[index]]));
  const ranked = [...categoryOrder].sort((a, b) => matchingScores[b] - matchingScores[a] || categoryOrder.indexOf(a) - categoryOrder.indexOf(b));
  const gap = exactPercentages[ranked[0]] - exactPercentages[ranked[1]];
  const range = Math.max(...Object.values(means)) - Math.min(...Object.values(means));
  const closeness = gap < 4 ? "close" : gap < 8 ? "slight" : "clear";
  return {
    status: "ready", counts, means, matchingScores, extraContributions, percentages, exactPercentages,
    ranked, gap, closeness, undifferentiated: range < UNDIFFERENTIATED_RANGE
  };
}


// src/report-content.js

function renderPolicySection(scored) {
  const directions = scored.status !== "ready" || scored.undifferentiated
    ? categoryOrder
    : scored.closeness === "close" ? scored.ranked.slice(0, 2) : scored.ranked.slice(0, 1);
  const cards = [policyContent.common, ...directions.map(id => policyContent[id])].map(policy => `
    <article class="policy-excerpt">
      <div class="source-year">${policy.date}</div><h3>${policy.title}</h3>
      <blockquote>“${policy.quote}”</blockquote>
      <ul>${policy.takeaways.map(text => `<li>${text}</li>`).join("")}</ul>
      <a class="source-link" href="${policy.url}" target="_blank" rel="noopener noreferrer">原始文件：${policy.source} ↗</a>
    </article>`).join("");
  return `<section class="report-card full" aria-labelledby="policy-heading"><div class="section-label">2026 年新政策</div><h2 id="policy-heading">高校为什么开始强调这三种方向？</h2><div class="policy-excerpts">${cards}</div></section>`;
}

function renderPersonalPortrait(scored, answers, role) {
  if (scored.status !== "ready") return "";
  const id = scored.ranked[0];
  const profiles = {
    research: { title: "遇到感兴趣的事，你会忍不住一直问下去", scene: "别人听到答案可能就翻篇了，你却还会想：为什么？证据在哪？还有没有另一种解释？你不是故意较真，只是不想稀里糊涂地接受一个结论。", rhythm: "先冒出问题 → 自己猜一遍 → 找资料核对 → 又发现新问题。", friction: "如果最近做什么都觉得无聊，给正在做的事加一个你真想知道的问题。" },
    applied: { title: "看见问题，你第一反应是：能不能改一改？", scene: "比起一直聊想法，你更在意它到底能不能用。发现不方便的地方，你会想办法、试一版，再看哪里需要调整。事情真的变好一点，会让你很有成就感。", rhythm: "发现不方便 → 想几个办法 → 选一个试 → 看效果再改。", friction: "如果一件事让你觉得很空，先找出它到底要替谁解决什么问题。" },
    skill: { title: "你更相信亲手做一遍，而不是只听别人讲", scene: "你往往是在动手以后才真正明白。第一次没做好也没关系，你会盯着出错的地方再来一次。看到动作更顺、成品更稳，会让你觉得这次没白练。", rhythm: "先做一次 → 找到不顺的地方 → 只改一点 → 再做一次。", friction: "如果一直听讲却记不住，尽快给自己安排一次上手的机会。" }
  };
  const profile = profiles[id];
  const supported = selectStrengths(answers).filter(item => item.category === id);
  const evidence = supported.length
    ? `你在“${supported.map(item => item.evidence).join("、")}”这些题上选得很明确。`
    : `这一类得分最高，不过你的选择比较分散，下面这段不一定每句都像你。`;
  const scenes = extraQuestions.slice(0, 2).filter(q => Number.isInteger(answers[q.id])).map(q => `<li>${q.tag}中选择了“${q.choices[answers[q.id] - 1]}”。</li>`).join("");
  const caution = scored.undifferentiated ? "三类得分很接近，所以你可能会根据事情不同，换一种做法。" : "";
  let scene = role === "parent" ? profile.scene.replaceAll("你", "对方") : profile.scene;
  return `<section class="report-card full personal-portrait"><div class="section-label">这段像不像你？</div><h2>${profile.title}</h2><p class="portrait-lead">${scene}</p><div class="portrait-proof"><strong>从你的哪些选择看出来？</strong><p>${evidence}</p>${scenes ? `<ul>${scenes}</ul>` : ""}</div><div class="portrait-pair"><div><h3>你常见的做事顺序</h3><p>${profile.rhythm}</p></div><div><h3>最近没劲时，可以这样试</h3><p>${profile.friction}</p></div></div>${caution ? `<p class="fine-print">${caution}</p>` : ""}</section>`;
}

function recordRow(id) {
  const choices = '<option value="">请选择</option>' + [1, 2, 3, 4, 5].map(value => `<option value="${value}">${value}</option>`).join("");
  return `<article class="trial-record"><h4>${categories[id].name}任务</h4><div class="record-ratings">
    <label>过程投入感 <span>1 很难投入 — 5 很投入</span><select aria-label="${categories[id].name}任务过程投入感">${choices}</select></label>
    <label>还想继续吗 <span>1 不想 — 5 很想</span><select aria-label="${categories[id].name}任务继续意愿">${choices}</select></label>
    </div><label class="record-note">记下一个真实表现<textarea rows="2" aria-label="${categories[id].name}任务表现记录" placeholder="例如：时间到了还想查一个问题；主动改了第二版；第三次更注意细节。"></textarea></label></article>`;
}

function renderActivityTrial(role) {
  const tasks = categoryOrder.map((id, index) => {
    const task = experienceTasks[id];
    return `<article class="trial-task"><div class="trial-task-top"><span>任务 ${index + 1} · ${categories[id].name}</span><span>20 分钟</span></div><h3>${task.title}</h3><p class="task-materials"><strong>准备：</strong>${task.materials}</p><p class="task-example">${task.example}</p><ol>${task.steps.map(step => `<li>${step}</li>`).join("")}</ol><div class="task-output"><strong>完成后留下：</strong>${task.output}</div><p class="task-observe"><strong>观察重点：</strong>${task.observe}</p></article>`;
  }).join("");
  const roleTip = role === "parent"
    ? "观察者可提供材料、计时和记录，活动由本人完成。投入感和继续意愿由本人自己选择，观察者另外记下表现。"
    : "自己选题、自己完成。按真实感受记录，不必为了符合问卷第一名而提高分数。";
  return `<section class="report-card full" aria-labelledby="trial-heading"><div class="section-label">别只看结果，亲手试一遍</div><h2 id="trial-heading">连续 3 天，每天做一个 20 分钟小任务</h2><p class="report-copy">三个任务分别对应研究型、应用型和技能型。先后顺序随意，尽量都在不被打扰的时候做。${roleTip}</p><div class="trial-task-list">${tasks}</div>
    <div class="record-heading"><h3>做完马上记一笔</h3><p>记录只用来比较三次的真实感受，不会重新计算结果，也不会上传。</p></div>
    <div class="trial-records">${categoryOrder.map(recordRow).join("")}</div>
    <div class="trial-review"><h3>做完以后怎么看？</h3><ul><li><strong>哪一个做完还想继续：</strong>它比问卷分数更值得参考。</li><li><strong>两个都喜欢：</strong>可以把它们放在同一件事里，例如先查原理，再做出一个小作品。</li><li><strong>和测试结果不一样：</strong>以真实体验为准，换一个题目再试一次也可以。</li></ul></div></section>`;
}

function renderStrengthSection(scored, answers, role) {
  const strengths = selectStrengths(answers);
  if (scored.status !== "ready" || !strengths.length) {
    return `<section class="report-card full" aria-labelledby="strength-heading"><div class="section-label">你可能还没发现的优点</div><h2 id="strength-heading">这次没有特别集中的答案</h2><p class="report-copy">这不代表你没有长处，只是目前没有哪一组回答特别突出。做完下面 3 个小任务，再看哪一个让你做完还想继续。</p></section>`;
  }
  const cards = strengths.map(strength => `<article class="strength-card"><div class="direction-kicker">${categories[strength.category].name}</div><h3>${strength.title}</h3><p>${role === "parent" ? strength.summary.replaceAll("你", "对方") : strength.summary}</p><div class="strength-evidence">你在“${strength.evidence}”这组题里，有 ${strength.positive} 项选了比较符合或非常符合。</div><p class="strength-one-action"><strong>把这个优点用起来：</strong>${strength.action}</p></article>`).join("");
  return `<section class="report-card full" aria-labelledby="strength-heading"><div class="section-label">你可能低估了自己的地方</div><h2 id="strength-heading">${role === "parent" ? "对方身上" : "你身上"}有 ${strengths.length} 个很实用的优点</h2><div class="strength-list">${cards}</div></section>`;
}





// src/app.js

const app = document.querySelector("#app");
const state = { page: "home", role: null, index: 0, answers: {} };
const quizQuestions = [...questions, ...extraQuestions];

function navigate(page) {
  state.page = page;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function home() {
  return `<section class="hero">
    <div>
      <div class="eyebrow">好奇自己，就来试试 · 19 题轻测评</div>
      <h1>明明很努力，<br>怎么还没<em>找到感觉？</em></h1>
      <p class="hero-lead">有些事越做越有劲，有些事却总想拖。问题可能不在努力，而在于你更喜欢哪一种做法：把原因弄明白、把问题解决掉，还是亲手做出成果。</p>
      <div class="hero-pills"><span class="pill">19 道题</span><span class="pill">约 5–8 分钟</span><span class="pill">2 道脑洞 + 逻辑与数学彩蛋</span><span class="pill">学生、职场人、好奇党都可玩</span></div>
      <button class="button" data-action="intro">测测哪一种最像我 <span aria-hidden="true">→</span></button>
      <p class="disclaimer">没有好坏之分，也不拿它判断智商、成绩或录取结果。</p>
    </div>
    <div class="hero-visual" aria-hidden="true"><div class="orbit"></div><div class="orbit two"></div><div class="orbit three"></div><div class="visual-core">三种方向<br>都能成才</div><div class="visual-label a">研究 · 把原因弄明白</div><div class="visual-label b">应用 · 把问题解决掉</div><div class="visual-label c">技能 · 亲手做出来</div></div>
  </section>`;
}

function intro() {
  return `<section class="section">
    <div class="kicker">开始之前</div><h1>这次要测谁？</h1>
    <p class="subtle">可以测自己，也可以根据平时看到的表现，替熟悉的人测一遍。</p>
    <div class="role-grid">
      <button class="role-card ${state.role === "student" ? "selected" : ""}" data-role="student" aria-pressed="${state.role === "student"}"><span class="role-icon" aria-hidden="true">✦</span><strong>测测我自己</strong><small>按最近的真实想法回答，不用选“更优秀”的选项</small></button>
      <button class="role-card ${state.role === "parent" ? "selected" : ""}" data-role="parent" aria-pressed="${state.role === "parent"}"><span class="role-icon" aria-hidden="true">◈</span><strong>替熟悉的人看看</strong><small>适用于家长等观察视角；不了解就选“不清楚”</small></button>
    </div>
    <div class="intro-box"><h2>怎么答更准？</h2><p>按最近三个月的真实情况选，别选“看起来更优秀”的答案。确实没做过，就选“不清楚”。</p><p>不问成绩和学校，也没有标准答案。</p></div>
    <button class="button" data-action="start" ${state.role ? "" : "disabled"}>进入问卷 →</button>
    <p class="disclaimer">答卷只在当前页面计算，不会上传到服务器。刷新页面会清除答案。</p>
  </section>`;
}

function quiz() {
  const q = quizQuestions[state.index];
  const selected = state.answers[q.id];
  const isParent = state.role === "parent";
  const progress = (state.index + 1) / quizQuestions.length * 100;
  const choiceButtons = (q.choices || responseLabels).map((label, index) => {
    const value = index + 1;
    return `<button class="choice ${selected === value ? "selected" : ""}" data-answer="${value}" aria-pressed="${selected === value}"><span class="choice-mark" aria-hidden="true">✓</span>${label}</button>`;
  }).join("");
  const skipSelected = selected === null;
  return `<section class="section">
    <div class="quiz-head"><div class="progress-row"><span>${isParent ? "他人观察" : "本人作答"}</span><span>${state.index + 1} / ${quizQuestions.length}</span></div><div class="progress-track" role="progressbar" aria-label="答题进度" aria-valuenow="${state.index + 1}" aria-valuemin="0" aria-valuemax="${quizQuestions.length}"><div class="progress-fill" style="width:${progress}%"></div></div></div>
    <div class="question-card"><div class="kicker">${q.tag || "按最近的真实情况来就好"}</div><h1>${isParent ? q.parent : q.student}</h1><p class="question-note">${q.choices ? "选一个你认可的答案，不限时。" : "选择最接近实际情况的一项。"}</p><div class="choices" role="group" aria-label="作答选项">${choiceButtons}<button class="choice ${skipSelected ? "selected" : ""}" data-answer="unknown" aria-pressed="${skipSelected}"><span class="choice-mark" aria-hidden="true">✓</span>${q.choices ? "这题先跳过" : isParent ? "不清楚 / 未观察到" : "没接触过 / 无法判断"}</button></div>
    <div class="quiz-actions"><button class="text-button" data-action="back">${state.index === 0 ? "返回选择身份" : "← 上一题"}</button><button class="button" data-action="next" ${selected === undefined ? "disabled" : ""}>${state.index === quizQuestions.length - 1 ? "查看结果" : "下一题 →"}</button></div></div>
    <p class="tip">可以返回修改答案。无需填写姓名或成绩。</p>
  </section>`;
}

function resultIntro(result) {
  const [first, second] = result.ranked;
  if (result.undifferentiated || result.closeness === "close") {
    return {
      title: "你不是只有一种固定模式",
      lead: result.undifferentiated
        ? "三类得分很接近。你会根据事情不同，换着用不同的做法。"
        : `你的${categories[first].name}和${categories[second].name}得分很接近，这两种做事方式都很像你。`
    };
  }
  if (result.closeness === "slight") return {
    title: `你的答案更靠近「${categories[first].name}」`,
    lead: `不过${categories[second].name}也很接近。你很可能会在两种做事方式之间切换。`
  };
  return {
    title: `你的答案最靠近「${categories[first].name}」`,
    lead: `在这 19 道题里，和${categories[first].name}有关的选择最集中。下面看看它具体像你在哪里。`
  };
}

function sourceSection() {
  const links = reportSources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.name} ↗</a><span>${source.note}</span></li>`).join("");
  return `<div class="report-card full report-method"><details><summary>这份测试参考了什么？</summary><p>三类方向参考国家政策，体验活动参考兴趣研究。它适合用来认识自己，不用来预测升学、录取或未来成就。</p><ul class="source-list">${links}</ul></details></div>`;
}

function bonusSection() {
  const cards = extraQuestions.map(q => {
    const answer = state.answers[q.id];
    const chosen = q.choices[answer - 1];
    const text = q.explanation || q.replies[answer - 1];
    return `<article class="bonus-card"><div class="section-label">${q.tag}</div><h3>${chosen ? `你选了：${chosen}` : "这题先留个悬念"}</h3><p>${text || "下次想好再来试试，也可以直接看下面的活动方案。"}</p></article>`;
  }).join("");
  return `<section class="report-card full"><h2>4 道彩蛋题，答案在这里</h2><p class="fine-print">这 4 题也参与了计算，但占比不大。逻辑题和数学题答错不扣分。</p><div class="policy-excerpts">${cards}</div></section>`;
}

function result() {
  const scored = scoreAnswers(state.answers);
  const perspective = state.role === "parent" ? "他人观察" : "本人作答";
  if (scored.status !== "ready") {
    const isLow = scored.status === "low-signal";
    return `<section class="section wide"><div class="kicker">${perspective} · 结果页</div><h1>这次还看不出你更像哪一种</h1><div class="warning-card"><h2>${isLow ? "你对三类事情的兴趣都不算高" : "有些题还没有足够答案"}</h2><p>${isLow ? "可能只是题目没有碰到你真正喜欢的内容。先试试下面 3 个小任务，真实感受比硬选一个结果更有用。" : "至少有一类题答得太少，所以这次不硬给百分比。可以返回补答，也可以直接试试下面的小任务。"}</p></div><div class="result-grid">${renderPolicySection(scored)}${renderActivityTrial(state.role)}${renderStrengthSection(scored, state.answers, state.role)}${bonusSection()}${sourceSection()}</div><div class="report-actions"><button class="button secondary" data-action="review">返回检查答案</button><button class="text-button" data-action="restart">重新开始</button></div></section>`;
  }
  const interpretation = resultIntro(scored);
  const bars = categoryOrder.map(id => `<div class="bar-item"><div class="bar-top"><span>${categories[id].name} <small>· ${categories[id].short}</small></span><span>${scored.percentages[id]}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${scored.percentages[id]}%;background:${categories[id].color}"></div></div></div>`).join("");
  return `<section class="section wide">
    <div class="result-header"><div class="kicker">${perspective} · 快速版结果</div><h1>${interpretation.title}</h1><p class="subtle">${interpretation.lead}</p></div>
    <div class="result-grid">
      <div class="report-card full"><h2>你的三类结果</h2>${bars}<div class="callout">这里比较的是三种做事方式，不是谁更聪明，也不是录取概率。</div></div>
      ${renderPersonalPortrait(scored, state.answers, state.role)}
      ${renderStrengthSection(scored, state.answers, state.role)}
      ${renderPolicySection(scored)}
      ${renderActivityTrial(state.role)}
      ${bonusSection()}
      ${sourceSection()}
    </div>
    <p class="report-ending">结果不用收藏吃灰。<br>从下面挑一个小任务，真的做一次，会比多测十遍更了解自己。</p>
    <div class="report-actions"><button class="button" data-action="print">打印 / 保存为 PDF</button><button class="button secondary" data-action="review">修改答案</button><button class="text-button" data-action="restart">重新开始</button></div>
  </section>`;
}

function render() {
  app.innerHTML = state.page === "home" ? home() : state.page === "intro" ? intro() : state.page === "quiz" ? quiz() : result();
}

app.addEventListener("click", event => {
  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    if (state.role !== roleButton.dataset.role) state.answers = {};
    state.role = roleButton.dataset.role;
    render();
    app.querySelector(`[data-role="${state.role}"]`)?.focus();
    return;
  }
  const answerButton = event.target.closest("[data-answer]");
  if (answerButton) {
    state.answers[quizQuestions[state.index].id] = answerButton.dataset.answer === "unknown" ? null : Number(answerButton.dataset.answer);
    render();
    app.querySelector(`[data-answer="${answerButton.dataset.answer}"]`)?.focus();
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "intro") navigate("intro");
  if (action === "start" && state.role) { state.index = 0; navigate("quiz"); }
  if (action === "back") { if (state.index === 0) navigate("intro"); else { state.index -= 1; navigate("quiz"); } }
  if (action === "next" && state.answers[quizQuestions[state.index].id] !== undefined) {
    if (state.index === quizQuestions.length - 1) navigate("result");
    else { state.index += 1; navigate("quiz"); }
  }
  if (action === "review") { state.index = 0; navigate("quiz"); }
  if (action === "restart") { state.role = null; state.index = 0; state.answers = {}; navigate("home"); }
  if (action === "print") window.print();
});

const printDetails = new Set();
window.addEventListener?.("beforeprint", () => {
  for (const details of app.querySelectorAll("details")) {
    if (!details.open) { details.open = true; printDetails.add(details); }
  }
});
window.addEventListener?.("afterprint", () => {
  for (const details of printDetails) details.open = false;
  printDetails.clear();
});

render();




})();
