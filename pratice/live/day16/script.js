// function timeOut() {
//     console.log('school bell ring');
//     document.getElementById('demo').innerHTML += 'Hello World'
// }

// console.log(`started`);

// setTimeout( ()=> console.log('hello') ,3000);
// setInterval( ()=> console.log('bye') ,6000);

// console.log(`completed!`);


console.log(`started`);

setTimeout(function timer() {
    console.log(`2s dealy`);
}, 2000)
console.log(`middle`);

setTimeout(function timer() {
    console.log(`5s dealy`);
}, 5000)

console.log(`end`);