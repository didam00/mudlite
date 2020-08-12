data.entity = [
  {
    id: "변종된 오염물",
    health: 200,
    item: ['약', '밴드'],
    def: 0,
    customai: () => {
      
    },
    pattern: [
      {
        id: "오염시키기",
        text: "꿀렁이는 소리가 한 번 나더니 그 좁은 주변을 녹색으로 물들인다. 으.",
        success: "#name은(는) 그 녹색으로 덮혔다. 며칠 간 샤워는 어렵겠다...",
        fail: "#name은(는) 간신히 피하고 숨을 헐떡인다.",
        evade: -75,
        damage: 1,
        event() {
          setStat("evade", -2, "오염");
          setStat("attack", -2, "오염");
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
          setStat("evade", -2, "다리부상");
          data.screenEffect.eyeworse();
        },
      },
      {
        id: "보호하기",
        text: "괴물은 몸을 웅크리더니 주변에 얇은 막을 씌웠다.",
        success: "괴물의 체력이 150 증가하고 방어력이 약간 상승했다! (최대 50% 막음)",
        fail: "아니 이걸 어떻게 막은거야? 버그야?",
        evade: -9999,
        damage: 0,
        event() {
          enemy.health += 200;
          enemy.def += (1 - enemy.def)*0.25;
        },
      },
    ],
  },
  {
    id: "무기를 든 창기사",
    health: 800,
    item: ['창','약','약'],
    def: 0,
    pattern: [
      {
        id: "찌르기",
        text: "낡은 창을 들어오르더니 그대로 #name을(를) 향해 창이 다가온다.",
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
      {
        id: "투호",
        text: "낡은 창을 #name의 팔을 향해 날린다.",
        success: "창은 빠르게 다가가 #name의 팔을 관통시켰다. 체력엔 치명적이진 않지만 공격하는데엔 아주 치명적일 것이다.",
        fail: "#name의 팔을 뚫을 것만 같은 창을 슥 피했다.",
        evade: -55,
        damage: 1,
        event() {
          setStat("attack", -(me.attack.total * 0.010), "팔부상");
          setStat("health", -1);
          data.screenEffect.invertShake();
        },
      },
      {
        id: "약병던지기",
        text: "주머니에서 약병을 하나 꺼내 찾기 어려운 방향으로 던진다",
        success: "약병이 #name의 주변에서 터지고 #name은(는) 치명적인 악영향을 받았다. 시야가 흐려진다.",
        fail: "하지만 집중을 하여 피할 수 있었다.",
        evade: -130,
        damage: 0,
        event() {
          setStat("critPer", -0.03, "안구부상");
          setStat("observe", -8, "안구부상");
          setStat("evade", -6, "안구부상");
          data.screenEffect.eyeworse();
        },
      },
    ],
  },
  {
    id: "움직이는 녹색 팔",
    health: 450,
    item: ['에너지 드링크'],
    def: 0,
    pattern: [
      {
        id: "꿈틀",
        text: "팔이 꿈틀꿈틀 움직이더니 #name에게 미친듯이 빠르게 다가간다!",
        success: "팔은 빠르게 다가가더니 때리진 않고 에너지만 흡수하고 빠르게 빠진다.",
        fail: "팔을 가볍게 쳐내고 #name은(는) 다시 싸움에 집중한다.",
        evade: -90,
        event() {
          setStat("energy", -8);
          enemy.health += 40
          data.screenEffect.blur();
        },
      },
      {
        id: "더세게꿈틀",
        text: "팔이 꿈틀꿈틀 움직이더니 #name에게 미친듯이 빠르게 다가간다!",
        success: "팔은 빠르게 다가가더니 강하게 공격하고 도망간다.",
        fail: "팔을 가볍게 쳐내고 #name은(는) 다시 싸움에 집중한다.",
        evade: -70,
        event() {
          setStat("health", -1);
          data.screenEffect.blur();
        },
      },
    ],
  },
  {
    id: "날개달린 인간",
    health: 1200,
    item: ['깃'],
    def: 0.1,
    pattern: [
      {
        id: "깃털궤도",
        text: "깃털을 자신 주변으로 날리더니 보호막같은 걸 형성시킨다.",
        success: "팔은 빠르게 다가가더니 때리진 않고 에너지만 흡수하고 빠르게 빠진다.",
        fail: "팔을 가볍게 쳐내고 #name은(는) 다시 싸움에 집중한다.",
        evade: -130,
        event() {
          setStat("energy", -15);
          enemy.health += 15
          data.screenEffect.blur();
        },
      },
    ],
  },
]