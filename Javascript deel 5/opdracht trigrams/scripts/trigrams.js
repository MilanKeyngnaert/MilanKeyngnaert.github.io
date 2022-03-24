const setup = () => {
    let tekst = "onoorbaar";
    for (let i = 0; i < tekst.length; i++) {
        let trigram = tekst.slice(i, i+3);
        if(trigram.length === 3) {
            console.log(trigram);
        }
    }
}



window.addEventListener("load", setup);