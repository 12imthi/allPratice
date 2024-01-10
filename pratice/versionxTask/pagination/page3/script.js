const tableData = document.querySelectorAll("#tableData tr");
const page = document.getElementById("page");

const result = [];

for (const tr of tableData) {
//   console.log(`i`, tr);
  let th_td = tr.getElementsByTagName("td");
  // console.log(`th`, th_td);
  if (th_td.length == 0) {
    th_td = tr.getElementsByTagName("th");
    // console.log(`th_td`, th_td);
  }

  let th_td_array = Array.from(th_td);
    // console.log('convert to array',th_td_array);
  th_td_array = th_td_array.map((tag) => tag.textContent);
//   console.log(th_td_array);
  result.push(th_td_array);
  //   console.log(result);
}

console.log(`result`, result);

const numberOfItems = result.length;

console.log(`numberOfItems`, numberOfItems);

const numberPerPage = 10;

const pageCount = Math.round(numberOfItems/numberPerPage);

console.log(pageCount);

function move() {
  const currantPage = parseInt(page.innerText); // Parse the text content to an integer
  let listItems = page.querySelectorAll('li');
  console.log(listItems);
  if ( currantPage > 0 && listItems) {
    console.log('The current page number is greater than 1');
    const start = (currantPage - 1) * numberPerPage
    console.log(start);
    const end = start + numberPerPage
    console.log(end);
    // const paginatedList = result.slice(start , end)
  } else {
    console.log('The current page number is not greater than 1 or is not a number.');
  }
}



// // Assuming currantPage holds a reference to a parent element containing <li> elements
// let listItems = currantPage.querySelectorAll('li');

// let listToArray = Array.from(listItems)

// console.log(`listToArray`, listToArray[2]);

// console.log(listItems); 

// // console.log(currantPage);
// const start = (currantPage - 1) * numberPerPage
// // console.log(start);
// const end = start + numberPerPage
// // console.log(end);
// const paginatedList = listToArray.slice(start , end)


// // Select all <li> elements
// // if(listToArray[0] == pageCount) {
// //   console.log('first');
// // }
// // else {
// //   console.log(`not`);
// // }

//     // console.log(currantPage);