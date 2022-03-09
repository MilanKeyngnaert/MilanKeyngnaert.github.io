const setup = () => {
    let belangrijk = document.getElementsByClassName("belangrijk");
    let i;
    for (i = 0; i < belangrijk.length; i++) {
        belangrijk[i].className = "belangrijk opvallend";
    }
}

window.addEventListener('load',setup);