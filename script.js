//Pegando as imagens dos personagens
var person1 = document.getElementById('perso1');
var person2 = document.getElementById('perso2');
var person3 = document.getElementById('perso3');
var person4 = document.getElementById('perso4');
var person5 = document.getElementById('perso5');
var person6 = document.getElementById('perso6');
var person7 = document.getElementById('perso7');

//Pegando os nomes dos personagens
var dica1 = document.getElementById('dica1');
var dica2= document.getElementById('dica2');
var dica3 = document.getElementById('dica3');
var dica4 = document.getElementById('dica4');
var dica5 = document.getElementById('dica5');
var dica6 = document.getElementById('dica6');
var dica7 = document.getElementById('dica7');

//Função para terminar o jogo
function acabaJogo(){
    if (person1.classList.contains('clique') && person2.classList.contains('clique') && person3.classList.contains('clique') && person4.classList.contains('clique') && person5.classList.contains('clique') && person6.classList.contains('clique') && person7.classList.contains('clique'))
    {
        alert("Parabéns, você achou todos os 7 parceiros de Morty e venceu o desafio!!");
        location.reload()
    }
}

//Função para aumentar a pontuaçao
var cont = 1;

function pontuacao() {
    var pontuacao = document.getElementById('pontuacao');

    pontuacao.innerText = `Pontuação: ${cont}`;
    cont++;
}

//Personagem1(Meeseeks)
person1.addEventListener('click', function(){

    person1.classList.add('clique');
    dica1.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem2(Beth)
person2.addEventListener('click', function(){

    person2.classList.add('clique');
    dica2.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem3(Jerry)
person3.addEventListener('click', function(){

    person3.classList.add('clique');
    dica3.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem4(Slow)
person4.addEventListener('click', function(){

    person4.classList.add('clique');
    dica4.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem5(Squanchy)
person5.addEventListener('click', function(){

    person5.classList.add('clique');
    dica5.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem6(Rick)
person6.addEventListener('click', function(){

    person6.classList.add('clique');
    dica6.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Personagem7(Pickle)
person7.addEventListener('click', function(){

    person7.classList.add('clique');
    dica7.classList.add('clique');
    acabaJogo();
    pontuacao();
})

//Botao Começar
var comecar = document.querySelector('button');
var bloco = document.getElementById('bloco03');

comecar.addEventListener('click', function(){

    bloco.classList.remove("invisivel");
});

//Contador
var button = document.querySelector('button');
var mostrador = document.querySelector('#mostrador');

button.addEventListener('click', function() {
    new Timer(1, mostrador, function() {
        alert('O tempo acabou!');
        location.reload();
    }).start();
});

function Timer(mins, target, cb) {
    this.counter = mins * 20;
    this.target = target;
    this.callback = cb;
}
Timer.prototype.pad = function(s) {
    return (s < 10) ? '0' + s : s;
}
Timer.prototype.start = function(s) {
    this.count();
}
Timer.prototype.stop = function(s) {
    this.count();
}
Timer.prototype.done = function(s) {
    if (this.callback) this.callback();
}
Timer.prototype.display = function(s) {
    this.target.innerHTML = this.pad(s);
}
Timer.prototype.count = function(s) {
    var self = this;
    self.display.call(self, self.counter);
    self.counter--;
    var clock = setInterval(function() {
        self.display(self.counter);
        self.counter--;
        if (self.counter < 0) {
            clearInterval(clock);
            self.done.call(self);
        }
    }, 1000);
}
