function AddRow2() {
    var table = document.getElementById("Income");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text">';
    cell2.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
    cell3.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
    i++;
}

function RemoveRow2() {
    i--;
    document.getElementById("Income").deleteRow(i);
    
}

function AddRow3() {
    var table = document.getElementById("Income");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text">';
    cell2.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
    cell3.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
}

function RemoveRow3() {
    document.getElementById("Income").deleteRow(-1);
}