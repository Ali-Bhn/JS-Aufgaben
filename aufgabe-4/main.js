const kunden = [
    {
        name: "Ali",
        stadt: "Berlin",
        premium: true
    },
    {
        name: "Sara",
        stadt: "Hamburg",
        premium: false
    },
    {
        name: "Tom",
        stadt: "Berlin",
        premium: true
    }
];

const button = document.querySelector("#button");
button.addEventListener("click", ()=>{
    const container = document.querySelector("#container");
    const premiumKunden = kunden.filter((kunde) =>{
        return kunde.premium === true;
    });
    premiumKunden.forEach((kunde)=>{
        const div = document.createElement("div");
        div.textContent = `${kunde.name} aus ${kunde.stadt}`;
        container.appendChild(div);
        
    });
});