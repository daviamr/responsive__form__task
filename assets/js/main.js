const inputs = document.getElementsByClassName('required');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const subtitle = document.getElementById('subtitleTyping');


//Validação dos campos 'nome', 'sobrenome' e 'email'
validateField(0, nameValidate);

function nameValidate() {
    const nameFieldValue = inputs[0].value;

    nameFieldValue.length < 2 ? fieldActions(0, 'block', '#F67669') : fieldActions(0, 'none', '#E6E6F0');

    if (nameFieldValue.trim() === '') {
        fieldActions(0, 'none', '#E6E6F0');
    }
}

validateField(1, surnameValidate);

function surnameValidate() {
    const surnameFieldValue = inputs[1].value;

    surnameFieldValue.length < 4 ? fieldActions(1, 'block', '#F67669') : fieldActions(1, 'none', '#E6E6F0')

    if (surnameFieldValue.trim() === '') {
        fieldActions(1, 'none', '#E6E6F0');
    }
}

validateField(2, emailValidate);

function emailValidate() {
    const emailFieldValue = inputs[2].value;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    emailRegex.test(emailFieldValue) ? fieldActions(2, 'none', '#E6E6F0') : fieldActions(2, 'block', '#F67669');

    if (emailFieldValue.trim() === '') {
        fieldActions(2, 'none', '#E6E6F0');
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

//Função para alterar o display e borda dos elementos dinamicamente
function fieldActions(index, displayValue, borderColor) {
    inputs[index].nextElementSibling.style.display = displayValue;
    inputs[index].style.border = '1px solid' + borderColor;
}

//Função responsável por capturar o evento 'keyup' nos campos
function validateField(index, func) {
    inputs[index].addEventListener('keyup', func);
}