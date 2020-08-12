data.screenEffect = {
  invertShake() {
    $('html').css('filter','invert(1)')
    $('html').css('transform','translateY(-50%)')
    setTimeout(function () {
      $('html').css('transform','translateY(30%)')
    },50)
    setTimeout(function () {
      $('html').css('transform','translateY(-40%)')
    },100)
    setTimeout(function () {
      $('html').css('transform','translateY(60%)')
    },150)
    setTimeout(function () {
      $('html').css('filter','')
      $('html').css('transform','')
    },200)
  },
  smallVerticalShake() {
    $('html').css('transform','translateY(-4%)')
    setTimeout(function () {
      $('html').css('transform','translateY(3%)')
    },50)
    setTimeout(function () {
      $('html').css('transform','translateY(-2%)')
    },100)
    setTimeout(function () {
      $('html').css('transform','translateY(1%)')
    },150)
    setTimeout(function () {
      $('html').css('filter','')
      $('html').css('transform','')
    },200)
  },
  smallHorizonalShake() {
    $('html').css('transform','translateX(-4%)')
    setTimeout(function () {
      $('html').css('transform','translateX(3%)')
    },50)
    setTimeout(function () {
      $('html').css('transform','translateX(-2%)')
    },100)
    setTimeout(function () {
      $('html').css('transform','translateX(1%)')
    },150)
    setTimeout(function () {
      $('html').css('filter','')
      $('html').css('transform','')
    },200)
  },
  bitVerticalShake() {
    $('html').css('transform','translateY(-1%)')
    setTimeout(function () {
      $('html').css('transform','translateY(0.75%)')
    },50)
    setTimeout(function () {
      $('html').css('transform','translateY(-0.5%)')
    },100)
    setTimeout(function () {
      $('html').css('transform','translateY(0.25%)')
    },150)
    setTimeout(function () {
      $('html').css('filter','')
      $('html').css('transform','')
    },200)
  },
  bitHorizonalShake() {
    $('html').css('transform','translateX(-1%)')
    setTimeout(function () {
      $('html').css('transform','translateX(0.75%)')
    },50)
    setTimeout(function () {
      $('html').css('transform','translateX(-0.5%)')
    },100)
    setTimeout(function () {
      $('html').css('transform','translateX(0.25%)')
    },150)
    setTimeout(function () {
      $('html').css('filter','')
      $('html').css('transform','')
    },200)
  },
  blur() {
    $('html').css('transition','all 1000ms')
    $('html').css('filter','blur(8px)')
    setTimeout(function () {
      $('html').css('filter','')
      setTimeout(function () {
        $('html').css('transition','all 50ms')
      }, 50)
    },200)
  },
  eyeworse() {
    $('html').css('transition','all 100ms')
    $('html').css('box-shadow','inset 0px 0px 100px #000000a0')
    setTimeout(function () {
      $('html').css('transition','all 1000ms')
      $('html').css('box-shadow','')
      setTimeout(function () {
        $('html').css('transition','20ms')
      }, 1000)
    },100)
  },
  turn() {
    $('html').css('transition','all 500ms')
    $('html').css('transform','rotate(900deg)')
    setTimeout(function () {
      $('html').css('transition','all 2000ms')
      $('html').css('transform',"")
      setTimeout(function () {
        $('html').css('transition','all 20ms')
      },1000)
    },1000)
  },
}