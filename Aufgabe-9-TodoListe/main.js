const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorMsg = document.getElementById("error-msg");


inputBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        AddTask();
    }
})
inputBox.addEventListener("input", () => {
    errorMsg.classList.remove("show");    
})

function AddTask (){
    if (inputBox.value.trim() === ''){
        errorMsg.classList.add("show");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showListe(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showListe();
