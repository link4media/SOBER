// *** MOUSE OVER ***
// document.querySelector('.header-change').addEventListener("mouseover", mouseOver);
// document.querySelector('.header-change').addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.querySelector('.header-1').style.display = "none";
//     document.querySelector('.header-2').style.display = "block";
// }
// function mouseOut() {
//     document.querySelector('.header-2').style.display = "none";
//     document.querySelector('.header-1').style.display = "block";
// }


// document.querySelector('.header-1');
// document.querySelector('.header-2');

// onscroll = (event) => {
//     document.querySelector('.header-1').style.display = "none";
//     document.querySelector('.header-2').style.display = "block";
// };

var scrollTrigger = 50;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector('.header-1').style.display = "none";
    document.querySelector('.header-2').style.display = "block"
  } else {
    document.querySelector('.header-2').style.display = "none";
    document.querySelector('.header-1').style.display = "block";
  }
};