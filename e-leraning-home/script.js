const header1 = document.querySelector("header");

window.addEventListener("scroll", function(){
    header1.classList.toggle("sticky",window.scrollY>0);
});

let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// window.onscroll= ()=>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };
