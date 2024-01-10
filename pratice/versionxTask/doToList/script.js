let demo = document.getElementById("demo");
let val = document.getElementById("val");
let err = document.getElementById("err");
let count = 0;
function add() {
  let val = document.getElementById("val").value;
  if (val == "") {
    err.innerHTML = "give some todo list";
  } else {
    err.innerHTML = "";
    // demo.innerHTML = ''
    count++;
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var span = document.createElement("span");
    li.textContent = `${count} : ${val}`;
    span.setAttribute("class", "spn");
    span.textContent = "del";

    val.value = "";
    li.appendChild(span);
    ul.appendChild(li);
    demo.append(ul);
    document.getElementById("val").value = ""; 
    // val.value = "";
  }
}
demo.addEventListener("click", function (e) {
  var target = e.target;
  if (target.className === "spn") {
    target.parentNode.nodeName;
    target.parentNode.remove();
    console.log(`target`, target);
  } else if (target.tagName == "LI") {
    target.classList.toggle("complete");
  }
});
