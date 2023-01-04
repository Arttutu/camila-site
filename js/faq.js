$(document).ready(function () {
  var contador = 0
  var contador2 = 0
  $(".resposta1").fadeOut(0)
  $(".resposta2").fadeOut(0)

  $(".seta-baixo").click(function () {
    if (contador % 2 == 0) {
      $(".resposta1").fadeIn(1000)
      $(".seta-baixo").attr("class", "seta-baixo bi bi-arrow-up-circle")
    } else {
      $(".resposta1").fadeOut(1000)
      $(".seta-baixo").attr("class", "seta-baixo bi bi-arrow-down-circle")
    }
    contador++
  })
  $(".seta-baixo2").click(function () {
    if (contador2 % 2 == 0) {
      $(".resposta2").fadeIn(1000)
      $(".seta-baixo2").attr("class", "seta-baixo2 bi bi-arrow-up-circle")
    } else {
      $(".resposta2").fadeOut(1000)
      $(".seta-baixo2").attr("class", "seta-baixo2 bi bi-arrow-down-circle")
    }
    contador2++
  })
})
