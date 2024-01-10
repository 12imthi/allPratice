// let user = [];

// let showContainer = document.getElementById("show");

// // let id = document.getElementById('id');
// // let name = document.getElementById('name');
// // let age = document.getElementById('age');

// function creatUser(event) {
//   event.preventDefault();

//   let idInput = document.getElementById("id");
//   let nameInput = document.getElementById("name");
//   let ageInput = document.getElementById("age");

//   let extingUser = user.find((user) => (user.id == idInput.value));

//   console.log(`extingUser`, extingUser);

//   if (extingUser) {
//     extingUser.id = idInput.value;
//     extingUser.name = nameInput.value;
//     extingUser.age = ageInput.value;
//   }
//   // else if (extingUser == idInput.value) {
//   //     console.log(`already user exiting`);
//   // }
//   else {
//     let newUser = {
//       id: idInput.value,
//       name: nameInput.value,
//       age: ageInput.value,
//     };
//     user.push(newUser);
//   }
//   // console.log(`extingUser`, extingUser);
//   idInput.value = "";
//   nameInput.value = "";
//   ageInput.value = "";
//   displayUser();
// }

// function displayUser() {
//     showContainer.innerHTML = ''; 

//   let userList = document.createElement("ul");

//   user.forEach((user) => {
//     let userValue = document.createElement("li");
//     userValue.innerHTML = `${user.id} : ${user.name} : ${user.age} `;
//     userList.appendChild(userValue);
//   });

//   showContainer.appendChild(userList);
// }

// let userForm = document.getElementById("userForm");
// userForm.addEventListener("submit", creatUser);

// displayUser();

// // function editUser(user) {
// //     document.getElementById('id').value = user.id;
// //     document.getElementById('name').value = user.name;
// //     document.getElementById('age').value = user.age;
// // }


let number = [1,2,3,4,5]

let fI = number.findIndex(e => e == 2)

console.log(`fI`, fI);