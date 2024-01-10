// const fetchWeather = async () => {
//     const url = 'https://restcountries.com/v3.1/al';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'f246ebef0dmsh988b860aabe2f2bp1b6283jsn49e7019dfa35',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(JSON.parse(result));
        
//         for(var i=0;i < result.length;i++) {
//             console.log(result[i]);
//         }
//         // console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

   
// };

// fetchWeather();


const myPromise = new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve('susses')
    }, );
});
myPromise.then(result => {
    console.log(`result`, result);
})
console.log(`myPromise`, myPromise);