$(document).ready(function () {
  $("#info").fadeOut(0)
  $("#info").fadeIn(1000)
  $(".header_area").fadeOut(0)
  $(".header_area").fadeIn(1000)
  $(".cabecalho").fadeOut(0)
  $(".cabecalho").fadeIn(1000)
})
var $target = $(".anime"),
  animationClass = "anime-start",
  offset = ($(window).height() * 3) / 4

function animeScroll() {
  var documentTop = $(document).scrollTop()

  $target.each(function () {
    var itemTop = $(this).offset().top
    if (documentTop > itemTop - offset) {
      $(this).addClass(animationClass)
    } else {
      $(this).removeClass(animationClass)
    }
  })
}

animeScroll()
