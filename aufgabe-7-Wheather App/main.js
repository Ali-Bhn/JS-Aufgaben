const wetter = {
    city: "Berlin",
    temperature: 24,
    humidity: 61,
    wind: 15,
    description: "Leicht bewölkt"
};

let weather = document.querySelector("#weatherContainer");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
p1.textContent =`City: ${wetter.city}`;
p2.textContent=`Temperatur: ${wetter.temperature} °C`;
p3.textContent=`Feuchtigkeit: ${wetter.humidity} %`;
p4.textContent=`Wind: ${wetter.wind} km/h`;
p5.textContent=`beschreibung: ${wetter.description}`;
weather.appendChild(p1);
weather.appendChild(p2);
weather.appendChild(p3);
weather.appendChild(p4);
weather.appendChild(p5);