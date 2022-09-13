var item = document.getElementById("item");
var display = document.getElementById('display');

function addItems(){

    if(item.value){
        // console.log(item.value,"here value it is")
    var btnDiv = document.createElement("div");        // MAIN BUTTON DIV
    var editIcon = document.createElement("i");        // EDITE ICON
    var deleteIcon = document.createElement("i");      // DELETE ICON
    var btnEdit = document.createElement("button");   //  EDIT BUTTON
    var btnDelete = document.createElement("button"); //  DELETE BUTTON
// HERE BUTTON DIV AND DELETE AND EDIT BUTTON CLASSES SET
btnDiv.setAttribute("class","col-3 col-sm-3 d-flex align-items-start justify-content-end m-0 pr-1");
editIcon.setAttribute("class","fa-solid fa-pen px-1");
deleteIcon.setAttribute("class","fa-solid fa-trash-can px-1");
btnEdit.setAttribute("class","btn btn-outline-success mr-2 px-1 px-md-2 px-lg-2 text-lead font-weight-lighter");
btnDelete.setAttribute("class","btn btn-outline-danger px-1 px-md-2 w-45 px-lg-2 text-lead font-weight-lighter");
btnEdit.setAttribute("onclick","edit(this)");
btnDelete.setAttribute("onclick","deleteItem(this)");


// EDIT AND DELETE ICON MAKE CHILDREN OF HIS PARENT 
btnEdit.appendChild(editIcon);
btnDelete.appendChild(deleteIcon);

// MAKE BUTTON DIV PARENT AND EDIT AND DELETE BUTTON MAKE HIS CHILDREN
btnDiv.appendChild(btnEdit);
btnDiv.appendChild(btnDelete);





//// CREATE MAIN ROW AND IT'S CONTENT 

   var mainRow = document.createElement("div"); // MAIN ROW WHERE LIST SHOW
   var paraDiv = document.createElement("div"); // MAIN PARAGRAPH DIV
   var liSpan = document.createElement("span");  // MAIN CONTENT WRITTEN 
   var spanContent = document.createTextNode(item.value);


// HERE MAIN ROW ATTRIBUTE CLASSES    AND     FIRST CONTENT DIV CLASSES
mainRow.setAttribute("class","form-row d-flex align-items-center wrap-nowrap rounded bck-trans mb-1 py-1 p-0 m-0");
paraDiv.setAttribute("class","col-9 col-sm-9 m-0 pr-2 text-break");
liSpan.setAttribute("class","text-break text-justify font-weight-bold text-light");


// MAKE CHILD APPEND ON HIS PARENT OF ALL CHILDREN
   liSpan.appendChild(spanContent);
   paraDiv.appendChild(liSpan);
   mainRow.appendChild(paraDiv);
   mainRow.appendChild(btnDiv); 
   display.appendChild(mainRow);


   
    // console.log(item.value)
    item.value = "";
    }else{
        alert("Please Enter value first Don't Add Empty string");
        document.getElementById("item").focus();
    }
}
function deleteAll(e){
    display.innerHTML="";

}
function deleteItem(e){
    e.parentNode.parentNode.remove();
console.log(e)
}
function edit(e){
    var preValue = e.parentNode.parentNode.firstChild.firstChild
var editValue = prompt("Enter Updated value",preValue.innerHTML);
if(editValue){
    preValue.innerHTML = editValue;
}else{
    preValue.innerHTML = preValue.innerHTML;

}
// console.log(e.parentNode.parentNode.firstChild.firstChild)
// console.log(e.parentNode.parentNode.firstChild.firstChild.innerHTML)
}