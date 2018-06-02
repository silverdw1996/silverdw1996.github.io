function AddRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    cell1.innerHTML = '<input type="text" />';
    cell2.innerHTML = '$<input type="number" />';
    cell3.innerHTML = '$<input type="number" />';
    cell4.innerHTML = '$<input type="number" />';
    cell5.innerHTML = '$<input type="number" />';
    cell6.innerHTML = '$<input type="number" />';
    cell7.innerHTML = '$<input type="number" />';
    cell8.innerHTML = '$<input type="number" />';
    cell9.innerHTML = '$<input type="number" />';
    cell10.innerHTML = '$<input type="number" />';
    cell11.innerHTML = '$<input type="number" />';
}

function RemoveRow() {
    document.getElementById("myTable").deleteRow(-1);
}