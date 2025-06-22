gsap.registerPlugin(GSDevTools, SplitText)
let split
let animation = gsap.timeline({})

// line by line
// function init() {
//   gsap.set('.wrapper', { autoAlpha: 1 })
//   split = new SplitText('.wrapper p', { type: 'lines' })
//   animation.from(split.lines, {
//     opacity: 0,
//     rotationX: -90,
//     rotationY: -80,
//     stagger: 0.2,
//     transformOrigin: '50% 50% -200',
//   })
// }

// word by word
function init() {
  gsap.set('.wrapper', { autoAlpha: 1 })
  split = new SplitText('.heading-container h1', { type: 'words' })
  animation.from(split.words, {
    opacity: 0,
    rotation: -40,
    scale: 0.3,
    stagger: 0.1,
    ease: 'back',
  })
}

// letter by letter
/* function init(){
  gsap.set(".wrapper", {autoAlpha:1})
  split = new SplitText("h1", {type:"chars"})
  animation.from(split.chars, {opacity:0, y:50, ease:"back(4)", stagger:0.05})
  //console.log(split.chars)
  GSDevTools.create({animation:animation})
} */

window.addEventListener('load', init)
