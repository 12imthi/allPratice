const demo = document.getElementById('demo');
// setInterval(function(name) {
// demo.innerHTML += 'hello imthiyaz' + name
// }, 1000 , 'imthi')
// setTimeout(function(name) {
// demo.innerHTML += 'hello imthiyaz' + name
// }, 1000 , 'imthi');

let count = 0;

const intervalId = setInterval(function(name) {
    count++;
    console.log(count);
    if (count >= 5){
        // console.log(intervalId);
        clearInterval(intervalId)
    }
    // console.log(count);

},1000, 'imthi'  )

var another = setInterval(() => {
    count++;
    demo.innerHTML = count;
if(count == 10) {
    clearInterval(another)
}
    // console.log(`This is loop number ${count}`);
}, 1000);


