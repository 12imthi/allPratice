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

for(let i of persons) {
  console.log(i.bankBlance);
}
function search1() {
  var demo = document.getElementById("demo");
  // var demo2 = document.getElementById("demo");
  let data = document.getElementById("element").value;
  // let error = document.getElementById("error");
  // data = parseInt(data);
  //   console.log(typeof(data));

  demo.innerHTML = "";

  for (var i of persons) {
    if (i.id == data) {
      let container = document.createElement("div");
      container.setAttribute("class", "container");

      let child = document.createElement("div");
      child.setAttribute("class", "child");

      let child1 = document.createElement("div");
      child1.setAttribute("class", "child1");

      let chill1Span = document.createElement("span");
      chill1Span.setAttribute("class", "child1Span");
      chill1Span.textContent = "Name : " + i.name;

      let img = document.createElement("img");
      img.src = `${i.image}`;

      container.appendChild(child);
      container.appendChild(child1);
      child1.appendChild(chill1Span);
      child.appendChild(img);
      demo.appendChild(container);
    }
    
  }

  // if (!foundMatch && data === '') {
  //     error.innerHTML = 'You have not provided anything.';
  //     demo.style.display = 'none';
  // } else if (!foundMatch && data !== '') {
  //     // error.innerHTML = 'No match found for the provided ID.';
  //     demo.style.display = 'block';
  // }
}
// let index = 0;

// function displayNextPerson() {
//   if (index < persons.length) {
//     let i = persons[index];
//     if (i.id === data) {
//       var div = document.createElement("div");
//       var ul = document.createElement("ul");
//       var li1 = document.createElement("li");
//       var li2 = document.createElement("li");

//       li1.textContent = `Name: ${i.name}`;
//       li2.textContent = `Department: ${i.department}`;

//       ul.appendChild(li1);
//       ul.appendChild(li2);

//       div.setAttribute("class", "mystyle");
//       div.appendChild(ul);
//       demo.appendChild(div);

//       index++;
//       setTimeout(displayNextPerson, 1000); // Adjust the delay (in milliseconds) between each iteration
//     } else {
//       index++;
//       displayNextPerson();
//     }
//   }
// }

//   displayNextPerson(); // Start the process
// }
