const setup = () => {
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);


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

window.addEventListener("load", setup);