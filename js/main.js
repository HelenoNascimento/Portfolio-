
import {allProjects} from './projetos.js'
//const {allProjects} = require('projetos');
console.log(allProjects)

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



/*const skillsContent = document.querySelectorAll('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toglleSkills(){
    let itemClass = this.parentNode.className;
    console.log(itemClass)
    console.log(skillsContent.length)
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
    
});*/
    
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
let currentSlide = 2;
let marge = 600;
let totalSlides = document.querySelectorAll('.slider--item').length;
//console.log(totalSlides)
document.querySelector(".slider--width").style.width = `calc(450px * ${totalSlides})`;

//document.querySelector(".slider--controls").style.height =
  //   `${document.querySelector(".projeto").clientHeight}px`;

 let prev = document.querySelector('.goPrev');
 prev.addEventListener('click', goPrev) 
 let next = document.querySelector('.goNext');
 next.addEventListener('click', goNext);

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
        newMargin = (currentSlide * document.body.clientWidth) /4;
    }else if(larguraTela >900 && larguraTela <1200){
        newMargin = (currentSlide * document.body.clientWidth) /2.7;
    }else if(larguraTela >600 && larguraTela <800){
        newMargin = (currentSlide * document.body.clientWidth) /2;
    }else if(larguraTela >550 && larguraTela <650){
        newMargin = (currentSlide * document.body.clientWidth) /1.5;
    }else{
        newMargin = (currentSlide * document.body.clientWidth)/0.65 ;
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
        link: 'https://github.com/HelenoNascimento/Carrinho-compraJS'
    },{
        titulo: "Jogo da Memoria",
        descricao: 'Jogo da memoria ',
        imagem: 'image/projetos/jogoMemoria.jpeg',
        link: 'https://github.com/HelenoNascimento/JogoMemoria'
    },{
        titulo: "Consulta Cep",
        descricao: 'Desenvolvido um sitema para consultar CEP, pela API viaCEP ',
        imagem: 'image/projetos/ConsultaCep.jpeg',
        link: 'https://github.com/HelenoNascimento/ConsultaCep'
    },{
        titulo: "Vitrine Bicicleta",
        descricao: 'Uma vitrine para demonstrar biciletas ',
        imagem: 'image/projetos/vitrineBicileta.jpeg',
        link: 'https://github.com/HelenoNascimento/Vitrine-Bicileta'
    },{
        titulo: "Poke Dex",
        descricao: 'Projeto desenvolvido em uma live no youtube',
        imagem: 'image/projetos/pokedex.jpeg',
        link: 'https://github.com/HelenoNascimento/Pokedex'
    }, {
        titulo: "Urna eletronica",
        descricao: 'Projeto desenvolvido no curso JavaScript b7web',
        imagem: 'image/projetos/urna.jpeg',
        link: 'https://github.com/HelenoNascimento/Urna-eletronica'
    },
]
const projetosReact = [
    {
        titulo: "Clone Netflix",
        descricao: 'Projeto desenvolvido uma live ministrada pelo b7web',
        imagem: 'image/projetos/CloneNetflix.jpeg',
        link: 'https://github.com/HelenoNascimento/Clone-Netflix'
    }, {
        titulo: "Jogo Memoria",
        descricao: 'Projeto desenvolvido no curso React b7web',
        imagem: 'image/projetos/ReactMemoria.jpeg',
        link: 'https://github.com/HelenoNascimento/Jogo-memoria-react'
    },{
        titulo: "Ignite Lab",
        descricao: "Projeto desenvolvido durante um Ignite Lab",
        imagem: 'image/projetos/IgniteLab.jpeg',
        link: 'https://github.com/HelenoNascimento/Event-Plataform'
    } , {
        titulo: "Calculadora IMC",
        descricao: 'Projeto desenvolvido no curso React b7web',
        imagem: 'image/projetos/reactIMC.jpeg',
        link: 'https://github.com/HelenoNascimento/Calculadora-imc'
    }, {
        titulo: "Movies Lib",
        descricao: 'Projeto desenvolvido uma live do youtube',
        imagem: 'image/projetos/MoviesLib.jpeg',
        link: 'https://github.com/HelenoNascimento/Movies_lib'
    }, {
        titulo: "Login React Ignite",
        descricao: 'Projeto desenvolvido durante um Ignite Lab',
        imagem: 'image/projetos/reactIgnite.jpeg',
        link: 'https://github.com/HelenoNascimento/Ignite-lab-desing-system'
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
    const botaoProjeto = createElement('a', 'btn button--flex button-small projeto_button');
    const icone = createElement('i','uil uil-arrow-right button_icon');

    

   // projetoImage.style.backgroundImage = `url('../image/projetos/p-o1.jpeg')`;  

    outroProjeto.appendChild(projetoImage);
    projetoImage.appendChild(imagem)
   
    botaoProjeto.innerHTML= "Saber Mais";
    botaoProjeto.setAttribute('href', todosProejtos.link)
    botaoProjeto.setAttribute('target','_blank');
    botaoProjeto.appendChild(icone)
    outroProjeto.appendChild(titulo);
    outroProjeto.appendChild(descricao);
    outroProjeto.appendChild(botaoProjeto);
    
   
    return outroProjeto
}



const carregarProjeto =() =>{

   projetosReact.forEach((pj) =>{
       // allProjects.forEach((pj) =>{
        const projet = createProjeto(pj);
        projetos.appendChild(projet);
        console.log(projet)
    })
   
}
carregarProjeto();
const items_projeto = document.querySelectorAll('.outro-projeto');

console.log(items_projeto.length)



let botaoJs= document.querySelector('.btn-js');
botaoJs.addEventListener('click',carregaJavascript);
let botaoReact = document.querySelector('.btn-react');
botaoReact.addEventListener('click',projetoReact);
let botaoType = document.querySelector('.btn-typeScript');
botaoType.addEventListener('click',carregaTypeScript);

let botaoTailwind = document.querySelector('.btn-tailwind');
botaoTailwind.addEventListener('click',carregaTailwind);



function projetoReact () {
   
    limpaDados();
    allProjects.forEach((pj) =>{
        pj.tec.forEach((react)=>{
            console.log(react)
            if(react == "React"){
                let projet = createProjeto(pj);
               
                projetos.appendChild(projet);
            }
        })
    })
    loadThemaProject();
}
function carregaJavascript(){
    limpaDados();
    allProjects.forEach((pj) =>{
        pj.tec.forEach((react)=>{
            console.log(react)
            if(react == "JavaScript"){
                let projet = createProjeto(pj);
               
                projetos.appendChild(projet);
            }
        })
    })
    loadThemaProject();
}
function carregaTypeScript(){
    limpaDados();
    allProjects.forEach((pj) =>{
        pj.tec.forEach((react)=>{
            console.log(react)
            if(react == "Typescript"){
                let projet = createProjeto(pj);
               
                projetos.appendChild(projet);
            }
        })
    })
    loadThemaProject();
}
function carregaTailwind(){
    limpaDados();
    allProjects.forEach((pj) =>{
        pj.tec.forEach((react)=>{
            console.log(react)
            if(react == "Tailwind"){
                let projet = createProjeto(pj);
               
                projetos.appendChild(projet);
            }
        })
    })
    loadThemaProject();
}

function limpaDados(){
    const items_projeto = document.querySelectorAll('.outro-projeto');
    items_projeto.forEach((item) =>{
        item.remove();
    })
    console.log(items_projeto.length)
}
//************************************TEMA*********************** */

const chageThemeBtn = document.querySelector("#change-theme");

chageThemeBtn.addEventListener('change', function(){
    togleDarkMode();

    //salva ou remove o darkmode
    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark',1);
    }
});

//carrega o tema dark ou light
function loadTheme(){
    const darkMode = localStorage.getItem('dark');

    if(darkMode){
        togleDarkMode();
    }
    return darkMode;
}
loadTheme();

function loadThemaProject(){
    const darkMode = localStorage.getItem('dark');
   console.log(darkMode)
    if(darkMode == 1){
        const projetos = document.querySelectorAll('.outro-projeto');
        projetos.forEach((projeto) =>{
            projeto.classList.add('second-dark');
        })
    }else{
        document.querySelector('#menu-bar').classList.remove('dark');
        document.querySelector('.qualification_container').classList.remove('destaque-dark');
        const projetos = document.querySelectorAll('.outro-projeto');
        projetos.forEach((projeto) =>{
            projeto.classList.remove('second-dark');
        })
    }

}

function togleDarkMode(){
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('h3').classList.toggle('text_dark');
    document.querySelector('nav').classList.toggle('navbar-dark');
    document.querySelector('.bg-effect').classList.toggle('bg-dark')
    document.querySelector('.home').classList.toggle('second-dark')
    document.querySelector('.sobre-direito').classList.toggle('dark');
    document.querySelector('.skills').classList.toggle('second-dark');
    document.querySelector('.contato').classList.toggle('dark');
    document.querySelector('.qualification_active').classList.toggle('dark');
   // document.querySelector('.uil-bars').classList.toggle('dark');
   // document.querySelector('.navbar').classList.toggle('dark');

   if(document.body.classList.contains('uil-bars')){
    document.querySelector('.uil-bars').classList.toggle('dark');
   }else if(document.body.classList.contains('uil-times')){
    document.querySelector('.uil-times').classList.toggle('dark');
   }

    document.querySelector('.qualification_container').classList.toggle('destaque-dark');
    document.querySelector('.outros-projetos').classList.toggle('dark');
    const items = document.querySelectorAll('.item');

    const projetos = document.querySelectorAll('.outro-projeto');

    const ball = document.querySelectorAll('.qualification_rounder')
    const linha = document.querySelectorAll('.qualification_line');
    const bolds = document.querySelectorAll('.bold');

    const sliderItens = document.querySelectorAll('.slider--item');

    sliderItens.forEach((slider)=>{
        slider.classList.toggle('second-dark');
    })
   

   bolds.forEach((bold) =>{
    bold.classList.toggle('dark-bold');
   })

    items.forEach((item)=>{
        item.classList.toggle('dark')
    })


    projetos.forEach((projeto) =>{
        projeto.classList.toggle('second-dark');
    })
    linha.forEach((line)=>{
       line.classList.toggle('dark');
    })
    ball.forEach((bola) =>{
        bola.classList.toggle('dark');
    })

}