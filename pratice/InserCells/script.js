function myFunction() {
    var table = document.getElementById('tableId');
    var table1 = document.getElementById('tableId1');

    console.log(`table`, table);
    console.log(`table1`, table1);

    var row = table.insertRow(0);
    var row1 = table1.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row1.insertCell(0);
    var cell4 = row1.insertCell(1);

    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
}
