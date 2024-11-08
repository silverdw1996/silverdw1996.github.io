function AddRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text" id="Account">';
    cell2.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
    cell3.innerHTML = '<div><span contenteditable="true">$0.00</span></div>';
}

function RemoveRow() {
    document.getElementById("myTable").deleteRow(-1);
}