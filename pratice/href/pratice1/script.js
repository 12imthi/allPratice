let text = "Hello planet earth, you are a great planet.";
let result = text.indexOf("planet");

console.log(result);

function c1() {
    console.log('this is c1');
    c2(); // Call c2() from within c1()
}

function c2() {
    console.log('this is c2');
    c3(); // Call c3() from within c2()
}

function c3() {
    console.log('this is CB');
}

c1(); // Call c1() to start the sequence of function calls
