let personen = [];
let geselecteerdePersoon = null;

const bewaarBewerktePersoon = () => {
    valideer();
    let amountOfInvalid = document.getElementsByClassName("invalid");
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    if (amountOfInvalid.length === 0) {
        if (geselecteerdePersoon === null) {
            let persoon = {id: (personen.length + 1),voornaam: voornaam.value, familienaam: familienaam.value, geboorteDatum: geboortedatum.value, Email: email.value, aantalKinderen: aantalKinderen.value};
            personen.push(persoon);

            let list = document.getElementById("lstPersonen");
            let nieuwPersoon = document.createElement("option");
            nieuwPersoon.setAttribute("value", persoon.voornaam + " " + persoon.familienaam);
            nieuwPersoon.setAttribute("class", "" + personen.length);
            list.appendChild(nieuwPersoon);
            nieuwPersoon.innerText = persoon.voornaam + " " + persoon.familienaam;

            nieuwPersoon.addEventListener("click", geefInfo)
        } else {
            geselecteerdePersoon.voornaam = voornaam.value
            geselecteerdePersoon.familienaam = familienaam.value;
            geselecteerdePersoon.geboorteDatum = geboortedatum.value;
            geselecteerdePersoon.email = email.value;
            geselecteerdePersoon.aantalKinderen = aantalKinderen.value;

            let verzameling = document.getElementsByClassName(geselecteerdePersoon.id);
            verzameling[0].innerText = voornaam.value + " " + familienaam.value;
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    voornaam.value = "";
    familienaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalKinderen.value = "";

    geselecteerdePersoon = null;
};

const geefInfo = () => {
    let optie = event.target;
    let persoon = personen[optie.getAttribute("class") - 1]
    console.log(persoon);
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    voornaam.value = persoon.voornaam;
    familienaam.value = persoon.familienaam;
    geboortedatum.value = persoon.geboorteDatum;
    email.value = persoon.Email;
    aantalKinderen.value = persoon.aantalKinderen;

    geselecteerdePersoon = persoon;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
};

window.addEventListener("load", setup);