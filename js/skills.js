const skillsContent = document.querySelectorAll('.skills_content');
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
    
});