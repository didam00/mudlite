data.situFunction = {
  random() {
    inf.situation = 'random'+Math.floor(Math.random()*4)
  },
  find_something() {
    setStat('energy', -4)
    inf.situation = 'find_something'+Math.floor(Math.random()*9)
  },
  find_who() {
    setStat('energy', -4)
    inf.situation = 'find_who'+Math.floor(Math.random()*3)
  },
}

// health: 4,
// maxhealth: 4,
// energy: 100,
// maxenergy: 100,
// attack: 100,
// evade: 100,
// crit: 3,
// critPer: 0.05,
// spell: 100,
// lucky: 100,
// angel: 0,
// evil: 0,

data.situation = [
  {
    id: "start1",
    text: ["「실험번호 제 21호」","「성격: ..."],
    answer: [
      "호전적임", "인내심이_강함", "긍정적임", "부정적임", "맹신적임"
    ],
    event: () => {

    },
    effect: {
      호전적임()      {me.attack.base += 40; me.crit.base += 0.5; me.critPer.base += 0.01;},
      인내심이_강함() {me.health += 1; me.maxhealth.base += 1; me.maxenergy.base += 5; me.energy += 5;},
      긍정적임()      {me.angel.base += 10; me.maxenergy.base += 30; me.energy += 30; me.lucky.base += 20;},
      부정적임()      {me.evil.base += 10; me.maxenergy.base -= 30; me.energy += 30; me.lucky.base -= 20; me.spell.base += 50; me.attack.base += 50;},
      맹신적임()      {me.critPer.base += 0.03; me.crit.base += 0.5; me.lucky.base += 20;}
    },
    publicEffect: () => {
      inf.situation = "start2"
    }
  },
  {
    id: "start2",
    text: ["「특이사항. 21세기 이번 생존실험 중...", "마지막 실험체이며, 유일하게", "자진해서 이 실험체로 지원한 사람.", "현재, ..."],
    answer: [
      "다리중상", "어깨중상", "머리중상", "복부중상", "눈중상", "전체경상"
    ],
    event: () => {
      
    },
    effect: {
      다리중상() {me.evade.base *= 0.85; me.maxenergy.base *= 0.8; me.energy *= 0.8;},
      어깨중상() {me.attack.base *= 0.8; me.crit.base *= 0.7; me.critPer.base *= 0.5;},
      머리중상() {me.spell.base *= 0.7; me.energy *= 0.7; me.maxenergy.base *= 0.7;},
      복부중상() {me.health.base -= 1; me.maxhealth.base -= 1; me.energy *= 0.9; me.maxenergy.base *= 0.9;  me.energy.base *= 0.9;},
      눈중상()   {me.evade.base *= 0.85; me.critPer.base -= 0.08; me.observe.base *= 0.9},
      전체경상() {me.maxenergy.base *= 0.92; me.energy *= 0.92; me.crit.base *= 0.9; me.critPer.base -= 0.02; me.evade.base *= 0.92; me.spell.base *= 0.92;}
    },
    publicEffect: () => {
      inf.situation = "start3"
    }
  },
  {
    id: "start3",
    text: ["「이름은..."],
    answer: [
      '아담', "릴리스", '이브',   '카인', '아벨', '셋',   '에녹', '므두셀라', '노아'
    ],
    event: () => {
      find(data.situation, 'start3').answer = random(find(data.situation, 'start3').answer, 3, false);
    },
    effect: {
      아담() {me.name = '아담'; get('붉은 열매 심지'); me.angel.base -= 90; me.evil.base -= 90},
      릴리스() {me.name = '릴리스'; me.energy += 1; me.maxenergy.base += 1; me.angel.base = 0;},
      이브() {me.name = '이브'; get('붉은 열매 심지'); me.angel.base -= 90; me.evil.base -= 89},
      카인() {me.name = '카인'; get('창'); me.evil.base += 1; me.attack.base += 1; me.evil.base += 1},
      아벨() {me.name = '아벨'; get('양고기'); me.effort.base += 1;},
      셋() {me.name = '셋'},
      에녹() {me.name = '에녹'; me.lucky.base += 1},
      므두셀라() {me.name = '므두셀라'; me.maxenergy.base += 1; me.maxhealth.base += 1},
      노아() {me.name = '노아'; get('종이배');},
    },
    publicEffect: () => {
      inf.situation = "start4"
    }
  },
  {
    id: "start4",
    text: ["「이상」"],
    answer: [
      '다음',
    ],
    event: () => {
      
    },
    effect: {
      다음() {},
    },
    publicEffect: () => {
      inf.situation = "first-morning"
    }
  },
  {
    id: "first-morning",
    text: ["어제와는 다른, #name의 새로운 아침이 밝아 왔다.ㅡ #name은(는) 그리 편해보이진 않는다. 그는 새로운 세상에서 무엇을 할지 고민한다."],
    answer: [

    ],
    event: () => {
      
    },
    effect: {
      이동준비: "first-move",
      휴식: "first-rest",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "first-rest",
    text: ["#name은(는) 새로운 곳에서 잠을 잘 못잤는지 일어나다가 다시 눈을 감으며 눕는다."],
    answer: [

    ],
    event: () => {
      if(me.energy < me.maxenergy.total*0.9) {
        me.energy += (me.maxenergy.total-me.energy)*0.05 + 2
      }
      if(me.energy >= me.maxenergy.total*0.9) {
        me.energy = me.maxenergy.total*0.9
        text("#name에게 더 이상 휴식은 의미 없어보인다.");
      }
    },
    effect: {
      기상: '#random',
      드르렁: "rest",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "first-move",
    text: ["#name은(는) 가장 먼저 해야할 일이 걷는 것이라고 생각한 듯 싶다.ㅡ 당신의 노력이 여느때보다 돋보인다."],
    answer: [

    ],
    event: () => {
      setStat('energy', -3)
      setStat('effort', 5)
    },
    effect: {
      누군가를_만나다: '#find_who',
      무언가를_발견하다: '#find_something',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "move",
    text: ["#name은(는) 새로운 곳으로 모험을 떠나기 위한 이동 준비를 하고 있다."],
    answer: [

    ],
    event: () => {
      setStat('energy', -3)
      setStat('effort', 1)
    },
    effect: {
      누군가를_만나다: '#find_who',
      무언가를_발견하다: '#find_something',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "random0",
    text: ["#name은(는) 천장을 바라보고 있다."],
    answer: [
      
    ],
    event: () => {

    },
    effect: {
      이동준비: "move",
      수면: "rest",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "random1",
    text: ["#name은(는) 무언가를 바라보고 있다."],
    answer: [

    ],
    event: () => {

    },
    effect: 
      '@random0' // 답변/효과를 random0과 링크시킴
    ,
    publicEffect: () => {
      
    }
  },
  {
    id: "random2",
    text: ["#name은(는) 허공을 훑어본다."],
    answer: [

    ],
    event: () => {

    },
    effect: 
      '@random0'
    ,
    publicEffect: () => {
      
    }
  },
  {
    id: "random3",
    text: ["#name은(는) 우연히 운동기구를 발견하였다. 에너지가 좀 소비되겠지만 회피력이 어느 정도 증가할 것이다! 어떻게 할까?"],
    answer: [

    ],
    event: () => {
      
    },
    effect: {
      한다() {text('회피력이 증가한 기분이 든다!'); setStat('evade', 8, 'health'); setStat('energy', -8)},
      안한다() {},
    }
    ,
    publicEffect: () => {
      inf.situation = 'random0'
    }
  },
  {
    id: "rest",
    text: ["#name은(는) 편하게 휴식을 취한다."],
    answer: [

    ],
    event: () => {
      if(me.energy < me.maxenergy.total*0.9) {
        me.energy += (me.maxenergy.total-me.energy)*0.05 + 2
      }
      if(me.energy >= me.maxenergy.total*0.9) {
        me.energy = me.maxenergy.total*0.9
        text("#name에게 더 이상 휴식은 의미 없어보인다.");
      }
    },
    effect: {
      기상: '#random',
      드르렁() {},
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something0", // 물건 발견
    text: ["#name은(는) 이전 실험체의 물건을 발견하였다.ㅡ 다쳤을 때 사용할 수 있는 약!"],
    answer: [
      
    ],
    event: () => {
      get("약")
      get("밴드")
    },
    effect: {
      야호: '#random',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_who0", // 괴물 발견
    text: ["#name은(는) 이 괴물을 보자마자 이전 실험체임을 알 수 있었다.ㅡ 그의 미래 모습일 수도 있다. 이 일이 의미가 있을까라는 생각과 함께 희망이 줄어든다."],
    answer: [
      
    ],
    event: () => {
      setStat("hope", -5)
    },
    effect: {
      덤벼라: () => {
        enemy = deepCopy(find(data.entity, "변종된 오염물"))
        inf.situation = 'fight'
      }
      ,
      도망치자: 'escape'
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_who1",
    text: ["#name은(는) 박물관에서 볼법한 창기사를 보았다. 이 곳에 무기를 다룰 수 있는 유일한 #name의 적이며, 가장 위험한 존재 중 하나다. 지금 끝내야한다.","#name은(는) 각오를 다짐하며 근력과 집중력이 향상된다."],
    answer: [
      
    ],
    event: () => {
      setStat("attack", 8, 'bySpearknight')
      setStat("critPer", 0.03, 'bySpearknight')
    },
    effect: {
      덤벼라: () => {
        enemy = deepCopy(find(data.entity, "무기를 든 창기사"))
        inf.situation = 'fight'
      }
      ,
      도망치자: 'escape'
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_who2",
    text: ["#name은(는) 어떤 징그럽게 팔만 덩그러니 있는 초록색을 보았다. 사람 팔이다 저건,",'그리고 살아있다.'],
    answer: [
      
    ],
    event: () => {

    },
    effect: {
      덤벼라: () => {
        enemy = deepCopy(find(data.entity, "움직이는 녹색 팔"))
        inf.situation = 'fight'
      }
      ,
      도망치자: 'escape'
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "fight", // 싸움
    text: [],
    answer: [
      "공격"
    ],
    event: () => {
      text(random([
      "#name은(는) #enemy을(를) 꼭 잡기로 마음먹었다.",
      "#name은(는) #enemy에게 위협을 하였다.",
      "#name은(는) #enemy에게 도발을 시도하였다.",
      "#enemy도 #name을(를) 경계중이다."
      ]))
    },
    effect: {
      공격: 'attack',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "attack",
    text: [],
    answer: [
      "공격", "도망",
    ],
    event: () => {
      setStat('energy',-4)
      var damageCounter = 0;
      if(me.critPer.total >= Math.random()) {
        text("#name은(는)"+enemy.id+"을(를) 강력하게 공격했다!")
        data.screenEffect.smallVerticalShake()
        damageCounter = (me.attack.total * me.crit.total)
      } else {
        text("#name은(는) "+enemy.id+"을(를) 공격했다.")
        damageCounter = (me.attack.total)
        data.screenEffect.bitVerticalShake()
      }
      // 적 방어력에 따라 피해 감소
      damageCounter *= 1 - enemy.def;
      damageCounter = Math.ceil(damageCounter);
      enemy.health -= damageCounter;

      text("("+damageCounter+"만큼의 피해를 주었습니다.)")
      if(enemy.health <= 0) {
        inf.situation = "win"
        for(let i=0; i<Math.ceil(Math.random()*Math.ceil(me.lucky.total/60)); i++) {
          get(random(enemy.item))
        }
      } else {
        let enemySkill = random(enemy.pattern)
        text(enemySkill.text)
        if(me.evade.total + enemySkill.evade <= 0) {
          enemySkill.event()
          text(enemySkill.success)
        } else {
          text(enemySkill.fail)
        }
      }
    },
    effect: {
      공격: 'attack',
      도망: 'escape',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "win",
    text: ["#name은 승리했다!"],
    answer: [
      "야호"
    ],
    event: () => {

    },
    effect: {
      야호: '#random',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "escape", // 도망
    text: ["#name은(는) 빠르게 도망쳤다. 너무 무리라고 생각했던 모양인가?"],
    answer: [
      
    ],
    event: () => {
      setStat("hope", -1);
      setStat("energy", -7)
    },
    effect: {
      다음: '#random',
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something1", // 덫 발견
    text: ["#name은(는) 누군가가 설치해놓은 덫에 걸렸다!ㅡ 다리가 뜯어질 듯한 고통을 느끼는 듯한 비명이 실험실을 채운다. 아직 조심성이 없는 탓인가?"],
    answer: [
      "으악"
    ],
    event: () => {
      setStat("health", -1);
      data.screenEffect.invertShake();
    },
    effect: {
      으악: '#random',
      밴드를_사용: () => {
        discard("밴드")
        inf.situation = '#random';
      },
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something2", // 에너지 드링크 발견
    text: ["#name은(는) 누군가버린 에너지 드링크를 얻었다! 이걸 지금 마실까?"],
    answer: [
      
    ],
    event: () => {
      
    },
    effect: {
      마시자: "find_something2_drink",
      챙기자: "find_something2_get"
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something2_get",
    text: ["#name은(는) 주변을 슥 확인하더니 주머니에 주섬주섬 넣는다. 나중에 에너지가 꼭 필요할 때 마셔야겠다."],
    answer: [
      
    ],
    event: () => {
      get('에너지 드링크')
    },
    effect: {
      다음: "#random",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something2_drink",
    text: ["#name은(는) 주변을 슥 확인하더니 에너지 드링크를 벌컥벌컥 마셨다."],
    answer: [
      
    ],
    event: () => {
      if((me.maxenergy.total - me.energy) <= 25) {
        text("내가 보기엔 에너지 드링크를 모아두는게 나았을 것같은데 왜 필요하지도 않은데 마신걸까? 희망적으로 보이긴 한다.")
        setStat('hope',4)
      }
      setStat('energy', 50)
    },
    effect: {
      다음: "#random",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something3", // 쉬운 책 발견
    text: ["#name은(는) 많은 정보를 얻을 수 있는 나름 기초적인 마법 책을 발견하였다! 지식을 꽤 얻은 것 같다."],
    answer: [
      
    ],
    event: () => {
      setStat('spell',5,'book')
    },
    effect: {
      다음: "#random",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something4", // 쉬운 책 발견 2
    text: ["#name은(는) 마법 용어들이 꽤 정리되어 있는 책을 발견하였다! 지식을 꽤애 얻은 것 같다."],
    answer: [
      
    ],
    event: () => {
      setStat('spell',10,'book')
    },
    effect: {
      다음: "#random",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something5", // 회복서 발견
    text: ["#name은(는) 무슨 종이가 떨어져 있는 것을 보았다."],
    answer: [
      
    ],
    event: () => {
      if(me.spell.total >= 120) {
        find(data.situation, 'find_something5').answer = ['아하']
      } else {
        find(data.situation, 'find_something5').answer = ['뭐시여']
      }
    },
    effect: {
      아하: "find_something5_ahha",
      뭐시여: "find_something5_eng",
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something5_eng",
    text: ["#name은(는) 그 종이가 무엇인지 알아채지 못한듯 싶다."],
    answer: [
      '다음'
    ],
    event: () => {
      
    },
    effect: {
      다음: "#random"
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something5_ahha",
    text: ["#name은(는) 고민하다 그 종이가 회복서임을 어디서 봤었음을 기억해냈다! 그 종이를 불태우며 #name의 체력을 스스로 1 회복했다!"],
    answer: [
      '다음'
    ],
    event: () => {
      setStat('health',1)
    },
    effect: {
      다음: "#random"
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something6",
    text: ["#name은(는) 운동기구를 발견하고는 운동을 하였다. 회피력이 증가한 느낌이다."],
    answer: [
      '다음'
    ],
    event: () => {
      setStat('evade', 4, 'health')
    },
    effect: {
      다음: "#random"
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something7",
    text: ["#name은(는) 운동기구를 발견하고는 운동을 하였다. 공격력이 증가한 느낌이다."],
    answer: [
      '다음'
    ],
    event: () => {
      setStat('attack', 4, 'health')
    },
    effect: {
      다음: "#random"
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "find_something8",
    text: ["#name은(는) 운동기구를 발견하고는 운동을 하였다. 최대기력이 증가한 느낌이다."],
    answer: [
      '다음'
    ],
    event: () => {
      setStat('maxenergy', 8, 'health')
    },
    effect: {
      다음: "#random"
    },
    publicEffect: () => {
      
    }
  },
]
