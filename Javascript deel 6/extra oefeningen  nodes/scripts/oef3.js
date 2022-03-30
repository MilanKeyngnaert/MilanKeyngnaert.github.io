const setup = () => {
    let tekst = document.createElement("p")
    tekst.append("ezaf")

    let dive = document.getElementById("myDIV")
    dive.appendChild(tekst)
}
window.addEventListener("load", setup);