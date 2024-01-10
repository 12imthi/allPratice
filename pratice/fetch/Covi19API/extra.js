let dataSet; // Assuming dataSet is defined and populated elsewhere
let state;


function total() {
    const demo = document.getElementById("demo");
    demo.innerHTML = '';
// console.log(`state`, state);
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");
    const stateValue = document.querySelector(".state").value;
    console.log(stateValue);

    const startDateString = startInput.value;
    const endDateString = endInput.value;

    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    let count = 0;

    for (let i in dataSet) {
        const currentDate = new Date(i);
        if (currentDate >= startDate && currentDate < endDate) {
            let div = document.createElement("div");
            div.textContent = `tolalCovid19  : day${++count}  =   ${dataSet[i].total.confirmed}`;
            demo.appendChild(div);
            console.log(`i`, dataSet[i].total.confirmed);
        }
    }
}


const res = fetch("https://data.covid19india.org/v4/min/timeseries.min.json");

res
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    
for(let i in data) {
     state = i;
    console.log(state);
}

    if (data && data["TN"] && data["TN"].dates) {
      const datesTN = data["TN"].dates;
      console.log(`datesTN`, datesTN);
      dataSet = data["TN"].dates;
      //   console.log(`total`, total);
      //   }
      // const startDate = '2020-03-10';

      // const endDate = '2020-04-10';
      //   if (datesTN[startDate]) {
      //     const dataForstartDate = datesTN[startDate];
      //     // const dataForendDate = datesTN[endDate];
      //     console.log(`Data for ${startDate} in TN:`, dataForstartDate);
      //     // console.log(`Data for ${endDate} in TN:`, dataForendDate);
      //   } else {
      //     console.log(`No data found for  in TN.`);
      //   }
    }
  })
  .catch((err) => {
    console.log("API call failed:", err);
  });