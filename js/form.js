$("#btn-enviar").click(function () {
  var form = $("#form")
  $.ajax({
    url: "https://formsubmit.co/ajax/arthurtt08@gamil.com",
    method: "POST",
    data: form.serialize(),
  })
})
