let demo = document.getElementById('demo');
let blink = document.getElementById('blink');
// setTimeout( () =>{
// demo.innerHTML += 'hello'
//     setTimeout( ()=> {
//         console.log("welcome-2");
//     },2000)
// },2000);
let a = 10;

function countdown() {
  if (a <= 0) {
    // console.log("Happy Christmas!");
  } else {
    console.log(a);
    a--;
    setTimeout(countdown, a === 1 ? 1 : 1000);
        demo.innerHTML = a;
  }
}

function merryChristmas() {
  demo.innerHTML = 'Happy christmas'
}

setTimeout(countdown, 1000);
setTimeout(function repeatt() {
  merryChristmas();
//   setTimeout(repeatt, 1000);
}, 11000);








// let a = 10;

// setInterval( ()=>{
// setTimeout( () => {
//     a--;
//     if(a == 0)
//     demo.innerHTML = a;
// },2000)
//     // console.log(a);
//     if (a > 0){
// console.log('happy chirtsmas');
//     }
// },1000)
