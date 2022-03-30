const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    let save = document.getElementById("saveButton")
    save.addEventListener("click", saveColor);


}

const update = () => {
    let colorDemos = document.getElementsByClassName("colorDemo")
    let sliders = document.getElementsByClassName("slider");
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    red.innerText = sliders[0].value;
    green.innerText = sliders[1].value;
    blue.innerText = sliders[2].value;

    colorDemos[0].style.backgroundColor = "rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")";
}

const saveColor = () => {
    let saves = document.getElementById("saves")
    let newColor = document.createElement("div")
    newColor.setAttribute("class", "colorDemo savedColor")

    let sliders = document.getElementsByClassName("slider");
    newColor.style.backgroundColor = "rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")";
    newColor.setAttribute("data-red", sliders[0].value)
    newColor.setAttribute("data-green", sliders[1].value)
    newColor.setAttribute("data-blue", sliders[2].value)

    let removeButton = document.createElement("input")
    removeButton.setAttribute("type", "button")
    removeButton.setAttribute("value", "X")
    removeButton.addEventListener("click", remove)
    newColor.appendChild(removeButton)

    newColor.addEventListener("click", getColor)
    saves.appendChild(newColor)
}

const remove = (event) => {
    event.target.parentElement.remove()
}

const getColor = (event) => {
    let color = event.target
    if (color.className === "colorDemo savedColor") {
        let colorDemos = document.getElementsByClassName("colorDemo")
        colorDemos[0].style.backgroundColor = color.style.backgroundColor

        let sliders = document.getElementsByClassName("slider");
        sliders[0].value = color.getAttribute("data-red")
        sliders[1].value = color.getAttribute("data-green")
        sliders[2].value = color.getAttribute("data-blue")

        update()
    }
}

window.addEventListener("load", setup);