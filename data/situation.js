data.situFunction = {
  random() {
    inf.situation = 'random'+Math.floor(Math.random()*2)
  }
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
      눈중상()   {me.evade *= 0.8; me.critPer -= 0.1},
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
      '아담', "릴리스", '이브',   '카인', '아벨', '셋',   '에녹', '에노스',
    ],
    event: () => {
      find(data.situation, 'start3').answer = random(find(data.situation, 'start3').answer, 3, false);
    },
    effect: {
      아담() {me.name = '아담'},
      릴리스() {me.name = '릴리스'},
      이브() {me.name = '이브'},
      카인() {me.name = '카인'},
      아벨() {me.name = '아벨'},
      셋() {me.name = '셋'},
      에녹() {me.name = '에녹'},
      에노스() {me.name = '에노스'},
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
    text: ["어제와는 다른, #name의 새로운 아침이 밝아 왔다. #name은(는) 그리 편해보이진 않는다. 그는 새로운 세상에서 무엇을 할지 고민한다."],
    answer: [

    ],
    event: () => {
      
    },
    effect: {
      휴식() {inf.situation = "first-rest"},
      경계() {},
      이동() {},
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
      me.energy += (me.maxenergy-me.energy)*0.1 + 10
      if(me.energy >= me.maxenergy) {
        text("#name에게 더 이상 휴식은 필요 없어보인다.");
      };
    },
    effect: {
      드르렁() {},
      기상: 'random',
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
      휴식() {inf.situation = "rest"},
      경계() {},
      이동() {},
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
    effect: {
      휴식() {inf.situation = "rest"},
      경계() {},
      이동() {},
    },
    publicEffect: () => {
      
    }
  },
  {
    id: "rest",
    text: ["#name은(는) 편하게 휴식을 취한다."],
    answer: [

    ],
    event: () => {
      me.energy += (me.maxenergy-me.energy)*0.1 + 10
      if(me.energy >= me.maxenergy) {
        text("#name에게 더 이상 휴식은 필요 없어보인다.");
      };
    },
    effect: {
      드르렁() {},
      기상: 'random',
    },
    publicEffect: () => {
      
    }
  },
]
