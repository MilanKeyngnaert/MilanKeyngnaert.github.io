const setup = () => {
    let vandaag = new Date();
    let geboorteDatum = new Date(2003, 10, 14)
    console.log(Math.round((vandaag - geboorteDatum)/1000/60/60/24));
}


window.addEventListener("load", setup);