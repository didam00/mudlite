data.situation = [
  {
    id: "start1",
    text: ["당신이 원하는 수식어는 무엇인가요?"],
    answer: [
      "건강한", "활기찬", "강력한", "재빠른", "능숙한", "집중력이 높은", "유식한"
    ],
    effect: [
      () => {me.health += 1},
      () => {me.energy += 1},
      () => {me.attack += 80},
      () => {me.evade += 10},
      () => {me.crit += 2},
      () => {me.critPer += 0.1},
      () => {me.spell += 80},
    ],
    publicEffect: () => {
      inf.situation = "start2"
    }
  },
  {
    id: "start2",
    text: ["단점은 무엇인가요?"],
    answer: [
      "빈혈", "지구력 부족", "나약한", "집중력이 부족한", "느린", "전체적으로 부족한", "하드코어"
    ],
    effect: [
      () => {me.health -= 1;},
      () => {me.energy -= 1;},
      () => {me.attack -= 20; me.crit -= 0.5;},
      () => {me.spell -= 20; me.critPer -= 0.05; me.evade -= 3},
      () => {me.evade -= 7;},
      () => {me.attack -= 8; me.evade -= 2; me.crit -= 0.4; me.critPer -= 0.07; me.spell -= 8;},
      () => {me.health = 2; me.energy = 6; me.spell += 40},
    ],
    publicEffect: () => {
      inf.situation = "start3"
    }
  },
  {
    id: "start3",
    text: ["좋아요","그러면 마지막으로 이 보석이 박힌 펜던트들 중 하나를 골라주세요."],
    answer: [
      "석류석", "자수정", "혈석", "금강석", "취옥", "월장석", "홍옥", "감람석", "청옥", "단백석", "황옥", "지르콘"
    ],

    // 지르콘은 여러빛을 띔

    effect: [
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
    ],
    publicEffect: () => {
      inf.situation = "start4"
    }
  },
  {
    id: "start4",
    text: ["이제 끝났어요.","이젠 앞으로 나아가주세요."],
    answer: [
      "발걸음"
    ],

    // 지르콘은 여러빛을 띔

    effect: [
      () => {}
    ],
    publicEffect: () => {
      
    }
  },
]