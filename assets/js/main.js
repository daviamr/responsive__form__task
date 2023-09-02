const inputs = document.getElementsByClassName('required')
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');


inputs[0].addEventListener('keyup', nameValidate);

function nameValidate() {
    const nameFieldValue = inputs[0].value

    nameFieldValue.length < 2 ? fieldActions(0, 'block', '#F67669') : fieldActions(0, 'none', '#E6E6F0')

    if (nameFieldValue.trim() === '') {
        fieldActions(0, 'none', '#E6E6F0');
    }
}

inputs[1].addEventListener('keyup', surnameValidate);

function surnameValidate() {
    const surnameFieldValue = inputs[1].value

    surnameFieldValue.length < 4 ? fieldActions(1, 'block', '#F67669') : fieldActions(1, 'none', '#E6E6F0')

    if (surnameFieldValue.trim() === '') {
        fieldActions(1, 'none', '#E6E6F0');
    }
}

// Função para alterar o display e borda dos elementos dinamicamente
function fieldActions(index, displayValue, borderColor) {
    inputs[index].nextElementSibling.style.display = displayValue;
    inputs[index].style.border = '1px solid' + borderColor;
}