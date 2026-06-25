const produkte = [
    {
        id: 1,
        name: "Laptop",
        kategorie: "Elektronik",
        verfügbar: true,
        bewertungen: [5,4,5,3]
    },
    {
        id: 2,
        name: "Tisch",
        kategorie: "Möbel",
        verfügbar: true,
        bewertungen: [3,4]
    },
    {
        id: 3,
        name: "Handy",
        kategorie: "Elektronik",
        verfügbar: false,
        bewertungen: [5,5,4]
    },
    {
        id: 4,
        name: "Monitor",
        kategorie: "Elektronik",
        verfügbar: true,
        bewertungen: [4,4,5]
    }
];

const topProdukt = produkte.filter((produkt)=>{
    return produkt.kategorie === "Elektronik" && produkt.verfügbar === true;
})
.map((produkt)=>{
    const summe = produkt.bewertungen.reduce((summe, bewertung)=>{
        return summe + bewertung;
    }, 0);
    const durchschnitt = summe / produkt.bewertungen.length;

    return {
        name : produkt.name,
        durchschnitt : durchschnitt
    }
});
console.log(topProdukt);