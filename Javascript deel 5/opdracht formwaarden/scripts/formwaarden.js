const setup = () => {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", toonResultaat);
    console.log("test0");
}

const toonResultaat = () => {
    let roker = document.getElementById("roker");
    let nl = document.getElementById("nl");
    let fr = document.getElementById("fr");
    let en = document.getElementById("en");
    let favland = document.getElementById("favoriete buurland");
    let bestelling = document.getElementById("bestelling");

    if (roker.checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    if (nl.checked) {
        console.log("moedertaal is nl");
    } else if (fr.checked) {
        console.log("moedertaal is fr");
    } else if (en.checked) {
        console.log("moedertaal is en");
    }

    let int = favland.options.selectedIndex;
    console.log("favoriete buurland is " + favland.options[int].value);


    let bestellingsItems = [];
    if (bestelling.selectedIndex === -1) {
        console.log("geen bestelling");
    } else {
        for (let i = 0; i < bestelling.options.length; i++) {
            if (bestelling.options[i].selected) {
                bestellingsItems.push(bestelling.options[i]);
            }
        }
        let res = "";
        for (let j = 0; j < bestellingsItems.length; j++) {
            res += bestellingsItems[j].value + " ";
        }
        console.log("bestelling bestaat uit " + res);
    }
    

}

window.addEventListener("load", setup);