window.onload = function() {
  window.scrollTo(0, 0);
};



function redirectToWhatsApp() {

  // Substitua '123456789' pelo número de telefone desejado
  const numeroTel = '+5516988127756';

  let usuario = document.getElementById('nome').value;
  let emailUsuario = document.getElementById('email').value;
  let tipoServico = document.getElementById('escolha').value;
  let mensagemUsuario = document.getElementById('mensagem').value;


  // Substitua 'Olá!' pela mensagem inicial (opcional)
  const message = `Olá! meu nome é ${usuario}. Meu email é ${emailUsuario}. Escolhi o serviço ${tipoServico}. E entrei em contato pelo seguinte motivo: ${mensagemUsuario} `;

  // Monta o link de mensagem do WhatsApp
  const whatsappLink = 'https://wa.me/' + numeroTel + '/?text=' + encodeURIComponent(message);

  // Redireciona para o link do WhatsApp
  window.open(whatsappLink, '_blank');
}



const slider = document.querySelector('.container-carrossel');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoAvancar = document.getElementById('botao-avancar');
const slides = slider.querySelectorAll('.carrosel-slider');
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.container-carrossel');
  const slides = Array.from(slider.querySelectorAll('.carrosel-slider'));


  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('on');
        } else {
            slide.classList.remove('on');
        }
    });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSliderPosition();
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSliderPosition();
  showSlide(currentSlide);
}

function updateSliderPosition() {
  const slideWidth = slides[currentSlide].offsetWidth;
  const translateXValue = `-${currentSlide * slideWidth}px`;
  slider.style.transform = `translateX(${translateXValue})`;
}

document.getElementById('botao-avancar').addEventListener('click', nextSlide);
document.getElementById('botao-voltar').addEventListener('click', prevSlide);

 // Inicialmente, exibe o primeiro slide
 showSlide(currentSlide);
});

function campoAgendamento(){

  let campoAgendamento = document.getElementById('campoDeAgendamento'); //confere o campo de destino

  if (campoDeAgendamento){

    campoDeAgendamento.scrollIntoView({ behavior: 'smooth' }); //efetua a rolagem até onde precisa
  }
}

function campoServicos(){

  let campoServicos = document.getElementById('carrosel-de-informacoes');

  if (campoServicos){

    campoServicos.scrollIntoView({ behavior: 'smooth' });
  }
}


