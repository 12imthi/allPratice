const persons = [
  { id: 1, name: "imthi", age: 26 },
  { id: 2, name: "afzal", age: 22 },
  { id: 3, name: "surfRaj", age: 20 },
];
let existUser = {};

let userForm = document.getElementById("userForm");
let tableBody = document.querySelector("#userTable tbody");

console.log(tableBody);

function readUser() {
  tableBody.innerHTML = "";
  persons.forEach((user) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>

        <button onclick='editUser(${user.id})'>Edit</button>
        <button onclick='deleltUser(${user.id})'>Delete</button>

        </td>`;
    tableBody.appendChild(row);
  });
}

function addNewUser() {
  // if (existUser) {

  // } else {

  // }
  let idInput = document.getElementById("_id");
  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");

  let name = nameInput.value;
  let age = ageInput.value;

  const id = Math.max(...persons.map((user) => user.id)) + 1;

  let newUser = { id: id, name: name, age: age };

  persons.push(newUser);

  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";

  readUser();
}

function update() {

  console.log(`checking : `, readUser());

  let id = document.getElementById("_id").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let upd = persons.findIndex((e) => e.id == id);
  console.log(upd);

  if(upd !== -1) {

    persons[upd] = {id,name , age}

    console.log(`persons`, persons);

  }

  console.log(upd);

  // id.value = ''

  readUser();
}

// function handeleSubmit(event) {
//     event.preventDefault();
//     let name = document.getElementById("name");
//     let age = document.getElementById("age");

//     name.value = ''
//     age.value = ''

//     readUser()

// }

function editUser(id) {


  console.log(`id`, id);
  let edit = persons.find((e) => e.id === id);

  console.log(`edit`, edit);

    let _id = document.getElementById("_id");
  let name = document.getElementById("name");
  let age = document.getElementById("age");

  if (edit) {
    _id.value = edit.id;
    name.value = edit.name;
    age.value = edit.age;
    existUser = edit;
  }

}


function deleltUser(id) {
  const index = persons.findIndex((e) => e.id === id);
  console.log(`index`, index);

  if (index !== -1) {
    persons.splice(index , 1);
    console.log(`User with ID ${id} deleted.`);
  } else {
    console.log(`User with ID ${id} not found.`);
  }

  readUser(); // Update the displayed users
}


// function deleltUser(id) {
//   //   let del = persons.filter((e) => e.id !== id);
//   let del = persons.filter((e) => e.id === id);
//   console.log(`del`, del);
//   // let del1 = Object.keys(del);

//   // console.log(del1);

//   del.forEach((e) => {
//     e = id.value;
//     e = ''
//     tableBody.textContent = e;
//     console.log(`e`, e);
//   });
// }

function rst() {
  document.getElementById("userForm").reset();
}

readUser();




const per = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

let upd = 2; // Consider upd having a value of 1
console.log(per[upd]); // This will output the second object: { id: 2, name: "Alice" }
