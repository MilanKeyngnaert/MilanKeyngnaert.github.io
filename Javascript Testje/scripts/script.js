const setup = () => {
    let passagiers = document.getElementById("passagiers");
    let knop = document.getElementById("action");
    let kar = document.getElementsByClassName("div");
    knop.addEventListener("click", verdeel);
}




const verdeel = () => {
    verdeelPassagiers(passagiers.value);
}

const verdeelPassagiers = (input) => {
    let lijst = input.split(',');
    for (let i = 0; i < lijst.length; i++) {
        console.log(lijst[i]);
    }

    //kar[0].innerHTML =



}

window.addEventListener("load", setup);