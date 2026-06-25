const input = document.querySelector("#todoInput");
const button = document.querySelector("#addButton");
const liste = document.querySelector("#todoListe");

let todos = [];

button.addEventListener("click", ()=>{
    const text = input.value.trim();
    if (text === ""){
        return;
    };
    const neuesTodo = {
        id : Date.now(),
        text,
        erledigt: false
    }
    todos.push(neuesTodo);

    liste.innerHTML = "";

    todos.forEach((todo)=>{
        const li = document.createElement("li");
        li.textContent = `${todo.text}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"

        li.appendChild(deleteButton);
        liste.appendChild(li);
        
        deleteButton.addEventListener("click", ()=>{
            todos = todos.filter((element) => {
                return element.id !== todo.id;
            });
            li.remove();
            
        });
        input.value = "";
    });
});



