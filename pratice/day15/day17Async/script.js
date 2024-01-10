let promise = new Promise((resolve, reject) => {
    let randomNumber = Math.round(Math.random() * 10);

    console.log(randomNumber);

    if (randomNumber > 5) {
        setTimeout(() => {
            resolve('Promise resolved successfully');
        }, 5000);
    } else {
        setTimeout(() => {
            reject('Promise rejected');
        }, 9000);
    }
});

console.log(`promise`, promise);

promise
    .then((result) => {
        console.log('promise resolved:', result);
    })
    .catch((error) => {
        console.log('promise rejected:', error);
    });

setTimeout(() => {
    console.log(promise);
}, 6000);
