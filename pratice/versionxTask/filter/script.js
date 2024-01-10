const items = [
    {   item: 'cake',
        name: 'cake-1',
        img: 'img/cake/cake-1.jpg'
    },
    {
        item: 'cake',
        name: 'cake-2',
        img: 'img/cake/cake-2.jpeg'
    },
    {
        item: 'cake',
        name: 'cake-3',
        img: 'img/cake/cake-3.jpeg'
    },
    {
        item: 'chocolate',
        name: 'chocolate-1',
        img: 'img/chocolate/chocolate-1.jpg'
    },
    {
        item: 'chocolate',
        name: 'chocolate-2',
        img: 'img/chocolate/chocolate-2.jpg'
    },
    {
        item: 'chocolate',
        name: 'chocolate-3',
        img: 'img/chocolate/chocolate-3.jpg'
    },
    {
        item: 'cufCake',
        name: 'cufCake-1',
        img: 'img/cufCakes/cufCake-1.jpg'
    },
    {
        item: 'cufCake',
        name: 'cufCake-2',
        img: 'img/cufCakes/cufCake-2.jpg'
    },
    {
        item: 'cufCake',
        name: 'cufCake-3',
        img: 'img/cufCakes/cufCake-3.jpg'
    },
    {
        item: 'sweet',
        name: 'sweet-1',
        img: 'img/sweets/sweet-1.jpg'
    },
    {
        item: 'sweet',
        name: 'sweet-2',
        img: 'img/sweets/sweet-2.jpg'
    },
    {
        item: 'sweet',
        name: 'sweet-3',
        img: 'img/sweets/sweet-3.jpg'
    },
];

// for(var i of items) {
//     console.log(i);
// }

let demo = document.getElementById('demo');

let allItem = items.map(e => e);

// console.log(sweetItem);

function fullData() {
    demo.innerHTML = '';
    
    for (var i = 0; i < allItem.length; i++) {
        var parent = document.createElement('div');
        parent.setAttribute('class', 'parent');

        var child = document.createElement('div');
        child.setAttribute('class', 'child');
        // div1.innerHTML = 'hi';

        var img = document.createElement("img");
        img.src = allItem[i].img;

     
        demo.appendChild(parent)
        parent.appendChild(child)
        child.appendChild(img);
       
    }
}


let sweetItem = items.filter(e => e.item == 'sweet');
console.log(sweetItem);

function sweet() {
    demo.innerHTML = ''
   
    sweetItem.forEach( e =>{
        // console.log(sweetItem[i]);
            var img = document.createElement("img");
            img.src = e.img;
            demo.appendChild(img); 
    })
}

let chocolateItem = items.filter(e => e.item == 'chocolate');
console.log(`chocolate`, chocolateItem);

function chocolate() {
    demo.innerHTML = ''
   
    chocolateItem.forEach( e =>{
        // console.log(sweetItem[i]);
            var img = document.createElement("img");
            img.src = e.img;
            demo.appendChild(img); 
    })
}

let cufCakeItem = items.filter(e => e.item == 'cufCake');
console.log(`sweet`, cufCakeItem);

function cufCakes(){
    demo.innerHTML = ''
   
    cufCakeItem.forEach( e =>{
        // console.log(sweetItem[i]);
            var img = document.createElement("img");
            img.src = e.img;
            demo.appendChild(img); 
    })
}
let cakeItem = items.filter(e => e.item == 'cake');
console.log(`cake`, cake);

function cake(){
    demo.innerHTML = ''
   
    cakeItem.forEach( e =>{
        // console.log(sweetItem[i]);
            var img = document.createElement("img");
            img.src = e.img;
            demo.appendChild(img); 
    })
};


for(var i of items) {
    console.log(i);
    if(i.name == 'cake') {
        var div = document.createElement('span');
        div.innerHTML = i.name;
        demo.appendChild(div)
    }
}

function search() {
    let inputValue = document.getElementById('inputValue').value;
    let err = document.getElementById('err'); 
    let demo = document.getElementById('demo');
    
    demo.innerHTML = '';
    let found = false;

    if (inputValue.trim() === '') {
        err.innerHTML = 'give some text'
        return; // Stop further execution of the function
    }
    for (var i of items) {
        if (i.item.includes(inputValue)) {
            var div = document.createElement('img');
            div.src = i.img;
            demo.appendChild(div);
            found = true;
        }
    }

    if (!found) {
        err.innerHTML = 'No matching item found.';
    } else {
        err.innerHTML = ''; 
    }
}






