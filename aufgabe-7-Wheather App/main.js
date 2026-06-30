const wetterDaten = document.querySelector("#weatherContainer");
const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", () => {
    starteSuche();
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        starteSuche();
    }
});

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
        renderWetter(current, location);
    }
    catch(error){
        console.error(error);
        renderError("Es ist ein Netzwerkfehler aufgetreten. Bitte versuche es später erneut.");
    }
    finally{
        searchButton.disabled = false;
    }
    
}

function renderWetter(current, location){
    wetterDaten.innerHTML = "";
    const wetterContainer = document.createElement("div");
    wetterContainer.classList.add("weather-card");
    renderWetterZeile(`📍Stadt: ${location.name}`, wetterContainer);
    renderWetterZeile(`🌡️Temperatur: ${Math.round(current.temperature_2m)} °C`, wetterContainer);
    renderWetterZeile(`Luftfeuchtigkeit: ${current.relative_humidity_2m} %`, wetterContainer);
    renderWetterZeile(`Wind: ${current.wind_speed_10m} km/h`, wetterContainer);
    wetterDaten.appendChild(wetterContainer);
}

function renderError (message){
    wetterDaten.innerHTML = "";
    const messageText = document.createElement("p");
    messageText.textContent = message;
    wetterDaten.appendChild(messageText);

}

function renderWetterZeile (text, wetterContainer){    
    const pElement = document.createElement("p");
    pElement.textContent = text;
    wetterContainer.appendChild(pElement);
    


}

function renderLoading(){
    wetterDaten.innerHTML = "";
    const loadingText = document.createElement("p");
    loadingText.textContent = "Wetter wird geladen...";
    wetterDaten.appendChild(loadingText);
}

function starteSuche (){
    const cityName = cityInput.value.trim();
    ladeWetter(cityName);

}