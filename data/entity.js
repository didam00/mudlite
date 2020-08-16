data.entity = [
  {
    id: "변종된 오염물",
    health: 200,
    item: ['약', '밴드'],
    def: 0,
    die: () => {

    },
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
    die: () => {

    },
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
    die: () => {

    },
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
    id: "가고일 석상",
    health: 1,
    item: ['파괴된 돌조각'],
    def: 0,
    die: () => {
      get('신비의 돌조각')
      text()
    },
    pattern: [
      {
        id: "모두 부수기",
        text: "주변의 모든 것들을 가고일에게로 끌어당긴다.",
        success: "모든 것을 부쉈다.",
        fail: "#name은(는) 빠르게 움직여 공격을 피했다.",
        evade: -1000,
        event() {
          setStat("health", -9999);
          data.screenEffect.invertShake();
        },
      },
    ],
  },
  {
    id: "날개달린 인간",
    health: 1200,
    item: ['깃'],
    def: 0,
    feather: 0,
    die: () => {
      text("비명을 지르더니 그대로 깃털을 사방으로 날리며 쓰러진다.")
      if(me.evade.total <= 120) {
        setStat('health' -1)
      }
    },
    pattern: [
      {
        id: "깃털궤도",
        text: "깃털을 자신 주변으로 크게 날린다.",
        success: "깃털을 날리더니 보호막같은 걸 형성시킨다. 날개달린 인간은 깃털을 하나 모았다. (현재 "+(enemy.feather)+"개)",
        fail: "#name은(는) 깃털들을 빠르게 무기로 제거한다.",
        evade: -200,
        event() {
          enemy.health += 150
          if(me.evade.total <= 100) {
            text('#name의 부주의함으로 깃털들에 스쳐 피해를 받았다.')
            setStat('health', -1)
            data.screenEffect.blur()
          }
          enemy.feather += 1
        },
      },
      {
        id: "깃털쏟기",
        text: "주변에 있는 깃을 모두 모으더니 #name을(를) 향해 쏘려고 한다.",
        success: "깃털들이 #name을(를) 향해 빠르게 다가간다!",
        fail: "하지만 날리기 전 빠르게 무기로 제거했다.",
        evade: -800,
        event() {
          if(me.evade.total <= (100 + enemy.feather*25)) {
            text('깃털들이 모두 그에게로 다가가 그는 큰 피해를 입은 듯 싶다.')
            setStat('health', -enemy.feather)
            enemy.feather = 0;
            data.screenEffect.invertShake();
          } else {
            text('아 물론 그냥 간단하게 피했다..')
          }
        },
      },
      {
        id: "깃털보호",
        text: "주변에 있는 깃을 모두 모으더니 자신을 보호하려한다",
        success: "깃털들이 빠르게 단단한 보호막을 형성한다. 보호막 또한 증가한것같다.",
        fail: "하지만 형성되기 전 빠르게 무기로 제거했다.",
        evade: -800,
        event() {
          enemy.health += enemy.feather * 70;
          enemy.def += (1 - enemy.def)*(0.07 * enemy.feather)
          enemy.feather = 0;
        },
      },
      {
        id: "깃털정비",
        text: "자신의 날개에서 깃을 뽑아 깃을 얻었다.",
        success: "(현재 "+(enemy.feather)+"개)",
        fail: "-",
        evade: -9999,
        event() {
          enemy.feather += 2;
        },
      },
      {
        id: "젭싼 깃",
        text: "자신의 날개에서 깃을 뽑아 깃을 던진다.",
        success: "정확히 명중했다. 날개달린 인간은 깃털을 하나 얻었다.(현재 "+(enemy.feather)+"개)",
        fail: "#name은(는) 생각보다 빨랐기에 가볍게 피할 수 있었다.",
        evade: -120,
        event() {
          enemy.feather += 1
          data.screenEffect.invertShake();
          setStat('health', -1)
        },
      },
    ],
  },
]