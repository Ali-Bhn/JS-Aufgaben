const kunden = [
    {
        name:"Ali",
        stadt:"Berlin"
    },
    {
        name:"Sara",
        stadt:"Hamburg"
    },
    {
        name:"Tom",
        stadt:"Berlin"
    }
];

const input = document.querySelector("#search");
const container = document.querySelector("#container");
input.addEventListener("input", (e)=>{
    const suchText = e.target.value;
    const gefilterteKunde = kunden.filter((kunde)=>{
        return kunde.name.toLowerCase().includes(suchText.toLowerCase());

    });
    container.innerHTML= "";
    gefilterteKunde.forEach((kunde)=>{
        const div = document.createElement("div");
        div.textContent = `${kunde.name} - ${kunde.stadt}`;
        container.appendChild(div);
    });
});


