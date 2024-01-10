const users = [
  { id: 1, name: "imthiyaz", age: 26 },
  { id: 2, name: "afzal", age: 22 },
  { id: 3, name: "haq", age: 20 },
];
let currentUserId = null;
let userCount = users.length;


const crudForm = document.getElementById("crudForm");
const table = document.querySelector("#table tbody");

function readUser() {
console.log(users);
  table.innerHTML = "";
  users.forEach((user) => {
    let ul = document.createElement("tr");
    // let li = document.createElement('li');
    ul.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td><button onclick='edit(${user.id})'>Edit</button></td>
    <td><button onclick='del(${user.id})'>Delete</button></td>
    `;
    table.appendChild(ul);
  });
}

function create(e) {
    console.log("form submited");
  e.preventDefault();
  const idInput = document.getElementById("id");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  // let id1 = idInput.value;
  let name = nameInput.value;
  let age = ageInput.value;
  userCount +=  1;
//   const id = users.length + 1;
  console.log(id);
  let newUser = { id: userCount, name: name, age: age };
  console.log(newUser);
  users.push(newUser);
//   if (nameInput.value == "" && ageInput.value == "") {
//     err.innerHTML = "please write something";
//     console.log("please write ");
//   }
  //   else if () {

  //   }

  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";

  readUser();
}

let userObject = {};

function edit(id) {
  console.log(`edit`);

  const idInput = document.getElementById("id");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  let edit = users.find((user) => user.id === id);
  userObject = edit;
  console.log(edit);
  if (edit) {
    idInput.value = edit.id;
    nameInput.value = edit.name;
    ageInput.value = edit.age;
  }
  
  let auto = document.getElementById('auto');
  auto.classList.toggle('hidden');
}

function del(id) {
  console.log("delete");

  let del = users.findIndex((user) => user.id === id);

  console.log(`del`, del);

  users.splice(del, 1);

  readUser();
}

function update() {
  console.log(`update`);
  let auto = document.getElementById('auto');
  auto.classList.toggle('hidden');

//   const id = parseInt(document.getElementById("id").value);
//   console.log('id ' ,id);
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  userObject.name = name;
  userObject.age = age;
//   let index = users.find(user => user.id === id);

//   console.log( 'upd : ', index);
// if( index !== -1) {
    
//   users[index].id = id;
//   users[index].name = name;
//   users[index].age = age;
// }
  readUser();
}

crudForm.addEventListener('submit',create)
readUser();

