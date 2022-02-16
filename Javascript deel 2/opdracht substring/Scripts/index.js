const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", klik);
}

const klik = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let linkerI = document.getElementById("linkerInt");
    let rechterI = document.getElementById("rechterInt");
    let g1=parseInt(linkerI.value, 10);
    let g2=parseInt(rechterI.value, 10);
    let ntekst = tekst.substring(g1, g2);
    document.getElementById("txtOutput").innerHTML = ntekst;
}

window.addEventListener('load',setup);