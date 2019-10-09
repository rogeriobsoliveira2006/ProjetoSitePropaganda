var itens = document.querySelectorAll('nav#menu li');
var img = document.querySelector('img#icone');
//var srcAtual = img.src;

for(let i = 0; i < itens.length; i++){
    itens[i].addEventListener('mousemove', function(e){
        img.src = "_imagens/" + this.id + ".png";
    });
    itens[i].addEventListener('mouseout', function(e){
        img.src = "_imagens/glass-oculos-preto-peq.png";
    });
}