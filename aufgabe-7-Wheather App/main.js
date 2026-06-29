const wetterDaten = document.querySelector("#weatherContainer");
const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    ladeWetter(cityName);
})

cityInput.addEventListener("keydown", (event) => {
    const cityName = cityInput.value("Enter");
    ladeWetter(cityName);

})
async function ladeWetter(cityName) {
    if(cityName === ""){
        renderError("Bitte gib eine Stadt ein");
        return;
    }
    searchButton.disabled = true;
    renderLoading();
    try {
        const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=de&format=json`;
        const responseLocation = await fetch(geocodingUrl);
        const dataLocation = await responseLocation.json();
        if (!dataLocation.results || dataLocation.results.length === 0 ){
                renderError("Stadt nicht gefunden.") ;
                return;
        }
        const location = dataLocation.results[0];
        
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
        const responseWetter = await fetch(weatherUrl);
        const dataWetter = await responseWetter.json();
        const current = dataWetter.current;

        renderWetter(current);
    }
    catch(error){
        console.error(error);
        renderError("Es ist ein Netzwerkfehler aufgetreten. Bitte versuche es später erneut.");
    }
    finally{
        searchButton.disabled = false;
    }
    


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
function renderLoading(){
    wetterDaten.innerHTML = "";
    const loadingText = document.createElement("p");
    loadingText.textContent = "Wetter wird geladen...";
    wetterDaten.appendChild(loadingText);
}
