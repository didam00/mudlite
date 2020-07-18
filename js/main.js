function find(where, id)  {return where.filter(a => a.id == id)[0];}
function random(a)        {return a[Math.floor(Math.random()*a.length)];}
function pad(n, width) { n = n + ''; return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;}
function percent(a) {
  var p = 0;
  for(let i=0; i<a.length; i+=2) {p += a[i+1]}
  p = Math.ceil(Math.random()*p)
  for(let i=0; i<a.length; i+=2) {
    p -= a[i+1]
    if(p <= 0) return a[i]
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
          $('.text').animate({
            opacity: 1,
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
      if((endy - starty) > 80) { // down
        // console.log("d")
        if(shortinf.screen == "maingame") {
          $('.text').animate({
            opacity: 0,
          },50)
          $('.aboutme').animate({
            opacity: 1,
          },50)
          $('.aboutme').css('visibility','visible')
          setTimeout(() => {
            $('.text').css('visibility','hidden')
          },50)
          shortinf.screen = "aboutme"
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

swipe($("html"))

var inf = {
  day: [2000, 11, 31, 22, 00],
  situation: "start1",
  logs: [],
}

var shortinf = {
  screen: "thumbnail"
}

var object = [
  {
    id: "나",

    health: 4,
    energy: 4,
    attack: 100,
    evade: 100,
    crit: 3,
    critPer: 0.05,
    spell: 100,

    weapon: "몽당단검",
    pendant: "",
  }
]

let me = object[0]

var day = new Date(inf.day[0], inf.day[1], inf.day[2], inf.day[3], inf.day[4])

function text(a) {
  var nt = document.createElement("div");
  nt.className = "line";
  nt.innerHTML = a + "<div style='color: gray; font-size: 10px'>"+inf.day[0]+"."+(inf.day[1]+1)+"."+inf.day[2]+". "+pad(inf.day[3],2)+":"+pad(inf.day[4],2)+"</div>";
  $(".text").prepend(nt)
  nt.style.transition = "all 200ms"
  nt.style.transform = "translateX(8px)"
  nt.style.opacity = "0.5"
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
  setTimeout(function () {
    $(".button-list").animate({
      opacity: 1
    }, 100)
    inf.logs.push("#"+inf.day[0]+"#"+inf.day[1]+"#"+inf.day[2]+"#"+inf.situation+"#"+a)
    find(data.situation, inf.situation).effect[a]()
    find(data.situation, inf.situation).publicEffect()
    turn()
  },100)
}

function turn() {
  var day = new Date(inf.day[0], inf.day[1], inf.day[2], inf.day[3], inf.day[4]+30)
  inf.day = [day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), day.getMinutes()]
  var answerText = find(data.situation, inf.situation)
  this.answerSet(answerText.answer)
  for(let i = 0; i<answerText.text.length; i++) {
    text(answerText.text[i])
  }

  // setting
  $(".health").html(null);
  for(let i = 0; i<me.health; i++) {
    $(".health").append("<div></div>")
  }
}

window.onload = function () {
  $("#thumbnail").click(() => {
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
  })

  turn()
}