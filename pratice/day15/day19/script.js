var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
res.then((data)=> data.json())
.then((data1) => {
    for(var i of data1) {
        console.log(i);
    }
})

// Async function always return a promise 
// to handle promise we have await keyword.
// await is used to inside the async Func.
// await help us to wait until the promise gets reslved.
// await replacement for the .then

// async function rest() {
//     var res = await fetch('https://restcountries.com/v3.1/all');
//     var result = await res.json();
//     console.log(`result`, result);
// }
// rest();

// function war() {
//     return new Promise((resolve,reject) => reject('this is reject'))
// }

// async function foo() {
//     try {
//         var res = await fetch('https://restcountries.com/v3.1/all')
//         var result = await res.json();
//         console.log(`result`, result);
//         var res2 = await war();
//         console.log(`res2`, res2);
//     }
//     catch(error) {
//         console.log(`error`, error);
//     }
// }

// foo();


function war(num) {
    return new Promise((resolve,reject) => {
        setTimeout( () => resolve(2*num) ,3000)
    })
};

async function foo1() {
    var v1 = await war(2);
    console.log(`v1`, v1);
    var v2 = await war(v1);
    console.log(`v2`, v2);
}

foo1();