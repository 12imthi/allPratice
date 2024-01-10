console.log(fetch('http://api.alquran.cloud/v1/quran/en.asad'));
let quotes = new Promise(function(myResolve, myReject) {
    fetch('http://api.alquran.cloud/v1/quran/en.asad')
.then((response) => response.json()) // Parse the json data from the response.
.then((data) => {
    myResolve( data.data);
    myReject('error');
    
} )})

function searchImages() {
    quotes.then(function (value) {
        console.log( value);
        var qut = Object.entries( value);
        console.log(qut[0][1][0].englishName); 
    
        var filltering  = qut.filter(e => e[0][1][0]);
        console.log(filltering);
    
        for(var i=0;i< qut.length;i++) {
            console.log('name : ' + qut[i][0]);
        }
    
    })
}


// .catch(function(error) {
//     // Handle errors if the Promise is rejected
//     console.error(error);
// });

    


