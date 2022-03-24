const setup = () => {
    let gemeente = "";
    let ongoing = true;
    let lijst = document.getElementById("gemeenten");
    let gemeenten = [];

    while(ongoing) {
        gemeente = window.prompt("gemeente:", null);
        if (gemeente === "stop") {
            ongoing = false;
        } else {
            gemeenten.push(gemeente);
        }
    }
    gemeenten.sort();
    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement('option');
        option.value = gemeenten[i];
        lijst.appendChild(option);
    }
}

window.addEventListener("load", setup);