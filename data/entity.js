data.entity = [
  {
    id: "변종된 오염물",
    health: 200,
    item: ['약', '밴드'],
    pattern: [
      {
        id: "오염시키기",
        text: "꿀렁이는 소리가 한 번 나더니 그 좁은 주변을 녹색으로 물들인다. 으.",
        success: "#name은(는) 그 녹색으로 덮혔다. 며칠 간 샤워는 어렵겠다...",
        fail: "#name은(는) 간신히 피하고 숨을 헐떡인다.",
        evade: -85,
        damage: 1,
        event() {
          setStat("evade", -2);
          setStat("attack", -2);
          setStat("health", -1);
          data.screenEffect.blur();
        },
      },
      {
        id: "다리꿀렁",
        text: "#name의 다리를 향해 꿀렁이는 녹색 물체가 다가온다.",
        success: "#name의 다리에 마비가 왔다. 다음 공격부터는 피하기가 어렵겠다.",
        fail: "#name은(는) 다리를 향해 다가오는 녹색 물질을 간신히 피했다.",
        evade: -120,
        damage: 0,
        event() {
          setStat("evade", -2);
          data.screenEffect.eyeworse();
        },
      },
    ],
  },
  {
    id: "무기를 든 창기사",
    health: 500,
    item: ['창','약','약'],
    pattern: [
      {
        id: "찌르기",
        text: "낡은 창을 들어오르더니 그대로 #name을 향해 창이 다가온다.",
        success: "창은 #name의 복부를 관통했다. 다른 괴물과는 다르다. 당신의 희망마저 깎인다.",
        fail: "그를 뚫을 것만 같은 창을 슥 피했다.",
        evade: -50,
        damage: 120,
        event() {
          setStat("health", -120);
          setStat("hope", -4);
          data.screenEffect.invertShake();
        },
      },
    ],
  },
]