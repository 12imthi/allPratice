let txt = document.getElementById("txt");
const color = ["blue", "green", "black", "yellow", "pink"];

// var color = ["1201", "1204", "0116"];

// function chgColor() {
//     var randomIndex = Math.floor(Math.random() * color.length);
//     var randomColor = color[randomIndex];
//     document.body.style.background = randomColor;
// }

function chgColor() {
  // for(var i=0;i<color.length;i++) {

  var randomIndex = Math.round(Math.random() * color.length);
  console.log(randomIndex);
  var randomColor = color[randomIndex];
  document.body.style.background = randomColor;




  var txt = document.getElementById("txt"); 
//   var span = document.createElement("span");
  txt.textContent = "background: " + randomColor;
//   txt.appendChild(span);

//   txt.innerHTML =''
  // console.log(randomColor);
  // }
}
