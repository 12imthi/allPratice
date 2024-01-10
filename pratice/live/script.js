function search() {
    let demo = document.getElementById('demo')
    let val = document.getElementById('ele').value;
    console.log(val);
let email = 'msdimthi6@gmail.com';
if(val == email) {
    demo.innerHTML = 'email id is valid'
}
else {
    demo.innerHTML = 'email id is not valid'
}
}