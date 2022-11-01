//*************************MENU*************************************************** */

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('uil-times')
    menu.classList.toggle('uil-bars');
    
    navbar.classList.toggle('active');
}



const arrow = document.querySelector('.arrow-up');
//arrow.style.display = "none";
window.onscroll = ()=>{
   // console.log(window.scrollY)
    if(window.scrollY > 60){
        menu.classList.remove('uil-times');
        menu.classList.add('uil-bars');
        navbar.classList.remove('active');
       document.querySelector('header').classList.add('active');
       document.querySelector('.arrow-up').classList.add('active');

    }else{
        document.querySelector('.arrow-up').classList.remove('active');
        document.querySelector('header').classList.remove('active');

    }
}



const skillsContent = document.querySelectorAll('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toglleSkills(){
    let itemClass = this.parentNode.className;
   // console.log(skillsContent.length)
    for(i = 0; i< skillsContent.length; i++){
      
        skillsContent[i].className = "skills_content skills_close";
       
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = "skills_content skills_open";
    }
}
skillsHeader.forEach((element) => {
    console.log("teste")
    element.addEventListener('click',toglleSkills)
    
});
    
/* =====================QUALIFICAÇÕES ==========================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');
        tab.forEach(tab =>{
            tab.classList.remove('qualification_active');
        })
        tab.classList.add("qualification_active");
    });
})

/* =====================slides projetos ==========================*/
let currentSlide = 1;
let marge = 600;
let totalSlides = document.querySelectorAll('.slider--item').length;
//console.log(totalSlides)
document.querySelector(".slider--width").style.width = `calc(450px * ${totalSlides})`;

document.querySelector(".slider--controls").style.height =
     `${document.querySelector(".projeto").clientHeight}px`;

function goPrev(){
    currentSlide --;
    if(currentSlide <0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}
function goNext(){
    currentSlide ++;
    if(currentSlide >(totalSlides -1)){
        currentSlide =0;
    } 
    if(currentSlide == 2){
       // marge = 300;
    }else{
        //marge =600;
    }
    //console.log(currentSlide)
    updateMargin();
    //console.log(marge)
}

function updateMargin() {
    let larguraTela = window.screen.width;
    let newMargin = 0;
    if(larguraTela > 1500){
        newMargin = (currentSlide * document.body.clientWidth) /7;
    }else if(larguraTela >1200 && larguraTela <1500){
        newMargin = (currentSlide * document.body.clientWidth) /6;
    }else if(larguraTela >900 && larguraTela <1200){
        newMargin = (currentSlide * document.body.clientWidth) /2.7;
    }else if(larguraTela >600 && larguraTela <800){
        newMargin = (currentSlide * document.body.clientWidth) /2;
    }else if(larguraTela >550 && larguraTela <650){
        newMargin = (currentSlide * document.body.clientWidth) /1.5;
    }else{
        newMargin = (currentSlide * document.body.clientWidth) /1;
    }
    
   

    console.log(newMargin)
   // let newMargin = (currentSlide * 450);
    document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}


//************** EFEITO SCROLLS *****************
const debounce = function (func, wait, immediate){
    let timeout;
 
    return function (... args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};



const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll (){
   
    const windowTop = window.pageYOffset +((window.innerHeight *3)/ 4);
   target.forEach(function(element){
    if((windowTop)> element.offsetTop){
      
        element.classList.add(animationClass);
    }else{
       
        element.classList.remove(animationClass);
    }
      //  console.log(element.offsetTop)
   })
}
animeScroll();
if(target.length){
    window.addEventListener('scroll',debounce(function(){
        animeScroll();
       
    },200));
}
/***************************escrevendo nome************************* */

function typeWireteer(element){
    const nomeArray = element.innerHTML.split('');
    element.innerHTML = '';

    nomeArray.forEach((letra, i)=> {
        setTimeout(() => element.innerHTML += letra, 95*i);
        //console.log(nome)
    });
}
const nome = document.querySelector('.apresent-nome');
typeWireteer(nome);


/*************************** outros projetos************************* */

const projetos = document.querySelector('.projetos');

//console.log(items_projeto.length);

const todosProejtos  = [
    'pokedex', 
    'jogoMemoria',
    'calculadoraImc',
    'clone-Netflix',
]
const projetosJavaScript = [
    {
        titulo: "Carrinho compra Pizza",
        descricao: 'Carrinho de compra pizza, Projeto desenvolvido no curso JavaScript b7web',
        imagem: 'image/projetos/carrinhoCompraPizza.jpeg',
    },{
        titulo: "Jogo da Memoria",
        descricao: 'Jogo da memoria ',
        imagem: 'image/projetos/jogoMemoria.jpeg',
    },{
        titulo: "Consulta Cep",
        descricao: 'Desenvolvido um sitema para consultar CEP, pela API viaCEP ',
        imagem: 'image/projetos/ConsultaCep.jpeg',
    },{
        titulo: "Vitrine Bicicleta",
        descricao: 'Uma vitrine para demonstrar biciletas ',
        imagem: 'image/projetos/vitrineBicileta.jpeg',
    },{
        titulo: "Poke Dex",
        descricao: 'Projeto desenvolvido em uma live no youtube',
        imagem: 'image/projetos/pokedex.jpeg',
    }, {
        titulo: "Urna eletronica",
        descricao: 'Projeto desenvolvido no curso JavaScript b7web',
        imagem: 'image/projetos/urna.jpeg',
    },
]
const projetosReact = [
    {
        titulo: "Clone Netflix",
        descricao: 'Projeto desenvolvido uma live ministrada pelo b7web',
        imagem: 'image/projetos/CloneNetflix.jpeg',
    }, {
        titulo: "Jogo Memoria",
        descricao: 'Projeto desenvolvido no curso React b7web',
        imagem: 'image/projetos/ReactMemoria.jpeg',
    },{
        titulo: "Ignite Lab",
        descricao: "Projeto desenvolvido durante um Ignite Lab",
        imagem: 'image/projetos/IgniteLab.jpeg',
    } , {
        titulo: "Calculadora IMC",
        descricao: 'Projeto desenvolvido no curso React b7web',
        imagem: 'image/projetos/reactIMC.jpeg',
    }, {
        titulo: "Movies Lib",
        descricao: 'Projeto desenvolvido uma live do youtube',
        imagem: 'image/projetos/MoviesLib.jpeg',
    }, {
        titulo: "Login React Ignite",
        descricao: 'Projeto desenvolvido durante um Ignite Lab',
        imagem: 'image/projetos/reactIgnite.jpeg',
    }
]
const createElement  = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;

}
const createProjeto = (todosProejtos) =>{

    const outroProjeto = createElement ('div', 'outro-projeto');
    const projetoImage = createElement('div', 'projeto-image');
    const imagem = createElement('img', 'imagem-projeto');
        imagem.setAttribute('src', todosProejtos.imagem)
    const titulo = createElement('h2', 'titulo-projeto');
        titulo.innerHTML = todosProejtos.titulo;
    const  descricao = createElement('p', '');
        descricao.innerHTML = todosProejtos.descricao;
    const botaoProjeto = createElement('button', 'btn button--flex button-small projeto_button');
    const icone = createElement('i','uil uil-arrow-right button_icon');

   // projetoImage.style.backgroundImage = `url('../image/projetos/p-o1.jpeg')`;  

    outroProjeto.appendChild(projetoImage);
    projetoImage.appendChild(imagem)
   
    botaoProjeto.innerHTML= "Saber Mais";
    botaoProjeto.appendChild(icone)
    outroProjeto.appendChild(titulo);
    outroProjeto.appendChild(descricao);
    outroProjeto.appendChild(botaoProjeto);

    return outroProjeto
}



const carregarProjeto =() =>{

    projetosReact.forEach((pj) =>{
        const projet = createProjeto(pj);
        projetos.appendChild(projet);
        console.log(projet)
    })
   
}
carregarProjeto();
const items_projeto = document.querySelectorAll('.outro-projeto');

console.log(items_projeto.length)

function projetoReact () {
    limpaDados();
    projetosReact.forEach((pj) =>{
        const projet = createProjeto(pj);
        projetos.appendChild(projet);
        console.log(projet)
    })
    console.log(items_projeto.length)
}
function carregaJavascript(){
    limpaDados();

    projetosJavaScript.forEach((pj) =>{
        const projet = createProjeto(pj);
        projetos.appendChild(projet);
        console.log(projet)
    })
}

function limpaDados(){
    const items_projeto = document.querySelectorAll('.outro-projeto');
    items_projeto.forEach((item) =>{
        item.remove();
    })
    console.log(items_projeto.length)
}
