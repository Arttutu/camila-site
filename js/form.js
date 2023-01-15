$(document).ready(function () {
  $("#form").validate({
    rules: {
      nome: {
        required: true,
        maxlength: 40,
        minlength: 3,
        minWords: 2,
      },
      email: {
        required: true,
        email: true,
      },
      numero: {
        number: true,
        maxlength: 13,
        minlength: 9,
      },
      mensagem: {
        required: true,
        minlength: 5,
      },
    },
  })
})
