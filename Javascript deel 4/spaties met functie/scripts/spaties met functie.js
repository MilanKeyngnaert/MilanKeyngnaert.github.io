const setup = () => {
    let knop = document.getElementById("knop");
    let tekst = document.getElementById("tekst")
    maakMetSpaties(tekst.value);
    knop.addEventListener("click", setup);
}

const maakMetSpaties = (inputText) => {
    let nieuwetekst = "";
    for (let i = 0; i < inputText.length; i++) {
        nieuwetekst += inputText.charAt(i);
        nieuwetekst += " ";
    }
    console.log(nieuwetekst);
}

window.addEventListener("load", setup);