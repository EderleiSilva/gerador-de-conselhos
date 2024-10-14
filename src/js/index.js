const novoConselho = document.querySelector(".botao")

import { conselhoAleatorio, conselhoId } from "./funcoes.js"

conselhoAleatorio()
conselhoId()

novoConselho.addEventListener('click', function(){
    conselhoAleatorio()
    conselhoId()

})