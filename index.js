var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["position "] = document.getElementById("position").value;
    formData["office"] = document.getElementById("office").value;
    formData["age"] = document.getElementById("age").value;
    formData["start date "] = document.getElementById("start date").value;
    formData["salery"] = document.getElementById("salery").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["mobile no."] = document.getElementById("mobile no.").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.position;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.office;
     cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.startdate;
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.salery;
    cell8 = newRow.insertCell(7);
		cell8.innerHTML = data.gender;
     cell9 = newRow.insertCell(8);
		cell9.innerHTML = data.mobileno;
    cell10 = newRow.insertCell(9);
		cell10.innerHTML = data.address;
    
    
    cell11.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("position").value = selectedRow.cells[2].innerHTML;
    document.getElementById("office").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("start date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("salery").value = selectedRow.cells[6].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[7].innerHTML;
    document.getElementById("mobile no.").value = selectedRow.cells[8].innerHTML;
    document.getElementById("address").value = selectedRow.cells[9].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.position;
    selectedRow.cells[3].innerHTML = formData.office;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.startdate;
    selectedRow.cells[6].innerHTML = formData.salery;
    selectedRow.cells[7].innerHTML = formData.gender;
    selectedRow.cells[8].innerHTML = formData.mobileNo;
    selectedRow.cells[9].innerHTML = formData.address;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("position").value = '';
    document.getElementById("office").value = '';
    document.getElementById("age").value = '';
    document.getElementById("start date").value = '';
    document.getElementById("salery").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("mobile no.").value = '';
    document.getElementById("address").value = '';
    selectedRow = null;

    function submitForm() {

    }
}
