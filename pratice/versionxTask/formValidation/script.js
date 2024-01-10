// function valid() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("name").value;
//     var pwd = document.getElementById("pwd").value;
//     var rePwd = document.getElementById("rePwd").value;
//     var nameError = document.getElementById("name-error");

//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     if (name.value == "")  {
//         console.log(name);
//         nameError.innerHTML = 'give some name'
//     }
//     else if (pwd <= 8  ) {
//         error.innerHTML = "password should be at least 9 characters"
//     }

// }

// function nameValid() {

// }

function nameValid() {
  let nameField = document.getElementById("name").value;
  let nameError = document.getElementById("name-error");
  console.log(nameField);
  if (nameField == "") {
    nameError.innerHTML = "Name cannot be empty";
  } else {
    nameError.innerHTML = ""; // Clear the error message if nameField is not empty
  }
}
function emailValid() {
  let emailField = document.getElementById("email").value;
  let emailError = document.getElementById("email-error");

  // Regular expression for basic email format validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailField)) {
    emailError.innerHTML = "Email is Invalid";
  } else {
    emailError.innerHTML = "";
  }
}

function pwdValid() {
  let pwdField = document.getElementById("pwd").value;
  let pwdError = document.getElementById("pwd-error");
  if (pwdField.length < 8) {
    pwdError.innerHTML = "Password must 8";
  } else {
    pwdError.innerHTML = "";
  }
}
function repwdValid() {
  let pwdField = document.getElementById("pwd").value;
  let repwdField = document.getElementById("repwd").value;
  let repwdError = document.getElementById("repwd-error");

  if (repwdField !== pwdField) {
    repwdError.innerHTML = "Passwords do not match.";
  } else {
    repwdError.innerHTML = "";
  }
}
function valid() {
  // let submitError = document.getElementById("submit-error");

  // let isNameValid = nameValid();
  // let isEmailValid = emailValid();
  // let isPwdValid = pwdValid();
  // let isRepwdValid = repwdValid();

  // if (!isNameValid || !isEmailValid || !isPwdValid || !isRepwdValid) {
  //     submitError.innerHTML = "Please fix errors to submit.";
  // } else {
      // submitError.innerHTML = '';

      let a = document.getElementById("name").value;
      let b = document.getElementById("email").value;
      let c = document.getElementById("pwd").value;
      let d = document.getElementById("repwd").value;

      var table = document.getElementById('table');

      // Check if all fields have values before adding to the table
      if (a && b && c && d) {
          var row = table.insertRow(-1);
          var data1 = row.insertCell(0);
          var data2 = row.insertCell(1);
          var data3 = row.insertCell(2);
          var data4 = row.insertCell(3); // Change index to 3 (not 2)

          data1.innerHTML = a;
          data2.innerHTML = b;
          data3.innerHTML = c;
          data4.innerHTML = d;
      }
  }
// }
