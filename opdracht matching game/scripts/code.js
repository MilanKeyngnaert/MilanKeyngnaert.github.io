let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6,
    classGedraaideKaart : ""
};



const setup = () => {
    maakSpeelveld();
    maakKaarten();
    verdeelKaarten();
}

const maakSpeelveld = () => {
    let grid = document.getElementById("veld")
    let rows = "";
    let columns = "";

    for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
        columns += "104px"
        if(i !== global.AANTAL_HORIZONTAAL - 1) {
            columns += " ";
        }
    }
    grid.style.gridTemplateColumns = columns;

    for (let j = 0; j < global.AANTAL_VERTICAAL; j++) {
        rows += "204px"
        if(j !== global.AANTAL_VERTICAAL - 1) {
            rows += " ";
        }
    }
    grid.style.gridTemplateRows = rows;
    grid.style.width = global.AANTAL_HORIZONTAAL * 104 + "px";
}

const maakKaarten = () => {
    let grid = document.getElementById("veld");
    grid.innerHTML = "<img src=\"images/kaart1.png\" class=\"kaart1\"><img src=\"images/kaart2.png\" class=\"kaart2\"><img src=\"images/kaart3.png\" class=\"kaart3\"><img src=\"images/kaart4.png\" class=\"kaart4\"><img src=\"images/kaart5.png\" class=\"kaart5\"><img src=\"images/kaart6.png\" class=\"kaart6\"><img src=\"images/kaart1.png\" class=\"kaart1\"><img src=\"images/kaart2.png\" class=\"kaart2\"><img src=\"images/kaart3.png\" class=\"kaart3\"><img src=\"images/kaart4.png\" class=\"kaart4\"><img src=\"images/kaart5.png\" class=\"kaart5\"><img src=\"images/kaart6.png\" class=\"kaart6\">";
}

const verdeelKaarten = () => {
    let verdeelstapel = document.getElementsByTagName("img");
    let indexen = [];
    draaiAlleKaarten();
    for (let k = 0; k < global.AANTAL_KAARTEN * 2; k++) {
        verdeelstapel[k].addEventListener("click", draaiKaart);
        let indexZoeken = true;
        while (indexZoeken) {
            let index = Math.floor(Math.random() * verdeelstapel.length);
            if (indexen.indexOf(index) === -1) {
                indexen.push(index);
                verdeelstapel[index].style.gridRowStart = "" + (Math.floor(k / (global.AANTAL_VERTICAAL + 1)) + 1);
                verdeelstapel[index].style.gridColumnStart = "" + (k % (global.AANTAL_VERTICAAL + 1) + 1);
                indexZoeken = false;
            }
        }
    }
}

const draaiAlleKaarten = () => {
    let grid = document.getElementById("veld");
    let kaarten = document.getElementsByTagName("img");
    for (let l = 0; l < kaarten.length; l++) {
        kaarten[l].setAttribute("src", "images/achterkant.png")
    }
    global.classGedraaideKaart = "";
    grid.style.border = "transparent 5px solid";
    grid.setAttribute("class", "clickable");
    grid.style.cursor = "default";
}

const verwijderDubbele = () => {
    let grid = document.getElementById("veld")
    let kaarten = document.getElementsByTagName("img");
    for (let m = 0; m < kaarten.length; m++) {
        if (kaarten[m].getAttribute("class") === global.classGedraaideKaart) {
            grid.removeChild(kaarten[m]);
        }
    }
    global.classGedraaideKaart = "";

    kaarten = document.getElementsByTagName("img");//voor een of andere reden wordt de allerlaatste kaart niet verwijderd
    if (kaarten.length === 1)
    {
        grid.removeChild(grid.lastElementChild);
    }
    grid.style.border = "transparent 5px solid";
    grid.setAttribute("class", "clickable");
    grid.style.cursor = "default";
}

const draaiKaart = () => {
    let grid = document.getElementById("veld");
    if (grid.getAttribute("class") === "clickable") {
        let kaart = event.target;
        if (kaart.getAttribute("src") === "images/achterkant.png") {

            kaart3dDraaien(kaart, "up");

            if (global.classGedraaideKaart !== "") {

                if (global.classGedraaideKaart === kaart.getAttribute("class")) {
                    grid.style.border = "green 5px solid";
                    setTimeout(verwijderDubbele, 1500);
                } else {
                    grid.style.border = "red 5px solid";
                    setTimeout(draaiFouteKaarten, 1500);
                }
                grid.setAttribute("class", "unclickable");
                grid.style.cursor = "wait";
            } else {
                global.classGedraaideKaart = kaart.getAttribute("class");
            }
        }
    }
}





//**********************************************************************************************************************





const controle = () => {
    let grid = document.getElementById("veld");
    let kaarten = document.getElementsByTagName("img");
    let nextGuessPossible = true;
    for (let q = 0; q < kaarten.length; q++) {
        let kaart = kaarten[q];
        if (kaart.getAttribute("src") !== "images/achterkant.png") {
            nextGuessPossible = false;
            q = kaarten.length;
        }

        if (kaart.offsetWidth !== 104) {
            nextGuessPossible = false;
            q = kaarten.length;
        }
    }

    if (nextGuessPossible) {
        grid.style.border = "transparent 5px solid";
        grid.setAttribute("class", "clickable");
        grid.style.cursor = "default";
        global.classGedraaideKaart = "";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kaart3dDraaien(kaart, side) {
    let draaiFactor = 2;
    let breedte = kaart.offsetWidth - 4;

    for (let n = breedte; n > 0; n = n - draaiFactor) {
        kaart.style.width = kaart.offsetWidth - 4 - draaiFactor + "px";
        await sleep(1);
    }

    if (side === "up") {
        kaart.setAttribute("src", "images/" + kaart.getAttribute("class") + ".png");
    } else if (side === "down") {
        kaart.setAttribute("src", "images/achterkant.png");
    }

    breedte = kaart.offsetWidth - 4;

    for (let o = breedte; o < 100; o = o + draaiFactor) {
        kaart.style.width = kaart.offsetWidth - 4 + draaiFactor + "px";
        await sleep(1);
    }

    controle();
}

const draaiFouteKaarten = () => {
    let kaarten = document.getElementsByTagName("img");
    for (let p = 0; p < kaarten.length; p++) {
        if (kaarten[p].getAttribute("src") !== "images/achterkant.png") {
            kaart3dDraaien(kaarten[p], "down");
        }
    }
}

window.addEventListener("load", setup);