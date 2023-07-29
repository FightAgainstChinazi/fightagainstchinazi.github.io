var elem = document.querySelector('h1');
var animation = elem.animate({
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
});

var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
  { color: '#431236', offset: 0.3},
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

var aliceTiming = {
  duration: 3000,
  iterations: Infinity
}

//document.querySelector("img").animate(
//  aliceTumbling, 
//  aliceTiming
//)
