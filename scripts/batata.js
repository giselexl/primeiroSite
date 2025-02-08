const obj_img_ant = document.querySelector('#img_ant')
const obj_img_prox = document.querySelector('#img_prox')
const obj_destaque = document.querySelector('#destaque')


const obj_img_ant1 = document.querySelector('#img_ant1')
const obj_img_prox1 = document.querySelector('#img_prox1')
const obj_destaque1 = document.querySelector('#destaque1')



let posicao_carrossel = 0



obj_img_ant.addEventListener('click', funImagemAnterior)
obj_img_prox.addEventListener('click', funProximaImagem)

let posicao_carrossel1 = 0

obj_img_ant1.addEventListener('click', funImagemAnterior1)
obj_img_prox1.addEventListener('click', funProximaImagem1)



  
function funImagemAnterior() {
    posicao_carrossel = posicao_carrossel + 100
    if ( posicao_carrossel > 0 ) {
        posicao_carrossel = -200
    }
    obj_destaque.style.transform = 'translateX(' + posicao_carrossel + '%)'
}


function funProximaImagem() {
    posicao_carrossel = posicao_carrossel - 100
    if ( posicao_carrossel < -200 ) {
        posicao_carrossel = 0
    }
    obj_destaque.style.transform = 'translateX(' + posicao_carrossel + '%)'
}




function funImagemAnterior1() {
    posicao_carrossel1 = posicao_carrossel1 + 100
    if ( posicao_carrossel1 > 0 ) {
        posicao_carrossel1 = -200
    }
    obj_destaque1.style.transform = 'translateX(' + posicao_carrossel1 + '%)'
}


function funProximaImagem1() {
    posicao_carrossel1 = posicao_carrossel1 - 100
    if ( posicao_carrossel1 < -200 ) {
        posicao_carrossel1 = 0
    }
    obj_destaque1.style.transform = 'translateX(' + posicao_carrossel1 + '%)'
}





    

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }
  