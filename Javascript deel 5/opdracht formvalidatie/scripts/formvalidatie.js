const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerKinderen();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {//mag niet langer dan 30 zijn
        txtVoornaam.className="invalid";
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className="";
        errVoornaam.innerHTML = "";
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();

    if (familienaam.length === 0) {//mag niet leeg zijn
        txtFamilienaam.className = "invalid";
        errFamilienaam.innerHTML = "verplicht veld";
    } else if (familienaam.length > 50) {//mag niet langer dan 50 zijn
        txtFamilienaam.className = "invalid";
        errFamilienaam.innerHTML = "max. 50 karakters";
    } else {
        txtFamilienaam.className = "";
        errFamilienaam.innerHTML = "";
    }
}

const valideerGeboortedatum = () => {
    let txtGeboortedatum= document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();

    if (geboortedatum.length === 0) {//mag niet leeg zijn
        txtGeboortedatum.className = "invalid";
        errGeboortedatum.innerHTML = "verplicht veld";
    } else if (geboortedatum.charAt(4) !== "-" || geboortedatum.charAt(7) !== "-" || geboortedatum.length !== 10) {//moet juiste formaat zijn
        txtGeboortedatum.className = "invalid";
        errGeboortedatum.innerHTML = "formaat is niet jjjj‐mm‐dd";
    } else if (!isGetal(geboortedatum.slice(0, 4)) || !isGetal(geboortedatum.slice(5, 7)) || !isGetal(geboortedatum.slice(8))) {//waardes tussen de -'en  moeten getallen zijn
        //de voorwaardes in deze if kunnen bij die van de if erboven, ik heb dit niet gedaan omdat dit leesbaarder is voor mij :)
        txtGeboortedatum.className = "invalid";
        errGeboortedatum.innerHTML = "formaat is niet jjjj‐mm‐dd";
    } else {
        txtGeboortedatum.className = "";
        errGeboortedatum.innerHTML = "";
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if (email.length === 0) {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "verplicht veld";
    } else if (email.length >= 3){//er moet exact 1 @-teken zijn met minstens er 1 teken voor en na, dus de lengte is minstens 3
        let count = 0;
        for (let i = 1; i < email.length - 1; i++) {//controleren of er een exact 1 @-tekenn is tussen het eerste en laatste teken
            if (email.charAt(i) === "@") {
                count++;
            }
        }
        if (count !== 1) {
            txtEmail.className = "invalid";
            errEmail.innerHTML = "geen geldig email adres";
        } else {
            txtEmail.className = "";
            errEmail.innerHTML = "";
        }
    } else {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "geen geldig email adres";
    }
}

const valideerKinderen = () => {
    let txtKinderen = document.getElementById("txtKinderen");
    let errKinderen = document.getElementById("errKinderen");
    let kinderen = txtKinderen.value.trim();

    if (!isGetal(kinderen)) {//moet een getal zijn
        txtKinderen.className = "invalid";
        errKinderen.innerHTML = "is geen positief getal";
    } else if (parseInt(kinderen) < 0) {//moet een positief getal zijn
        txtKinderen.className = "invalid";
        errKinderen.innerHTML = "is geen positief getal";
    } else if (parseInt(kinderen) > 99) {//moet kleiner dan 99 zijn
        txtKinderen.className = "invalid";
        errKinderen.innerHTML = "is te vruchtbaar";
    } else  {
        txtKinderen.className = "";
        errKinderen.innerHTML = "";
    }
}

window.addEventListener("load", setup);