fetch('https://restcountries.com/v3.1/all')

.then( data => data.json())

.then( result => {
    console.log(`result`, result);
    let container = document.getElementById('container')
    
    let rest = result.map(data => data.capital)
    console.log(rest);

rest.forEach(val => {
    console.log(val);
    if(val.capital == 'india'){
        console.log( 'un',val.capital);
    }
    // console.log(`val`, val.name.nativeName.eng);
    let div = document.createElement('div')
    div.setAttribute('class','card');
    div.style.width = '30%';

    let card = `
    
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>

    `
    div.innerHTML = card;

    container.appendChild(div)
})



})