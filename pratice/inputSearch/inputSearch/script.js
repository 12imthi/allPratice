const arr = ['blue', 'green', 'black', 'yellow', 'white'];
for(let x of arr) {
    console.log(x[0]);
}

function search() {
    var demo = document.getElementById('demo');
    var data = document.getElementById('ele').value;
    console.log(data);

    demo.innerHTML = ''

let foundMatch = false;
    for(let x of arr) {
        // console.log(x[0]);
        if(data != '' && x.includes(data)) {
            demo.innerHTML += '<p>' + x + ' is in the array.</p>';
            foundMatch = true;
        }
    }

    if (!foundMatch && data != '') {
        demo.innerHTML += '<p>No match found in the array.</p>';
    }
    else if ( foundMatch == '') {
        demo.innerHTML = 'you did not give anything';
    }
  
}
function search1() {

    var demo = document.getElementById('demo');
    var data = document.getElementById('ele').value;
    console.log(data);
    demo.innerHTML = ''
    for(let x of arr) {
        // console.log(x[0]);
        if(data != '' && x.includes(data)) {
            demo.innerHTML += '<p>' + x + ' is in the array.</p>';
            foundMatch = true;
        }
    }

    if (!foundMatch && data != '') {
        demo.innerHTML += '<p>No match found in the array.</p>';
    }
    else if ( foundMatch == '') {
        demo.innerHTML = 'you did not give anything';
    }
}


