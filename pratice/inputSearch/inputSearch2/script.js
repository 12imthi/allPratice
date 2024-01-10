const persons = [
  {
    id: 1,
    name: "imthiyaz",
    age: 22,
    place: "Kerala",
    bankBlance: 100000,
    department: "B.A (Tamil)",
    image: "img/cat-1.jpg",
  },
  {
    id: 2,
    name: "bittu",
    age: 21,
    place: "Karnataka",
    bankBlance: 1234000,
    department: "B.sc (maths)",
    image: "img/cat-2.jpg",
  },
  {
    id: 3,
    name: "mukil",
    age: 20,
    place: "Tamilnadu",
    bankBlance: 300000,
    department: "B.sc (physics)",
    image: "img/cat-3.jpg",
  },
  {
    id: 4,
    name: "mani",
    age: 32,
    place: "Kerala",
    bankBlance: 1450000,
    department: "B.sc (maths)",
    image: "img/offer-2.png",
  },
  {
    id: 5,
    name: "rithik",
    age: 20,
    place: "Karnataka",
    bankBlance: 900000,
    department: "B.A (english)",
    image: "img/product-2.jpg",
  },
  {
    id: 6,
    name: "manas",
    age: 28,
    place: "Tamilnadu",
    bankBlance: 700000,
    department: "B.A (Tamil)",
    image: "img/product-5.jpg",
  },
  {
    id: 7,
    name: "mirmoy",
    age: 29,
    place: "Kerala",
    bankBlance: 450800,
    department: "B.sc (chemistry)",
    image: "img/product-6.jpg",
  },
  {
    id: 8,
    name: "prince",
    age: 22,
    place: "Karnataka",
    bankBlance: 330000,

    department: "B.A (Tamil)",
    image: "img/product-7.jpg",
  },
  {
    id: 9,
    name: "ganesh",
    age: 21,
    place: "Tamilnadu",
    bankBlance: 440000,
    department: "B.sc (physics)",
    image: "img/product-8.jpg",
  },
  {
    id: 10,
    name: "anuba",
    age: 32,
    place: "Kerala",
    bankBlance: 550000,
    department: "B.A (english)",
    image: "img/user.jpg",
  },
];

for (let i of persons) {
  // console.log(i);
  if (i.age < 25) {
    console.log(i.name);
  }
}

function search() {
  let str = document.getElementById('str').value;
  console.log(str);
  let demo = document.getElementById('demo');
  let error = document.getElementById('error');

  demo.textContent = '';

  for(let i of persons) {
    console.log(i);
    if(i.name.includes(str) && str != '') {
      let div = document.createElement('p');
    div.innerHTML = `name: ${i.name} age: ${i.age} BankBalance : ${i.bankBlance}`;
    demo.appendChild(div);
    }
    
  }
  if(str == ''){
    error.innerHTML = 'you are not givien any data'
  }
  else  {
    error = ''
  }
}

