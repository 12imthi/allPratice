let val1 = document.getElementById("val1").value;
let val2 = document.getElementById("val2").value;
let result = document.getElementById("result");

function add(e) {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  console.log(e);
  e = parseInt(val1) + parseInt(val2);
  result.innerHTML = e;
}
function minus(a, b, c) {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  a = val1;
  b = val2;
  c = a - b;
  result.innerHTML = c;
}
function multiplication(e) {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  e = val1 * val2;
  result.innerHTML = e;
}
function division(e) {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  e = val1 / val2;
  result.innerHTML = e;
}
function equal(e) {
    e = division()
}


