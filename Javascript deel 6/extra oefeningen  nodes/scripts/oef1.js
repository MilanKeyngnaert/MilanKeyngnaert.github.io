const setup = () => {
    let item = document.querySelectorAll("p")[0]

    let newtekst = document.createTextNode("Good job!")
    item.firstChild.remove()
    item.appendChild(newtekst)
}
window.addEventListener("load", setup);