const setup = () => {
    let lis = document.getElementsByTagName("li")
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute("style", "color: red")
    }

    let bod = document.getElementsByTagName("body")
    let image = document.createElement("img")
    image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/e/ee/Harambe_with_boy.jpg")
    image.setAttribute( "alt", "Harambe")
    bod[0].appendChild(image)

}
window.addEventListener("load", setup);