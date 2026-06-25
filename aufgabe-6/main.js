const input = document.querySelector("#todoInput");
const button = document.querySelector("#addButton");
const liste = document.querySelector("#todoListe");
todos =[];

button.addEventListener("click", ()=>{
    const text = input.value.trim();
    if (text === ""){
        return;
    };
    const neuesTodo = {
        id : Date.now(),
        text,
        verfügbar:false
    };
    todos.push(neuesTodo);
    renderTodos();
    input.value = "";

});
function renderTodos(){
    liste.innerHTML= "";
    todos.forEach((todo)=>{
        const li = document.createElement("li");
        li.textContent = todo.text;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click",()=>{
            todos =todos.filter((e)=>{
                return e.id !== todo.id;
                
            });
            renderTodos();
        });
        li.appendChild(deleteButton);
        liste.appendChild(li);
    });
};





// const input = document.querySelector("#todoInput");
// const button = document.querySelector("#addButton");
// const liste = document.querySelector("#todoListe");

// let todos = [];

// button.addEventListener("click", ()=>{
//     const text = input.value.trim();
//     if (text === ""){
//         return;
//     };
//     const neuesTodo = {
//         id : Date.now(),
//         text,
//         erledigt: false
//     }
//     todos.push(neuesTodo);
//     renderTodos();
//     input.value = "";
    
//     });

// function renderTodos(){

//         liste.innerHTML= "";
//         todos.forEach((todo)=>{
//             const li = document.createElement("li");
//             li.textContent = todo.text;

//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "❌"
            
//             deleteButton.addEventListener("click", ()=>{
//                 todos =todos.filter((element)=>{
//                     return element.id !== todo.id;
//                 });
//                 renderTodos();
//             });
//             li.appendChild(deleteButton);
//             liste.appendChild(li);
//         });  
//     };






