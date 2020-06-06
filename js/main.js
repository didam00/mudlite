var inf = {
  day: [2000, 12, 31],
  situation: "start",
}

var day = new Date(inf.day[0], inf.day[1]-1, inf.day[2])

function text(a) {
  var nt = document.createElement("div");
  nt.className = "line";
  nt.innerHTML = a + "<div style='color: gray; font-size: 10px'>"+inf.day[0]+"."+inf.day[1]+"."+inf.day[2]+".</div>";
  $(".text").prepend(nt)
}

function questionSet() {
  $(".button-list").html(null)
  if(arguments[0] instanceof Array) var arg = arguments[0]; else var arg = arguments;
  for(let i=0; i<arg.length; i++) {
    $(".button-list").append("<div class='button'>"+arg[i]+"</div>")
    $(".button-list .button")[i].setAttribute("onclick","() => select("+i+")")
  }
}

function select(a) {
  
}

window.onload = function () {
  $("#thumbnail").click(() => {
    $("#thumbnail").animate({
      opacity: "0",
      wordSpacing: "15px",
    }, 0);
    setTimeout(() => {
      $("#thumbnail").remove();
      $(".ui").animate({
        opacity: "1",
        visibility: "visible"
      })
      this.setTimeout(() => {
        $(".ui").css("visibility","visible");
      },200)
    }, 200);
  })

  this.text("당신은 검과 함께 떨어졌다. 내가 가장 좋아했던 돼지고기도 썰기 좋아보인다.")
  this.questionSet("맞아 돼지고기를 좋아했지","아니야 나는 다른 고기를 좋아했어",)
}