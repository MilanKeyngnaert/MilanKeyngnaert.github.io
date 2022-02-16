const setup = () => {
    var namen = ['naam1', 'naam2', 'naam3', 'naam4', 'naam5'];
    console.log(namen.length);
    console.log(namen[0]);
    console.log(namen[2]);
    console.log(namen[4]);

    const VoegNaamToe = (naam) => {
        namen.push(naam);
    }

    const extraNaam = prompt('voeg een extra naam toe', '/');
    VoegNaamToe(extraNaam);
    console.log(namen.toString());
}

window.addEventListener('load',setup);