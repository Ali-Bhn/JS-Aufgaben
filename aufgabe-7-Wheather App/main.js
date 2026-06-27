let wetterDaten = document.querySelector("#weatherContainer");

const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,wind_speed_10m";
async function ladeWetter() {
   const response = await fetch(url);
   const data = await response.json();
   const current = data.current;
   renderWetter(current);

}
function renderWetter(current){
    const p_1 = document.createElement("p");
    const p_2 = document.createElement("p");
    const p_3 = document.createElement("p");
    p_1.textContent = `Temperatur: ${current.temperature_2m} °C`;
    p_2.textContent = `Luftfeuchtigkeit: ${current.relative_humidity_2m} %`;
    p_3.textContent = `Wind: ${current.wind_speed_10m} km/h`;
    wetterDaten.appendChild(p_1);
    wetterDaten.appendChild(p_2);
    wetterDaten.appendChild(p_3);

}
ladeWetter();

