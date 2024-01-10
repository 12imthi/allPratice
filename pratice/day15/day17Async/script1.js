new Promise((resolve,reject) => {
    console.log('initial state');
    resolve();
})

.then( () => {
    console.log('do this');
})
.catch( () => {
    console.log('do that');
})
.then( () => {
    console.log('do this , no matter what happened before');
})
.then( () => {
    console.log('do this , no matter what happened before');
})