data.situFunction = {
  random() {
    inf.situation = 'random'+Math.floor(Math.random()*3)
  },
  find_something() {
    setStat('energy', -5)
    inf.situation = 'find_something'+Math.floor(Math.random()*2)
  },
  find_who() {
    setStat('energy', -5)
    inf.situation = 'find_who'+Math.floor(Math.random()*2)
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
      호전적임()      {me.attack += 150; me.crit += 0.5; me.critPer += 0.01;},
      인내심이_강함() {me.health += 1; me.maxhealth += 1; me.maxenergy += 5; me.energy += 5;},
      긍정적임()      {me.angel += 10; me.maxenergy += 30; me.energy += 30; me.lucky += 20;},
      부정적임()      {me.evil += 10; me.maxenergy -= 30; me.energy += 30; me.lucky -= 20; me.spell += 50; me.attack += 50;},
      맹신적임()      {me.critPer += 0.03; me.crit += 0.5; me.lucky += 20;}
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
      다리중상() {me.evade *= 0.85; me.maxenergy *= 0.8; me.energy *= 0.8;},
      어깨중상() {me.attack *= 0.8; me.crit *= 0.7; me.critPer *= 0.5;},
      머리중상() {me.spell *= 0.7; me.energy *= 0.7; me.maxenergy *= 0.7;},
      복부중상() {me.health -= 1; me.maxhealth -= 1; me.energy *= 0.9; me.maxenergy *= 0.9;  me.energy *= 0.9;},
      눈중상()   {me.evade *= 0.85; me.critPer -= 0.08; me.observe *= 0.9},
      전체경상() {me.maxenergy *= 0.92; me.energy *= 0.92; me.crit *= 0.9; me.critPer -= 0.02; me.evade *= 0.92; me.spell *= 0.92;}
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
      아담() {me.name = '아담'; get('붉은 열매 심지'); me.angel -= 90; me.evil -= 90},
      릴리스() {me.name = '릴리스'; me.energy += 1; me.maxenergy += 1; me.angel = 0;},
      이브() {me.name = '이브'; get('붉은 열매 심지'); me.angel -= 90; me.evil -= 89},
      카인() {me.name = '카인'; get('창'); me.evil += 1; me.attack += 1; me.evil += 1},
      아벨() {me.name = '아벨'; get('양고기'); me.effort += 1;},
      셋() {me.name = '셋'},
      에녹() {me.name = '에녹'; me.lucky += 1},
      므두셀라() {me.name = '므두셀라'; me.maxenergy += 1; me.maxhealth += 1},
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
      휴식: "first-rest",
      이동준비: "first-move",
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
      if(me.energy < me.maxenergy*0.9) {
        me.energy += (me.maxenergy-me.energy)*0.05 + 2
      }
      if(me.energy >= me.maxenergy*0.9) {
        me.energy = me.maxenergy*0.9
        text("#name에게 더 이상 휴식은 의미 없어보인다.");
      }
    },
    effect: {
      드르렁: "rest",
      기상: '#random',
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
      setStat('energy', -5)
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
      setStat('energy', -5)
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
      수면: "rest",
      이동: "move",
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
    id: "rest",
    text: ["#name은(는) 편하게 휴식을 취한다."],
    answer: [

    ],
    event: () => {
      if(me.energy < me.maxenergy*0.9) {
        me.energy += (me.maxenergy-me.energy)*0.05 + 2
      }
      if(me.energy >= me.maxenergy*0.9) {
        me.energy = me.maxenergy*0.9
        text("#name에게 더 이상 휴식은 의미 없어보인다.");
      }
    },
    effect: {
      드르렁() {},
      기상: '#random',
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
      setStat("attack", 20)
      setStat("critPer", 0.08)
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
      "공격"
    ],
    event: () => {
      text(enemy.id+"을(를) 공격했다!")
      enemy.health -= me.attack
      if(enemy.health <= 0) {
        inf.situation = "win"
        for(let i=0; i<Math.ceil(Math.random()*Math.ceil(me.lucky/60)); i++) {
          get(random(enemy.item))
        }
      } else {
        let enemySkill = random(enemy.pattern)
        text(enemySkill.text)
        if(me.evade + enemySkill.evade <= 0) {
          enemySkill.event()
          text(enemySkill.success)
        } else {
          text(enemySkill.fail)
        }
      }
    },
    effect: {
      공격: 'attack',
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
]
