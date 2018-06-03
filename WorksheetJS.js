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
    cell1.innerHTML = '<div id="AccountTitle"><span contenteditable="true">Account</span></div>';
    cell2.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell3.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell4.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell5.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell6.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell7.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell8.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell9.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell10.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
    cell11.innerHTML = '<div>$<span contenteditable="true">0.00</span></div>';
}

function RemoveRow() {
    document.getElementById("myTable").deleteRow(-1);
}