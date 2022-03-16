const setup = () => {
    tel("De man van An geeft geen hand aan ambetante verwanten");
    telLangsAchter("De man van An geeft geen hand aan ambetante verwanten");
}

const tel = (inputText) => {
    let checkZin = inputText.toLowerCase();
    let amountOfAn = 0;
    let stillGoing = true

    while (stillGoing) {
        if (checkZin.indexOf("an") !== -1) {
            amountOfAn++;
            checkZin = checkZin.substring(checkZin.indexOf("an")+ 2);
        } else {
            stillGoing = false;
        }
    }
    console.log(amountOfAn);
}

const telLangsAchter = (inputText) => {
    let checkZin = inputText.toLowerCase();
    let amountOfAn = 0;
    let stillGoing = true

    while (stillGoing) {
        if (checkZin.lastIndexOf("an") !== -1) {
            amountOfAn++;
            checkZin = checkZin.substring(0, checkZin.lastIndexOf("an"));
        } else {
            stillGoing = false;
        }
    }
    console.log(amountOfAn);
}

window.addEventListener("load", setup);