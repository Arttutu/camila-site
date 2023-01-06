$(document).ready(function () {
  var contador = 0
  var contador2 = 0
  $(".resposta1").fadeOut(0)
  $(".resposta2").fadeOut(0)

  $(".seta-baixo").click(function () {
    if (contador % 2 == 0) {
      $(".resposta1").slideDown(500)
      $(".seta-baixo").attr("class", "seta-baixo bi bi-x")
    } else {
      $(".resposta1").slideUp(500)
      $(".seta-baixo").attr("class", "seta-baixo bi bi-plus")
    }
    contador++
  })
  $(".seta-baixo2").click(function () {
    if (contador2 % 2 == 0) {
      $(".resposta2").slideDown(500)
      $(".seta-baixo2").attr("class", "seta-baixo2 bi bi-x")
    } else {
      $(".resposta2").slideUp(500)
      $(".seta-baixo2").attr("class", "seta-baixo2 bi bi-plus")
    }
    contador2++
  })
})
