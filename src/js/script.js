// document.addEventListener("DOMContentLoaded", function(event) { 

// }); // DOM content loaded

const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

// toggle mobile menu
hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
})