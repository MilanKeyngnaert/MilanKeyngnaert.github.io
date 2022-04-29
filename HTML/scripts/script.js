const globalA = {
    collectionNavValue: 0
};

const setup = () => {
    sortHeaderNav();
    sortNav();
    sortCollection();
    setupButton();
}

const sortHeaderNav = () => {
    let header = document.getElementsByTagName("header");
    let allHeaderNavButtons = document.getElementsByClassName("headerNavButton");
    let allIcons = document.getElementsByClassName("icon");
    let gridTemplateColumns = "50px auto"
    let position = 2;

    for (let i = 0; i < allHeaderNavButtons.length; i++) {
        gridTemplateColumns += " 10%";
        position++;
        allHeaderNavButtons[i].style.gridColumnStart = "" + (position);
    }

    allHeaderNavButtons[allHeaderNavButtons.length - 1].style.borderRight = "rgb(100, 100, 100) solid 1px"
    gridTemplateColumns += " 3%"
    position++;

    for (let i = 0; i < allIcons.length; i++) {
        gridTemplateColumns += " 2%";
        position += 1;
        allIcons[i].parentElement.style.gridColumnStart = "" + (position);
    }

    header[0].style.gridTemplateColumns = gridTemplateColumns;
}

const sortNav = () => {
    let collectionNav = document.getElementById("collectionNav");
    let gridTemplateColumns = "10%";
    for (let i = 0; i < collectionNav.children.length; i++) {
        gridTemplateColumns += " auto";
        collectionNav.children[i].style.gridColumnStart = "" + (i + 2);
        collectionNav.children[i].setAttribute("value", "" + i);
        collectionNav.children[i].addEventListener("click", updateCollection);
    }
    gridTemplateColumns += " 10%";
    collectionNav.style.gridTemplateColumns = gridTemplateColumns;
}

const sortCollection = () => {
    let collectionChildren = document.getElementById("collection").children;
    collectionChildren[collectionChildren.length - 1].style.gridColumnStart = "2";
    collectionChildren[collectionChildren.length - 1].style.gridRowStart = "1";
    for (let i = collectionChildren.length - 2; i >= 0; i--) {
        collectionChildren[i].style.gridColumnStart = "1";
        collectionChildren[i].style.gridRowStart = "1";
        collectionChildren[i].style.margin = "0 auto";
        collectionChildren[i].style.padding = "2px";
        collectionChildren[i].style.border = "black 3px solid";
        collectionChildren[i].style.display = "none";
    }
    document.getElementById("memoryField").style.display = "";
}

const updateCollection = () => {
    globalA.collectionNavValue = parseInt(event.target.getAttribute("value"));
    let aside = document.getElementById("collectionAside");
    let asideChildren = aside.children;
    asideChildren[0].innerText = event.target.innerText;


    let collectionNav = document.getElementById("collectionNav");
    for (let i = 0; i < collectionNav.children.length; i++) {
        collectionNav.children[i].style.borderBottom = "transparent solid 2px";
        collectionNav.children[i].style.color = "white";
    }
    event.target.style.borderBottom = "gold solid 2px"
    event.target.style.color = "gold"

    let collectionChildren = document.getElementById("collection").children;
    for (let i = 0; i < collectionChildren.length - 1; i++) {
        if (i === globalA.collectionNavValue) {
            collectionChildren[i].style.display = "";
        } else {
            collectionChildren[i].style.display = "none";
        }
    }

    let collectionAsideChildren = document.getElementById("collectionAside").children;
    for (let i = 1; i < collectionChildren.length; i++) {
        if (i - 1 === globalA.collectionNavValue) {
            collectionAsideChildren[i].style.display = "";
        } else {
            collectionAsideChildren[i].style.display = "none";
        }
    }
}

const setupButton = () => {
    let contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", goToContact);
}

const goToContact = () => {

    let contact = document.getElementById("contact");
    window.scrollTo({top: contact.offsetTop, behavior: 'smooth' });
}

window.addEventListener("load", setup);