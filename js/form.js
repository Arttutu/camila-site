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
        range: [9, 11],
      },
      errorPlacement: function (label, element) {
        label.addClass("arrow")
        label.insertAfter(element)
      },
      wrapper: "span",
    },
  })
})
