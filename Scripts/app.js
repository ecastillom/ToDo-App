function addToDo(){
    //Read the input
    
    var text = $('#txtTask').val();
    var x=0;

    if(text!=""){
        document.getElementById("txtTask").value = "";
    
        console.log(text);
    
        var li = `<li id="${x}"><button onclick="deleteToDo('${x}');">-</button>&nbsp;&nbsp;&nbsp;${text}</li>`;
    
        $("#pending-list").append(li);
    }
    else{
        alert("No Empty Value");
    }

    $("#txtTask").focus();

}

function deleteToDo(id){
    $("#" + id).remove();

}

function init(){
    console.log("Init the ToDo App");
    // $("#btnAdd").click(addToDo);
}

window.onload = init;