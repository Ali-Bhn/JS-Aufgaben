const wetterDaten = document.querySelector("#weatherContainer");
const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", ()=>{
    const cityName = cityInput.value.trim();
    ladeWetter(cityName);
})
// const url = "...latitude=52.52...";
async function ladeWetter(cityName) {
    if(cityName === ""){
        renderError("Bitte gib eine Stad ein!!!");
        return;
    };
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=de&format=json`;
    const responseLocation = await fetch(geocodingUrl);
    const dataLocation = await responseLocation.json();
    console.log(dataLocation);
    if ( !dataLocation.results||dataLocation.results.length === 0 ){
            renderError("Stadt nicht gefunden!!!") ;
            return;
    };
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
    renderWetterZeile(`Temperatur: ${current.temperature_2m} °C`)
    renderWetterZeile(`Luftfeuchtigkeit: ${current.relative_humidity_2m} %`);
    renderWetterZeile(`Wind: ${current.wind_speed_10m} km/h`);

}

function renderError (message){
    wetterDaten.innerHTML = "";
    const messageText = document.createElement("p");
    messageText.textContent = message;
    wetterDaten.appendChild(messageText);

}

function renderWetterZeile (text){
    const pElement = document.createElement("p");
    pElement.textContent = text;
    wetterDaten.appendChild(pElement);

}