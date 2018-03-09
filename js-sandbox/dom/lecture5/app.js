/*
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
  
  console.log("Hi");
  e.preventDefault();
});
*/

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log("Clicky clicky");

  let val;

  val = e;

  // event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;
  
  console.log(val);

  // coords event relative to the window
  console.log("Y: " + e.clientY + " X: " + e.clientX);
  
  // coords event relative to the element
  console.log("Y: " + e.offsetY + " X: " + e.offsetX);
}