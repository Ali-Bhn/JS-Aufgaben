const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask (){
    if (inputBox.value === ''){
        alert("Du musst heir etwas schreiben!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }

}