const wetterDaten = document.querySelector("#weatherContainer");

const url = "...latitude=52.52...";
async function ladeWetter() {
   const response = await fetch(url);
   const data = await response.json();
   const current = data.current;
   renderWetter(current);

}
function renderWetter(current){
    wetterDaten.innerHTML = "";
    const temperatureElement = document.createElement("p");
    const humidityElement = document.createElement("p");
    const windElement = document.createElement("p");
    temperatureElement.textContent = `Temperatur: ${current.temperature_2m} °C`;
    humidityElement.textContent = `Luftfeuchtigkeit: ${current.relative_humidity_2m} %`;
    windElement.textContent = `Wind: ${current.wind_speed_10m} km/h`;
    wetterDaten.appendChild(temperatureElement);
    wetterDaten.appendChild(humidityElement);
    wetterDaten.appendChild(windElement);

}
ladeWetter();

