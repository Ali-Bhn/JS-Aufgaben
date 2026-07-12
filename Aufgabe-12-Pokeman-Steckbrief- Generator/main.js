const form = document.querySelector(".pokemon-generator");
const input = document.getElementById("text-feld");
// const apiUrl = "https://pokeapi.co/api/v2/ability/{id or name}"

// console.log(input.value);

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const wert = input.value.toLowerCase().trim();
    pokemon(wert);
})
async function pokemon (name) {
    console.log("Der Name ist:", name);
    console.log("Die URL ist:", `https://pokeapi.co/api/v2/pokemon/${name}`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok){
        console.log("FEHLER")
        return
    }
    const daten = await response.json();
    console.log(daten)
}