function find(where, id)  {
  return where.filter(a => a.id == id)[0];
}
function findslice(arr, a) {
  return arr.splice(arr.indexOf(a),1);
}
function erase(str, a, all=false) {
  if(all) {
    return str.replace(RegExp(a,"gi"),"")
  } else {
    return str.replace(a, "")
  }
}
function random(a, times=1, allowoverlap=true) {
  var randomValue = new Array;
  var aa = deepCopy(a);
  
  for(let i = 0; i<times; i++) {
    let ranEle = aa[Math.floor(Math.random()*aa.length)]
    randomValue.push(ranEle)
    if(!allowoverlap) {
      findslice(aa, ranEle)
    }
  }

  return (times == 1) ? randomValue[0] : randomValue;
}
function pad(n, width) {
   n = n + ''; return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
function percent(a) {
  var p = 0;
  for(let i=0; i<a.length; i+=2) {p += a[i+1]}
  p = Math.ceil(Math.random()*p)
  for(let i=0; i<a.length; i+=2) {
    p -= a[i+1]
    if(p <= 0) return a[i]
  }
}
function getType(obj){
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
function deepCopy(a) {
  switch(getType(a)) {
    case "array" : return [...a];
    case "object" : return {...a};
  }
}
function setStat(a, value) {
  me[a] += value
}
var get = function (give_obj) {
  text(random(['#name은(는) '+give_obj+'을(를) 얻었다!','#name은(는) '+give_obj+'을(를) 획득했다!','#name은(는) '+give_obj+'을(를) 가졌다!','#name은(는) '+give_obj+'을(를) 주웠다!','#name은(는) '+give_obj+'을(를) 가방에 넣었다!']))
  if(me.item.length >= me.maxItem) {
    text(random(['하지만, #name의 가방은 너무 무거워보인다.', '하지만, #name의 힘에는 한계가 있었다.', '하지만, #name의 가방이 이미 닫히지 않는 상태까지 와버렸다.', '하지만, 이것까지 담으면 #name의 가방은 찢어질 것이다.']))
  } else {
    me.item.push(give_obj)
    me.item.sort()
  }
}
let play = {
  showStat() {
    $('.text').animate({
      opacity: 0,
      top: 74,
    },50)
    $('.aboutme').animate({
      opacity: 1,
    },50)
    $('.aboutme').css('visibility','visible')
    setTimeout(() => {
      $('.text').css('visibility','hidden')
    },50)
    shortinf.screen = "aboutme"
  },
  hideStat() {
    $('.text').animate({
      opacity: 1,
      top: 54,
    },50)
    $('.aboutme').animate({
      opacity: 0,
    },50)
    $('.text').css('visibility','visible')
    setTimeout(() => {
      $('.aboutme').css('visibility','hidden')
    },50)
    shortinf.screen = "maingame"
  }
}
function swipe(obj, ev) {
  var startx, starty, endx, endy;
  obj.on('touchstart', event => {
    startx = event.originalEvent.changedTouches[0].screenX
    starty = event.originalEvent.changedTouches[0].screenY
  })
  obj.on('touchend', event => {
    endx = event.originalEvent.changedTouches[0].screenX
    endy = event.originalEvent.changedTouches[0].screenY
    if(Math.abs(startx - endx) < 50) { // vertical
      if((starty - endy) > 80) { // up
        // console.log("u")
        if(shortinf.screen == "aboutme") {
          play.hideStat()
        }
      }
      if((endy - starty) > 80) { // down
        if(shortinf.screen == "maingame") {
          play.showStat()
        }
      }
    }
    if(Math.abs(starty - endy) < 50) { // horizontal
      if((startx - endx) > 80) { // left
        // console.log("l")
      }
      if((endx - startx) > 80) { // right
        // console.log("r")
      }
    }
  })
}

var system = new Object;

system.versionCheck = () => {
  console.log("version 20200809")
}

var discard = function (a) {
  findslice(me.item, a)
}


swipe($("html"))

var inf = {
  day: [2001, 0, 1, 3, 30],
  situation: "start1",
  logs: [],
}

var shortinf = {
  screen: "thumbnail"
}

var object = [
  {
    id: "나",
    name: "미상",
    health: 4,
    maxhealth: 4,
    energy: 50,
    maxenergy: 100,
    attack: 100,
    evade: 100,
    crit: 3,
    critPer: 0.05,
    spell: 100,
    lucky: 50,
    hope: 0,
    angel: 100,
    evil: 100,
    effort: 0,
    observe: 50,

    weapon: "몽당단검",
    pendant: "",
    item: new Array,
    maxItem: 18,
  }
]

var enemy = {
  
}

let me = object[0]

var day = new Date(inf.day[0], inf.day[1], inf.day[2], inf.day[3], inf.day[4])

function text(a) {
  a = a.replace(/#name/gi,me.name)
  a = a.replace(/#enemy/gi,enemy.id)
  var nt = document.createElement("div");
  nt.className = "line";
  nt.innerHTML = a + "<div style='color: gray; font-size: 10px'>"+inf.day[0]+"."+(inf.day[1]+1)+"."+inf.day[2]+". "+pad(inf.day[3],2)+":"+pad(inf.day[4],2)+"</div>";
  $(".text").prepend(nt)
  nt.style.transition = "all 300ms"
  nt.style.transform = "translateX(10%)"
  nt.style.opacity = "0"
  setTimeout(() => {
    nt.style.removeProperty("transform")
    nt.style.removeProperty("opacity")
    setTimeout(() => {
      nt.style.removeProperty("transition")
    },200)
  }, 1)
}

function answerSet() {
  $(".button-list").html(null)
  if(arguments[0] instanceof Array) var arg = arguments[0]; else var arg = arguments;
  for(let i=0; i<arg.length; i++) {
    $(".button-list").append("<div class='button'>"+arg[i]+"</div>")
    $(".button-list .button")[i].setAttribute("onclick","select("+i+")")
  }
}

function select(a) {
  $(".button-list").animate({
    opacity: 0
  }, 100)
  ans = find(data.situation, inf.situation).answer[a]
  setTimeout(function () {
    $(".button-list").animate({
      opacity: 1
    }, 100)
    inf.logs.push("#"+inf.day[0]+"#"+inf.day[1]+"#"+inf.day[2]+"#"+inf.day[3]+"#"+inf.day[4]+"#"+inf.situation+"#"+ans+";")
    
    var ansEffArray = find(data.situation, inf.situation).effect;
    
    switch(typeof ansEffArray) {
      case 'string' : 
      if(ansEffArray.indexOf("@") == 0) {
        var ansEff = find(data.situation, ansEffArray.replace("@","")).effect[ans]
      }
        ;break;
      default :
      var ansEff = ansEffArray[ans]
        ;break;
    }

    switch(typeof ansEff) {
      case 'string' : 
        if(ansEff.indexOf("#") == 0) {                  // &effect
          data.situFunction[ansEff.replace("#","")]();
        } else {                                        // effect
          inf.situation = ansEff;
        }
        ;break;
      case 'function' :                                 // effect()
        ansEff()
        ;break;
    }
    find(data.situation, inf.situation).publicEffect()
    // effect 를 모두 진행했으니 situation은 이후로 변경되어있다.
    find(data.situation, inf.situation).event()
    turn()
  },100)
}

function turn() {
  var day = new Date(inf.day[0], inf.day[1], inf.day[2], inf.day[3], inf.day[4]+30)
  inf.day = [day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), day.getMinutes()]
  var answerText = find(data.situation, inf.situation)
  if(!answerText.answer[0]) {
    if(typeof answerText.effect == 'string') {
      if(answerText.effect.indexOf("@") == 0) {
        answerText.answer = Object.keys(find(data.situation, erase(answerText.effect, "@")).effect)
      }
    } else {
      answerText.answer = Object.keys(answerText.effect)
    }
  }
  this.answerSet(answerText.answer)
  for(let i = 0; i < answerText.text.length; i++) {
    text(answerText.text[i])
  }
}

window.onload = function () {
  $("html").click(() => {
    if(shortinf.screen == "thumbnail") {
      $("#thumbnail").animate({
        opacity: "0",
        wordSpacing: "15px",
      }, 0);
      setTimeout(() => {
        $("#thumbnail").remove();
        $(".maingame").animate({
          opacity: "1",
          visibility: "visible"
        })
        this.setTimeout(() => {
          $(".maingame").css("visibility","visible");
        },200)
        shortinf.screen = "maingame"
      }, 200);
    }
  })

  turn()

  tick = setInterval(() => {
      // setting
    $(".health").html(null);
    for(let i = 0; i<me.maxhealth; i++) {
      $(".health").append("<div></div>")
    }
    for(let i = 0; i<me.health; i++) {
      $(".health div:eq("+i+")").css("background-color", "#ed4956")
    }

    if(me.energy > me.maxenergy) {
      me.energy = me.maxenergy;
    }
    if(me.health > me.maxhealth) {
      me.health = me.maxhealth;
    }
    if(me.critPer > 1) {
      me.crit += Math.floor((me.critPer - 1)*500)/100
      me.critPer = 1
    }

    me.attack = Math.floor(me.attack*100)/100
    me.health = Math.floor(me.health*100)/100
    me.energy = Math.floor(me.energy*100)/100
    me.maxhealth = Math.floor(me.maxhealth*100)/100
    me.maxenergy = Math.floor(me.maxenergy*100)/100
    me.evade = Math.floor(me.evade*100)/100
    me.crit = Math.floor(me.crit*100)/100
    me.critPer = Math.floor(me.critPer*10000)/10000
    me.spell = Math.floor(me.spell*100)/100
    me.angel = Math.floor(me.angel*100)/100
    me.evil = Math.floor(me.evil*100)/100
    me.lucky = Math.floor(me.lucky*100)/100
    me.hope = Math.floor(me.hope*100)/100
    me.observe = Math.floor(me.observe*100)/100
    
    $(".statWindow .value, .statWindow .stat")[0].innerHTML = me.name // 이름
    $(".statWindow .value, .statWindow .stat")[1].innerHTML = me.attack // 근력
    $(".statWindow .value, .statWindow .stat")[2].innerHTML = me.health + " / " + me.maxhealth // 체력
    $(".statWindow .value, .statWindow .stat")[3].innerHTML = me.energy + " / " + me.maxenergy // 기력
    $(".statWindow .value, .statWindow .stat")[4].innerHTML = me.crit+"배" // 치명력
    $(".statWindow .value, .statWindow .stat")[5].innerHTML = (Math.floor(me.critPer*1000)/10) + "%" // 집중력
    $(".statWindow .value, .statWindow .stat")[6].innerHTML = me.spell // 지력
    $(".statWindow .value, .statWindow .stat")[7].innerHTML = me.evade // 회피력
    $(".statWindow .value, .statWindow .stat")[8].innerHTML = me.effort // 노력
    $(".statWindow .value, .statWindow .stat")[9].innerHTML = me.hope // 행복
    $(".statWindow .value, .statWindow .stat")[10].innerHTML = me.angel // 선
    $(".statWindow .value, .statWindow .stat")[11].innerHTML = me.evil // 악
    $(".statWindow .value, .statWindow .stat")[12].innerHTML = me.lucky // 행운
    $(".statWindow .value, .statWindow .stat")[13].innerHTML = me.observe // 관찰력

    $(".statWindow .item")[0].innerHTML = me.item.join("  /  ")

    if(me.health <= 0) {
      me.health = 1;
      data.screenEffect.invertShake();
      $(".dead-screen").css("visibility",'visible')
    }
  },1000/60)

  $("#showButton").on('click', () => {
    if(shortinf.screen == "aboutme") {
      play.hideStat()
    } else if(shortinf.screen == "maingame") {
      play.showStat()
    }
  })

  // mobile
  document.getElementById("showButton").ontouchstart = function () {
    if(shortinf.screen == "aboutme") {
      play.hideStat()
    } else if(shortinf.screen == "maingame") {
      play.showStat()
    }
  }
}