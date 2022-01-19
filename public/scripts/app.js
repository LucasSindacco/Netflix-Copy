const buttonSendEmail = document.querySelectorAll('#send-button');
const errosEmail = document.querySelectorAll('.error-email');
const labelEmail = document.querySelectorAll('label');
const inputEmail = document.querySelectorAll('#inputEmail');

// Error Input
const checkedButtons = (event) => {
    for (let i = 0; i < 2; i++) {
        if (event.target === buttonSendEmail[i]) {
            errosEmail[i].classList.add("active");
        }
    }
}
buttonSendEmail.forEach((buttons) => {
    buttons.addEventListener('click', checkedButtons);
});

// Effect Input
const verifyInputs = (event) => {
    switch (event.target) {
        case inputEmail[0]:
            labelEmail[0].classList.add('active');
            break;
        case inputEmail[1]:
            labelEmail[1].classList.add('active');
            break;
        default:
            if (inputEmail[0].value === "") {
                labelEmail[0].classList.remove('active');
            }
            if (inputEmail[1].value === "") {
                labelEmail[1].classList.remove('active');
            }
            break;
    }
}
window.addEventListener('click', verifyInputs);


// Box Asked Questions Netflix
const buttonsBox = document.querySelectorAll('#asked-questions > ul > li > button');
const boxes = document.querySelectorAll('#asked-questions > ul > li > .text-asked');
const closeBox = document.querySelectorAll('#closeBox');
const openBox = document.querySelectorAll("#open-box")

buttonsBox.forEach((itens)=> {
    itens.addEventListener('click', (event)=> {
        for (let i = 0; i < 6; i++) {
            if (event.target === buttonsBox[i]) {
                boxes[i].classList.toggle('active');
                openBox[i].classList.toggle('active');
                closeBox[i].classList.toggle('active');
            }
        }
    });
});