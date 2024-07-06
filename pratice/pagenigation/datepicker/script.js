
 function add1Day1Hour(date) {
   
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() + 1);

    
    newDate.setHours(newDate.getHours() + 1);

    return newDate;
}


const fromDatepicker = document.getElementById('fromDatepicker');
const toDatepicker = document.getElementById('toDatepicker');


fromDatepicker.addEventListener('change', function(event) {

    const fromDate = new Date(event.target.value);


    const toDate = add1Day1Hour(fromDate);

    console.log('to ', toDate);
    

    const year = toDate.getFullYear();
    console.log(year);
    const month = String(toDate.getMonth() + 1).padStart(2, '0');
    console.log(month);
    const day = String(toDate.getDate()).padStart(2, '0');
    const hours = String(toDate.getHours()).padStart(2, '0');
    const minutes = String(toDate.getMinutes()).padStart(2, '0');

   
    const toDateString = `${year}-${month}-${day}T${hours}:${minutes}`;

    console.log(toDateString);

    
    toDatepicker.value = toDateString;

    console.log(toDatepicker);
});