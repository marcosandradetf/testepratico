// constantes necessarias para operar o DOM
const inputs = document.querySelectorAll('input');
const textarea = document.getElementsByTagName('textarea')[0];
const label_mensagem = document.getElementById('msg_lb');

// Quando a area do texto for focada o label recebe a classe
textarea.addEventListener('focus', () => {
    if (textarea.value === '') {
        label_mensagem.classList.add('active');
    }
  });

  // Quando a area do texto for desfocada remove a classe do label
  textarea.addEventListener('blur', () => {
    if (textarea.value === '') {
        label_mensagem.classList.remove('active');
    }
  });

  // Quando digitar na area do texto remove a classe do elemento textarea
  textarea.addEventListener('input', () => {
    const erro = document.getElementsByClassName('span');
    // for para selecionar os elementos especificos com [i]
    for (let i = 0; inputs.length-1 > i; i++) {
      erro[i].innerHTML = ""
      textarea.classList.remove('bred');
      textarea.nextElementSibling.classList.remove('red'); //temerro
    }
});

//forEach para percorrer a constante inputs com todos os elementos input
inputs.forEach(input => {
  //selecionar todos os labels dos inputs
  const label = input.nextElementSibling;

  //Quando qualquer input for focado o label recebe a classe
  input.addEventListener('focus', () => {
    if (input.value === '') {
      label.classList.add('active');
    }
  });

  //Quando qualquer input for desfocado remove recebe a classe do label 
  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });

    // Quando digitar em qualquer input remove a classe do elemento textarea
    input.addEventListener('input', () => {
      const erro = document.getElementsByClassName('span');
      // for para selecionar os elementos especificos com [i]
      for (let i = 0; inputs.length-2 > i; i++) {
        erro[i].innerHTML = ""
        inputs[i].classList.remove('bred');
        inputs[i].nextElementSibling.classList.remove('red');
      }
  });


});


// selecionando o formulário
const form = document.getElementById("form");

//adicionando envento de submit no formulario
form.addEventListener("submit", (e) => {
  //prevenindo o comportamento padrao para fazer validacoes
  e.preventDefault();

  const nome = document.getElementById("nome");
  const erro = document.getElementsByClassName('span');

  if (nome.value.length > 0) {

    const email = document.getElementById("email");
    const regex = /@/;
    if (email.value.match(regex)) {

      const mensagem = document.getElementById("msg");
      if (mensagem.value.length > 0) {

        form.submit();
        
      } else {
        mensagem.classList.add('bred');
        mensagem.nextElementSibling.classList.add('red');
        erro[2].innerHTML = "Digite sua mensagem.";
      }

    } else {
      email.classList.add('bred');
      email.nextElementSibling.classList.add('red');
      erro[1].innerHTML = "Digite um endereço de e-mail válido.";
    }

  } else {
    nome.classList.add('bred');
    nome.nextElementSibling.classList.add('red');
    erro[0].innerHTML = "Insira um nome."
  }

});

