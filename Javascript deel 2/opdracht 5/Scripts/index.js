const setup = () => {
    let Wijzig=document.getElementById("btnWijzig");
    Wijzig.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener('load',setup);