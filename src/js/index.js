// document.addEventListener("DOMContentLoaded", function(event) { 


// const nav = document.querySelector('nav');


// // hide header on scroll down
// // https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm

// let scrollPos = 0;
// let scrollThreshold = 50;
// let scrollUpDistance = 100;
// //let pageHeight = document.body.clientHeight;
// let pageHeight = document.body.scrollHeight;
// // console.log("Page height: " + pageHeight);
// let windowHeight = window.innerHeight;
// // console.log("Window height: " + windowHeight);
// let availableScrollDistance = pageHeight - windowHeight;
// // console.log("Available scroll distance: " + availableScrollDistance);
// let scrollUpThreshold = availableScrollDistance - scrollUpDistance;
// // console.log("Scroll up threshold: " + scrollUpThreshold);

// function updateScrollUpThreshold(){
//   pageHeight = document.body.clientHeight;
//   availableScrollDistance = pageHeight - windowHeight;
//   scrollUpThreshold = availableScrollDistance - scrollUpDistance;
// }

// // updateScrollUpThreshold();


// function checkPosition() {
//   let windowY = window.scrollY;

//   if (availableScrollDistance > (scrollThreshold + scrollUpDistance ) ) {
//       //if (windowY < scrollPos) {
//       if ( (windowY < scrollPos) && (scrollPos < scrollUpThreshold)  ) {
//         // Scrolling UP
//         header.classList.add('is-visible');
//         header.classList.remove('is-hidden');
//       } else if (scrollPos > scrollThreshold ) {
//         // Scrolling DOWN
//         header.classList.add('is-hidden');
//         header.classList.remove('is-visible');
//       }
//       scrollPos = windowY;
//       //console.log(scrollPos);
//   }
// }


// function debounce(func, wait = 10, immediate = true) {
//     let timeout;
//     return function() {
//       let context = this, args = arguments;
//       let later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       let callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
// };
  
// window.addEventListener('scroll', debounce(checkPosition));




// }); // DOM content loaded