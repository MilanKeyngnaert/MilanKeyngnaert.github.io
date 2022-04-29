const setupC = () => {
    let colorpicker = document.getElementById("colorpicker");
    colorpicker.innerHTML =
    "<div id=\"grid1\">\n" +
    "    <div id=\"grid2\">\n" +
    "        <p class=\"r1 f\">rood</p>\n" +
    "        <p class=\"r2 f\">groen</p>\n" +
    "        <p class=\"r3 f\">blauw</p>\n" +
    "        <input type=\"range\" class=\"slider\" value=\"0\" min=\"0\" max=\"255\" />\n" +
    "        <input type=\"range\" class=\"slider\" value=\"0\" min=\"0\" max=\"255\" />\n" +
    "        <input type=\"range\" class=\"slider\" value=\"0\" min=\"0\" max=\"255\" />\n" +
    "        <p id=\"red\" class=\"r1\">0</p>\n" +
    "        <p id=\"green\" class=\"r2\">0</p>\n" +
    "        <p id=\"blue\" class=\"r3\">0</p>\n" +
    "    </div>\n" +
    "    <div class=\"colorDemo\" /></div>\n" +
    "    <input type=\"button\" id=\"saveButton\" value=\"save\">\n" +
    "</div>\n" +
    "<div id=\"saves\"></div>";

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
    newColor.setAttribute("class", "savedColor")

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
    if (color.className === "savedColor") {
        let colorDemos = document.getElementsByClassName("colorDemo")
        colorDemos[0].style.backgroundColor = color.style.backgroundColor

        let sliders = document.getElementsByClassName("slider");
        sliders[0].value = color.getAttribute("data-red")
        sliders[1].value = color.getAttribute("data-green")
        sliders[2].value = color.getAttribute("data-blue")

        update()
    }
}

window.addEventListener("load", setupC);