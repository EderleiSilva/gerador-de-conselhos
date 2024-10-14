function conselhoAleatorio(){

    fetch('https://api.adviceslip.com/advice')
      .then(resposta => resposta.json())
      .then(conselho => {
        const novoConselho = document.getElementById("conselho");
        novoConselho.textContent = conselho.slip.advice;
    })
}

function conselhoId(){
    fetch('https://api.adviceslip.com/advice')
      .then(resposta => resposta.json())
      .then(id => {
        const novoId = document.getElementById("codigo");
        novoId.textContent = id.slip.id;
    })
}

export { conselhoAleatorio, conselhoId }