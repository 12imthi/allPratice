// use fetch libery

// https://restcountries.com/v3.1/all

fetch("https://restcountries.com/v3.1/all")
// .then(async (response) => {
//     console.log('data fetched' );
//     const data = await response.json();
//     console.log(data.length-1);
// })

  .then((response) => {
    console.log(`response`, response);
    console.log("data fetched");
    // console.log( response.json());
    return response.json();
  })
  .catch(() => {
    console.log("api call failed");
  })
  .then((data) => {

    console.log( data[0]);

    const flag = data.map( e => e.flag);

    console.log(`flag`, flag);

    // for(var i=0;i< data.length;i++) {
    //     console.log(data[i]);
    // }
  })
