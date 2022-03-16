const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", string);
}

const string = () => {
    let p = document.getElementById("p");
    let tekst = document.getElementById("tekst")
    let nieuwetekst = "";

    for (let i = 0; i < tekst.value.length; i++) {
        nieuwetekst += tekst.value.charAt(i);
        nieuwetekst += " ";
    }

    console.log(nieuwetekst);
}

window.addEventListener("load", setup);