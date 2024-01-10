const tableData = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
    Name: "Google",
  },
];
const container = document.getElementById("container");
console.log(tableData[0].country);
const keys = Object.keys(tableData[0]);
console.log(keys);

// Create table element start
const table = document.createElement("table");
table.classList.add("data-table");
// Create table header
const headerRow = document.createElement("tr");
keys.forEach((key) => {
  // console.log(key);
  const th = document.createElement("th");
  th.textContent = key;
  headerRow.appendChild(th);
});

table.appendChild(headerRow);

// finish

function td () {
  tableData.forEach((item) => {
    const tableRow = document.createElement("tr");
    keys.forEach((key) => {
      // console.log(key);
      const td = document.createElement("td");
      td.textContent = item[key];
  
      tableRow.appendChild(td);
    });
    table.appendChild(tableRow);
  });
}

td()
container.appendChild(table);

const prev = document.querySelector('.prev')
const nxt = document.querySelector('.next')
const page = document.querySelector('.page')


const numberOfItems = tableData.length
const numberPerPage = 10
console.log(numberPerPage);
const pageCount = Math.round(numberOfItems / numberPerPage)


function next(e) {

let currentPage = e.currentTarget;

console.log(currentPage);

  
  
 
  // td()
}
