fetch("https://api.openweathermap.org/data/2.5/weather?q=salem&appid=9b3abd72af5e8ee4c215adb53b59b0e5")
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

    console.log( data);

    

    // for(var i=0;i< data.length;i++) {
    //     console.log(data[i]);
    // }
  })