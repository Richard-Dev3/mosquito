var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500

}else if (nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000

}else if (nivel === 'shaokahn'){
    //750
    criaMosquitoTempo = 750

}

function ajusteTamanhoTela(){
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(largura, altura)
}
ajusteTamanhoTela()

var cronometro = setInterval(function() {

    tempo -= 1
    if(tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria_jogo.html"

    }else {

        document.getElementById('cronometro').innerHTML = tempo

    }
    
}, 1000)

function posicaoRandomica() {

    //remover a mosca anterior (caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        console.log('Elemento selecionado foi: v' + vidas)
        if (vidas > 3){
            
            window.location.href = "fim_de_jogo.html"

        }else {

            document.getElementById('c' + vidas).src = "../imagens/coracao_vazio.png"
            vidas++

        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento Mosca
    var mosca = document.createElement('img')
    mosca.src = "../imagens/mosca.png"
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id='mosca'
    mosca.onclick = function() {
        this.remove()

    }

    document.body.appendChild(mosca)



}

function tamanhoAleatorio() {
    var classe =  Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe =  Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}