const numDrop = {
  "1" : 1
}
const listArray = []
for (let i=1; i<=50; i++) {
  listArray.push(i)
}

// function buildPage() {
//   console.log(`container`, container[0].value);
//   console.log(`container`, container[1].value);
//   console.log(`container`, container[2].value);
// }
const demo = document.querySelector('#demo');
const page = document.querySelector('#page');

const numberOfItems = listArray.length
const numberPerPage = 10
const pageCount = Math.round(numberOfItems / numberPerPage)
console.log(`pageCount`, pageCount);

function buildPage() {
const currantPage = page.value
    console.log(currantPage);
  const start = (currantPage - 1) * numberPerPage
  console.log(start);
  const end = start + numberPerPage
  console.log(end);
  const paginatedList = listArray.slice(start , end)

  // let div = document.createElement('div')
  demo.innerHTML = paginatedList;
  // container.appendChild(div)

  console.log(`paginatedList`, paginatedList);

}
buildPage()