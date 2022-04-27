const setup = () => {
    let student={
        voornaam : "Kurt",
        familienaam : "Baes",
        geboorteDatum : new Date(2000, 5, 24),
        adres : {
            straat : "Steenstraat",
            huisnummer : 9,
            postcode : 8500,
            gemeente : "Kortrijk"
        },
        vrijgezel : false,
        NamenVanVrienden : ["Tim", "Bert", "Hans", "Peter"],
        aantalBuizen : 2
    }
    console.log(JSON.stringify(student));

    let button = document.getElementById("button");
    button.addEventListener("click", maakObject);
}

const maakObject = () => {
    let input = document.getElementById("input").value;
    let student = JSON.parse(input);
    console.log(student.familienaam);

    console.log("controleren of het object identiek is que properties en property values...")
    console.log(JSON.stringify(student));
    console.log(student);
    console.log("Het object is qua properties en property values identiek");

}



window.addEventListener("load", setup);