const setup = () => {
    window.alert("Dit is een mededeling");
    console.log(window.confirm("Weet u het zeker?"));
    console.log(window.prompt("Wat is uw naam", "onbekend"));

    console.log("de value is true als de gebruiker op 'ok' drukt en false als de gebruiker op 'annuleren' drukt");
    console.log("de value is gelijk aan de tekst die de gebruiker ingetypt heeft");
    console.log("de value is null");
}

window.addEventListener('load',setup);