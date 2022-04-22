let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

let changeTargetDelay;

const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener('click', startGame);
};

const startGame = () => {
    changeTargetDelay = setInterval(changeTarget, global.MOVE_DELAY);
    let target = document.getElementById("target");
    target.addEventListener('click', clicked);
    changeTarget();
}

const clicked = () => {
    let target = document.getElementById("target");
    target.addEventListener('click', clicked);
    clearInterval(changeTargetDelay);

    if (target.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX) {
        alert("Game Over");
    } else {
        changeTarget();
        changeTargetDelay = setInterval(changeTarget, global.MOVE_DELAY);
        global.score++;
    }
    let score = document.getElementsByTagName("p");
    score[0].innerText = "Score: " + global.score;
}

const changeTarget = () => {
    let target = document.getElementById("target");

    target.style.marginLeft = Math.round(Math.random() * (600 - global.IMAGE_SIZE)) + "px";
    target.style.marginTop = Math.round(Math.random() * (800 - global.IMAGE_SIZE)) + "px";
    target.setAttribute("src", (global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * 5) + global.IMAGE_PATH_SUFFIX));
}


window.addEventListener("load", setup);