

function nameValid() {
    var name = document.getElementById("name").value;
    var nameE = document.getElementById("nameE");
    if (name.trim() === "") {
        nameE.textContent = "Please enter your name";
    }
}

function emailValid() {
    var email = document.getElementById("email").value;
    var emailE = document.getElementById("emailE");

    if (email.length === 0) {
        emailE.innerHTML = 'Email address must contain "@" symbol.';
    }
}
