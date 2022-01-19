const inputsLogin = document.querySelectorAll('.login');
const buttonLogin = document.querySelector('button');
const error = document.querySelectorAll('p');
const labels = document.querySelectorAll('label');

const login = () => {
    // Verify Password char 
    if (inputsLogin[1].value.length < 3) {
        error[1].classList.add('error');
    }
    // Verifiy Inputs Nulls
    for (let i = 0; i < 2; i++) {
        if (inputsLogin[i].value === "") {
            error[i].classList.add('error');
            inputsLogin[i].classList.add('error');
        } else {
            // Verify two inputs nulls 
            if (inputsLogin[0].value !== "" && inputsLogin[1].value !== "") {
                alert("Logado com sucesso");
                break;
            }
        }
    }
}

buttonLogin.addEventListener('click', login);

// Effect Input

const effectInput = (event) => {    
    switch (event.target) {
        case inputsLogin[0]:
            labels[0].classList.add('active');
            break;
        case inputsLogin[1]:
            labels[1].classList.add('active');

            break;
        default:
            if (inputsLogin[0].value === "") {
                labels[0].classList.remove("active");
            }
            if (inputsLogin[1].value === "") {
                labels[1].classList.remove("active");
            }
            break;
    }
}


window.addEventListener('click', effectInput);

