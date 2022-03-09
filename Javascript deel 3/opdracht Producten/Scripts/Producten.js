const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", herbereken);
}

const herbereken = () => {
    let r1 = document.getElementsByClassName("r1");
    r1[3].innerText = ((Math.round((parseFloat(r1[0].innerText) * parseInt(r1[1].value)) * (1 + (parseFloat(r1[2].innerText) / 100)) * 100))/100) + " Eur";
    let r2 = document.getElementsByClassName("r2");
    r2[3].innerText = ((Math.round((parseFloat(r2[0].innerText) * parseInt(r2[1].value)) * (1 + (parseFloat(r2[2].innerText) / 100)) * 100))/100) + " Eur";
    let r3 = document.getElementsByClassName("r3");
    r3[3].innerText = ((Math.round((parseFloat(r3[0].innerText) * parseInt(r3[1].value)) * (1 + (parseFloat(r3[2].innerText) / 100)) * 100))/100) + " Eur";

    let ttl = document.getElementById("totaal");
    ttl.innerText = ((Math.round((parseFloat(r1[3].innerText) + parseFloat(r2[3].innerText) + parseFloat(r3[3].innerText)) * 100)) / 100) + " Eur";
}

window.addEventListener('load',setup);