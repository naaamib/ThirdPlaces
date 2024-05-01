let animation = {
  revealDistance: 15,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};


let revealableContainers = document.querySelectorAll('.revealable');
function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
// HERE LIES MY REDUCE MOTION CODE!
document.addEventListener('scroll',reveal);

const reduceAnimations = document.getElementById("reduceMotion")
reduceAnimations.addEventListener("click", reduceMotion);

function reduceMotion() {
  for (let i = 0; i < revealableContainers.length; i++) {
  revealableContainers[i].style.transitionProperty = 'none'

  }
}
