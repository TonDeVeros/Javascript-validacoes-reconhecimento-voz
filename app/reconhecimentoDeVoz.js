const elementoChute = document.getElementById('chute');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = 'pt-BR'
  recognition.start();


  recognition.addEventListener('result', onSpeak)

  function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibirChuteNaTela(chute);
    validarValorDoChute(chute);

  }

  function exibirChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div> Você disse: </div>
    <span class="box">${chute} </span>
    `
  }

  recognition.addEventListener('end', () => recognition.start());//quando a funcao acabar vai ligar mais uma vez o reconhecimento de voz.