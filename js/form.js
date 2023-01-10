var msg = "teste"
$.ajax({
  url: "https://formsubmit.co/ajax/arthurtt08@gmail.com",
  type: "post",
  data: {
    nome: '$("#nome").val()',
    numero: $("#email").val(),
    email: "",
    mensagem: "",
  },
  beforeSend: function () {
    $(".form").html("ENVIANDO...")
  },
})
  .done(function (msg) {
    $(".form").html(msg)
  })
  .fail(function (jqXHR, textStatus, msg) {
    alert(msg)
  })
