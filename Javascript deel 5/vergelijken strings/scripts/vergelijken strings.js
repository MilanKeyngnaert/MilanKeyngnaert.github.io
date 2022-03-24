const setup = () => {
    let s1 = "dit is een string";
    let s2 = "dit is een string";
    let s3 = "dit is een string!!!";
    let s4 = "dit is ";
    let s5 = "een string";

    if (s1 == s2) {
        console.log(true);
    } else {
        console.log(false);
    }

    if (s1 === s2) {
        console.log(true);
    } else {
        console.log(false);
    }



    s3 = s3.slice(0, 17);
    if (s1 == s3) {
        console.log(true);
    } else {
        console.log(false);
    }

    if (s1 === s3) {
        console.log(true);
    } else {
        console.log(false);
    }



    s4 += s5;
    if (s3 == s4) {
        console.log(true);
    } else {
        console.log(false);
    }

    if (s3 === s4) {
        console.log(true);
    } else {
        console.log(false);
    }
}



window.addEventListener("load", setup);