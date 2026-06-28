const wetterDaten = document.querySelector("#weatherContainer");

// const url = "...latitude=52.52...";
async function ladeWetter(cityName) {
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=de&format=json`;
    const responseLocation = await fetch(geocodingUrl);
    const dataLocation = await responseLocation.json();
    const location = dataLocation.results[0];

    
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const responseWetter = await fetch(weatherUrl);
    const dataWetter = await responseWetter.json();
    console.log(dataWetter)
    const current = dataWetter.current
    console.log(location);
    console.log(location.name);
    console.log(location.latitude);
    console.log(location.longitude);
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
ladeWetter("berlin");

