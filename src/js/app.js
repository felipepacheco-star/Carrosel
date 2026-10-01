const telaCarousel = document.getElementById("carousel");
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
// const cores = [
//     'var(--azul-300)',
//     'var(--rosa)',
//     'var(--vermelho-vivo)'
// ];

const imagens = [
    './img/pizzy.avif',
    './img/cs4.jpg',
    './img/coringao.png',
    './img/tough.jpg',
    './img/cs5.png',
    './img/cs.jpg',
    './img/cs2.jpg',
    './img/cs3.jpg',
    './img/awp.png'
];
let indiceAtual = 0;
let temporizador;
function atualizarCarrossel(){
    // telaCarousel.style.backgroundColor = cores[indiceAtual];
    telaCarousel.style.backgroundImage = `url('${imagens[indiceAtual]}')`;
}

btnDireita.addEventListener("click",()=>{
    indiceAtual++;
    if(indiceAtual > imagens.length){
        indiceAtual=0;
    }
    atualizarCarrossel(); 

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
    btnDireita.click();
    }, 3000);
});

btnEsquerda.addEventListener("click",()=>{
    indiceAtual--;
    if(indiceAtual<0){
        indiceAtual = imagens.length-1;
    }
    atualizarCarrossel();

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
    btnEsquerda.click();
    }, 3000);
});
 


atualizarCarrossel();
clearTimeout(temporizador);
temporizador = setTimeout(() => {
    btnDireita.click();
}, 3000);