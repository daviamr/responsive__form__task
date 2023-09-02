const inputs = document.getElementsByClassName('required')
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');


inputs[0].addEventListener('keyup', nameValidate);

function nameValidate() {
    const nameField = inputs[0];
    const nameFieldValue = inputs[0].value
    const spanElement = inputs[0].nextElementSibling;

    if (nameFieldValue.length < 3) {
        fieldActions(spanElement, 'block', nameField, '#F67669');
    } else {
        fieldActions(spanElement, 'none', nameField, '#E6E6F0');
    }
    if (nameFieldValue === '') {
        fieldActions(spanElement, 'none', nameField, '#E6E6F0');
    }

}

inputs[1].addEventListener('keyup', surnameValidate);

function surnameValidate() {
    const surnameField = inputs[1];
    const surnameFieldValue = inputs[1].value
    const spanElement = inputs[1].nextElementSibling;

    if (surnameFieldValue.length < 5) {
        fieldActions(spanElement, 'block', surnameField, '#F67669');
    } else {
        fieldActions(spanElement, 'none', surnameField, '#E6E6F0');
    }
    if (surnameFieldValue === '') {
        fieldActions(spanElement, 'none', surnameField, '#E6E6F0');
    }

}

// Função para alterar o display e borda dos elementos dinamicamente
function fieldActions(spanDisplay, displayValue, fieldEdge, hexadecimal) {
    spanDisplay.style.display = displayValue;
    fieldEdge.style.border = '1px solid' + hexadecimal;
}

