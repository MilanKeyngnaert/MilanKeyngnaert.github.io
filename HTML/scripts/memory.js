let globalB = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 4,
    AANTAL_KAARTEN : 8,
    classGedraaideKaart : ""
};



const setupB = () => {
    maakSpeelveld();
    maakKaarten();
    verdeelKaarten();
}

const maakSpeelveld = () => {
    let grid = document.getElementById("memoryField")
    let rows = "";
    let columns = "";

    for (let i = 0; i < globalB.AANTAL_HORIZONTAAL; i++) {
        columns += "auto"
        if(i !== globalB.AANTAL_HORIZONTAAL - 1) {
            columns += " ";
        }
    }
    grid.style.gridTemplateColumns = columns;

    for (let j = 0; j < globalB.AANTAL_VERTICAAL; j++) {
        rows += "auto"
        if(j !== globalB.AANTAL_VERTICAAL - 1) {
            rows += " ";
        }
    }
    grid.style.gridTemplateRows = rows;
}

const maakKaarten = () => {
    let grid = document.getElementById("memoryField");
    grid.innerHTML = "<img src=\"images/memory/kaart1.png\" class=\"kaart1\" alt='kaart'><img src=\"images/memory/kaart2.png\" class=\"kaart2\" alt='kaart'> <img src=\"images/memory/kaart3.png\" class=\"kaart3\" alt='kaart'> <img src=\"images/memory/kaart4.png\" class=\"kaart4\" alt='kaart'> <img src=\"images/memory/kaart5.png\" class=\"kaart5\" alt='kaart'> <img src=\"images/memory/kaart6.png\" class=\"kaart6\" alt='kaart'> <img src=\"images/memory/kaart7.png\" class=\"kaart7\" alt='kaart'> <img src=\"images/memory/kaart8.png\" class=\"kaart8\" alt='kaart'> <img src=\"images/memory/kaart1.png\" class=\"kaart1\" alt='kaart'> <img src=\"images/memory/kaart2.png\" class=\"kaart2\" alt='kaart'> <img src=\"images/memory/kaart3.png\" class=\"kaart3\" alt='kaart'> <img src=\"images/memory/kaart4.png\" class=\"kaart4\" alt='kaart'> <img src=\"images/memory/kaart5.png\" class=\"kaart5\" alt='kaart'> <img src=\"images/memory/kaart6.png\" class=\"kaart6\" alt='kaart'> <img src=\"images/memory/kaart7.png\" class=\"kaart7\" alt='kaart'> <img src=\"images/memory/kaart8.png\" class=\"kaart8\" alt='kaart'>";
}

const verdeelKaarten = () => {
    let verdeelstapel = getKaarten();
    let indexen = [];
    draaiAlleKaarten();
    for (let k = 0; k < globalB.AANTAL_KAARTEN * 2; k++) {
        verdeelstapel[k].addEventListener("click", draaiKaart);
        let indexZoeken = true;
        while (indexZoeken) {
            let index = Math.floor(Math.random() * verdeelstapel.length);
            if (indexen.indexOf(index) === -1) {
                indexen.push(index);
                verdeelstapel[index].style.gridRowStart = "" + (Math.floor(k / (globalB.AANTAL_HORIZONTAAL)) + 1);
                verdeelstapel[index].style.gridColumnStart = "" + (k % (globalB.AANTAL_HORIZONTAAL) + 1);
                indexZoeken = false;
            }
        }
    }
}

const draaiAlleKaarten = () => {
    let grid = document.getElementById("memoryField");
    let kaarten = getKaarten();
    for (let l = 0; l < kaarten.length; l++) {
        kaarten[l].setAttribute("src", "images/memory/achterkant.png")
    }
    globalB.classGedraaideKaart = "";
    grid.setAttribute("class", "clickable");
    grid.style.cursor = "default";
}

const verwijderDubbele = () => {
    let grid = document.getElementById("memoryField");
    let kaarten = getKaarten();
    for (let m = 0; m < kaarten.length; m++) {
        if (kaarten[m].getAttribute("class") === globalB.classGedraaideKaart) {
            console.log(kaarten[m].style.gridRowStart);
            console.log(kaarten[m].style.gridColumnStart);
            let leeg = document.createElement("div");
            leeg.style.gridRowStart = kaarten[m].style.gridRowStart;
            leeg.style.gridColumnStartStart = kaarten[m].style.gridColumnStart;
            leeg.style.margin = "" + (kaarten[m].offsetHeight / 2) + "px " + (kaarten[m].offsetWidth / 2) + "px";
            leeg.setAttribute("class", "leeg");
            grid.appendChild(leeg);
            grid.removeChild(kaarten[m]);
        }
    }
    globalB.classGedraaideKaart = "";

    kaarten = getKaarten();//voor een of andere reden wordt de allerlaatste kaart niet verwijderd
    if (kaarten.length === 1)
    {
        grid.removeChild(grid.lastElementChild);
    }
    grid.setAttribute("class", "clickable");
    grid.style.cursor = "default";
}

const draaiKaart = () => {
    let grid = document.getElementById("memoryField");
    if (grid.getAttribute("class") === "clickable") {
        let kaart = event.target;
        if (kaart.getAttribute("src") === "images/memory/achterkant.png") {

            kaart3dDraaien(kaart, "up");

            if (globalB.classGedraaideKaart !== "") {

                if (globalB.classGedraaideKaart === kaart.getAttribute("class")) {
                    setTimeout(verwijderDubbele, 1500);
                } else {
                    setTimeout(draaiFouteKaarten, 1500);
                }
                grid.setAttribute("class", "unclickable");
                grid.style.cursor = "wait";
            } else {
                globalB.classGedraaideKaart = kaart.getAttribute("class");
            }
        }
    }
}





//**********************************************************************************************************************





const controle = () => {
    let grid = document.getElementById("memoryField");
    let kaarten = getKaarten();
    let nextGuessPossible = true;
    for (let q = 0; q < kaarten.length; q++) {
        let kaart = kaarten[q];
        if (kaart.getAttribute("src") !== "images/memory/achterkant.png") {
            nextGuessPossible = false;
            q = kaarten.length;
        }

        if (kaart.offsetWidth !== 104) {
            nextGuessPossible = false;
            q = kaarten.length;
        }
    }

    if (nextGuessPossible) {
        grid.setAttribute("class", "clickable");
        grid.style.cursor = "default";
        globalB.classGedraaideKaart = "";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kaart3dDraaien(kaart, side) {
    let draaiFactor = 2;
    let origineleBreedte = kaart.offsetWidth - 4;
    let breedte = kaart.offsetWidth - 4;

    kaart.style.height = "" + (kaart.offsetHeight - 4) + "px";
    kaart.style.width = "" + (kaart.offsetWidth - 4) + "px";

    for (let n = breedte; n > 0; n = n - draaiFactor) {
        kaart.style.width = kaart.offsetWidth - 4 - draaiFactor + "px";
        await sleep(1);
    }

    if (side === "up") {
        kaart.setAttribute("src", "images/memory/" + kaart.getAttribute("class") + ".png");
    } else if (side === "down") {
        kaart.setAttribute("src", "images/memory/achterkant.png");
    }

    breedte = kaart.offsetWidth - 4;

    for (let o = breedte; o < origineleBreedte; o = o + draaiFactor) {
        kaart.style.width = kaart.offsetWidth - 4 + draaiFactor + "px";
        await sleep(1);
    }

    kaart.style.height = "auto";

    controle();
}

const draaiFouteKaarten = () => {
    let grid = document.getElementById("memoryField");
    let kaarten = getKaarten();
    for (let p = 0; p < kaarten.length; p++) {
        if (kaarten[p].getAttribute("src") !== "images/memory/achterkant.png") {
            kaart3dDraaien(kaarten[p], "down");
        }
    }
    grid.style.cursor = "default";
    grid.setAttribute("class", "clickable");
    globalB.classGedraaideKaart = "";
}

const getKaarten = () => {
    let grid = document.getElementById("memoryField");
    let gridChildren = grid.children;
    let kaarten = [];
    for (let i = 0; i < gridChildren.length; i++) {
        if (gridChildren[i].className !== "leeg") {
            kaarten.push(gridChildren[i]);
        }
    }
    return kaarten;
}

window.addEventListener("load", setupB);