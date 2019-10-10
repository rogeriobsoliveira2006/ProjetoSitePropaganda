let itens = document.querySelectorAll('nav#menu li');
let img = document.querySelector('img#icone');

let url = document.baseURI.split('/');
let auxUrl = url[url.length - 1].split('.')[0];
let srcAtual = '';
switch(auxUrl){
    case 'index':
        srcAtual = 'home';
        break;
    case 'specs':
        srcAtual = 'especificacoes';
        break;
    case 'fotos':
        srcAtual = 'fotos';
        break;
    case 'multimidia':
        srcAtual = 'multimidia';
        break;
    case 'fale-conosco':
        srcAtual = 'contato';
        break;
    default:
        srcAtual = 'Inválido!';
        break;
}

for(let i = 0; i < itens.length; i++){
    itens[i].addEventListener('mousemove', function(e){
        img.src = `_imagens/${this.id}.png`;
    });
    itens[i].addEventListener('mouseout', function(e){
        img.src = `_imagens/${srcAtual}.png`;
        if(srcAtual == 'home'){
            img.src = "_imagens/glass-oculos-preto-peq.png";
        }
    });
}