function calculate() {
  let demo = document.getElementById("demo");
  let billAmount = parseInt(document.getElementById("billAmount").value);
  let tipAmount = parseInt(document.getElementById("tipAmount").value);

  console.log(billAmount + tipAmount);

  let totalTip = (billAmount * (tipAmount / 100)).toFixed(2);
  // let total = totalTip.toFixed(2)
  demo.innerHTML = totalTip;
  console.log(totalTip);
}

// function check() {
//     let num = document.getElementById('val').value;
//     console.log('num: ' + num); // Use 'num' directly without '.value'
// }
