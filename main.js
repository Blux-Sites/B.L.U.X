
document.querySelector(".mobile-button").addEventListener("click", function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
    document.querySelectorAll(".mobile-btn").forEach(function(item){
      item.classList.toggle('btn-hide');
    })
});

let menu = document.querySelector(".fixed-menu");
menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
        
        let mobile = document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
    }
    let body = document.querySelector("body");
    let mobileMenu = document.querySelector(".mobile-menu");
    if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains('hide')){
        body.classList.add("off-scroll");
    }
    else{
      body.classList.remove("off-scroll");
    }
});

let classLink = '.main-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h*4 ){
    classLink = '.comments-link';
  }
  else if (window.scrollY >= h*3){
    classLink = '.works-link';
  }
  else if (window.scrollY >= h*2 ){
    classLink = '.skills-link';
  }
  else if (window.scrollY >= h){
    classLink = '.about-link';
  }
  else{
    classLink = '.main-link';
  }
  let activeBtn = document.querySelector('.active');
  let newActiveBtn = document.querySelector(classLink);
  if (!newActiveBtn.classList.contains('active')){
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active')
  }
};
let main = document.getElementById('mainD')
let about = document.getElementById('aboutD')
let skills = document.getElementById('skillsD')
let works = document.getElementById('worksD')
let comments = document.getElementById('commentsD')
let GG = document.getElementById('GG')
let buttonmain = document.getElementById('button-main')
let titleDD = document.getElementById('titleDD')
let abouttitle = document.getElementById('about-title')
let skills_D = document.getElementById('skills-D')
let aboutp = document.getElementById('about-p')
let aboutpp = document.getElementById('about-pp')
let title = document.getElementById('title')
let skillsp = document.getElementById('skills-p')
let buttonB = document.getElementById('buttonB')
let titleD = document.getElementById('titleD')
let P = document.getElementById('P')
let navlink = document.getElementById('nav-link')
let Title = document.getElementById('titleDDD');
let navlink2 = document.getElementById('nav-link2')
buttonB.onclick = function(){
  alert('Copy and paste. \n https://lakatron4k.github.io/WD/ \n https://lakatron4k.github.io/Fatumba/ \n https://lakatron4k.github.io/Time/ \n The site is very correct you need to write all link yourself:(');
}
 navlink.onclick =function(){
   main.innerHTML = 'Main'
   about.innerHTML = 'About'
   skills.innerHTML = 'Skills'
   works.innerHTML = 'Works'
   comments.innerHTML = 'Comments'
   GG.innerHTML = 'developer`s personal page'
   buttonmain.innerHTML = "More"
   titleDD.innerHTML = 'About me'
   abouttitle.innerHTML = 'My name is Blux. Im making cool sites and styling it! I like making modern and interisting sites'
   skills_D.innerHTML = 'My skills'
   aboutp.innerHTML = 'Where I leave: Romania'
   aboutpp.innerHTML = 'Age:16'
   title.innerHTML = 'Skills'
   skillsp.innerHTML = 'This site I made on Visual Studio Code and posted on github'
   buttonB.innerHTML = 'My proiects'
   titleD.innerHTML = 'Works';
   Title.innerHTML = 'Reviews'
   P.innerHTML ='developer`s personal page'
    navlink.style.display ="none"
    navlink2.style.display = "block"
    navlink2.style.display = "flex"
    navlink2.style.flexDirection = "center"

 }
 navlink2.onclick = function(){
  main.innerHTML = 'Главная'
     about.innerHTML = 'Обо мне'
     skills.innerHTML = 'Навыки'
     works.innerHTML = 'Работы'
     comments.innerHTML = 'Отзывы'
     GG.innerHTML = 'личная страница разработчика'
     buttonmain.innerHTML = "Подробнее"
     titleDD.innerHTML = 'ОБО МНЕ'
     abouttitle.innerHTML = 'Меня зовут Blux. Я занимаюсь разработкой \n Мне нравится создавать интересные и современные проекты.'
     skills_D.innerHTML = 'Мои навыки'
     aboutp.innerHTML = 'Где живу:Румыния'
     aboutpp.innerHTML = 'Возраст:16'
     title.innerHTML = 'НАВЫКИ'
     skillsp.innerHTML = 'Этот сайт я зделал в GitHub, и там же запостилю.'
     buttonB.innerHTML = 'Смотреть работы'
     titleD.innerHTML = 'РАБОТЫ';
     Title.innerHTML = 'ОТЗЫВЫ'
     P.innerHTML ='личная страница веб разроботчика'
      navlink2.style.display = "none"
      navlink.style.display = "block"
      navlink.style.display = "flex"
      navlink.style.flexDirection = "center"
 }
// function toggleVisibility() {
//   if (main.innerHTML = 'Главная') {
//     main.innerHTML = 'Main'
//     about.innerHTML = 'About'
//     skills.innerHTML = 'Skills'
//     works.innerHTML = 'Works'
//     comments.innerHTML = 'Comments'
//     GG.innerHTML = 'developer`s personal page'
//     buttonmain.innerHTML = "More"
//     titleDD.innerHTML = 'About me'
//     abouttitle.innerHTML = 'My name is Blux. Im making cool sites and styling it! I like making modern and interisting sites'
//     skills_D.innerHTML = 'My skills'
//     aboutp.innerHTML = 'Where I leave: Romania'
//     aboutpp.innerHTML = 'Age:16'
//     title.innerHTML = 'Skills'
//     skillsp.innerHTML = 'This site I made on Visual Studio Code and posted on github'
//     buttonB.innerHTML = 'My proiects'
//     titleD.innerHTML = 'Works';
//     Title.innerHTML = 'Reviews'
//     navlink.innerHTML = 'Русский'
//     P.innerHTML ='developer`s personal page'
//   } else {
//     main.innerHTML = 'Главная'
//     about.innerHTML = 'Обо мне'
//     skills.innerHTML = 'Навыки'
//     works.innerHTML = 'Работы'
//     comments.innerHTML = 'Отзывы'
//     GG.innerHTML = 'личная страница разработчика'
//     buttonmain.innerHTML = "Подробнее"
//     titleDD.innerHTML = 'ОБО МНЕ'
//     abouttitle.innerHTML = 'Меня зовут Blux. Я занимаюсь разработкой \n Мне нравится создавать интересные и современные проекты.'
//     skills_D.innerHTML = 'Мои навыки'
//     aboutp.innerHTML = 'Где живу:Румыния'
//     aboutpp.innerHTML = 'Возраст:16'
//     title.innerHTML = 'НАВЫКИ'
//     skillsp.innerHTML = 'Этот сайт я зделал в GitHub, и там же запостилю.'
//     buttonB.innerHTML = 'Смотреть работы'
//     titleD.innerHTML = 'РАБОТЫ';
//     Title.innerHTML = 'ОТЗЫВЫ'
//     navlink.innerHTML = 'English'
//     P.innerHTML ='личная страница веб разроботчика'
//   }
// }