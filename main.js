/**
 Primer codigo:

 const numero1Input = document.getElementById('operand1');
const numero2Input = document.getElementById('operand2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        resultParagraph.textContent = 'Por favor, ingrese números válidos en ambos campos.';
        return;
    }

    const operator = operatorSelect.value;

    let result;

    switch (operator) {
        case '+':
            result = numero1 + numero2;
            break;
        case '-':
            result = numero1 - numero2;
            break;
        case '*':
            result = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                return;
            }
            result = numero1 / numero2;
            break;
        default:
            result = 'Operador no válido';
    }
    resultParagraph.textContent = `Resultado: ${result}`;
});*/

/*Segundo codigo con modificaciones: */
const numero1Input = document.getElementById('operand1');
const numero2Input = document.getElementById('operand2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    let numero1 = parseFloat(numero1Input.value);
    let numero2 = parseFloat(numero2Input.value);

    if (isNaN(numero1) || isNaN(numero2)) {/**Verifica que sean numeros */
        resultParagraph.textContent = 'Por favor, ingrese números válidos en ambos campos.';
        return;
    }

    const operator = operatorSelect.value;
    let result;

    switch (operator) {/**elije la operacion y la ejecutra segun corresponda. */
        case '+':
            result = numero1 + numero2;
            break;
        case '-':
            result = numero1 - numero2;
            break;
        case '*':
            result = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {/**aca revisa y avisa por un alet que no pueden dividir por cero */
                window.alert('No se puede dividir por cero.');
                return;
            }
            result = numero1 / numero2;
            break;
        default:
            result = 'Operador no válido';
    }

    if (!isFinite(result)) {/** aca revisa que el resultado sea finito o no, y manda un mensaje de alerta*/
        window.alert('El resultado es indefinido o demasiado grande/pequeño.');
        return;
    }

    resultParagraph.textContent = `Resultado: ${result}`;
});

clearButton.addEventListener('click', () => {/**estas lineas de codigo cree el boton para borrar los campos de ingrese numeros. */
    numero1Input.value = '';
    numero2Input.value = '';
    operatorSelect.selectedIndex = 0;
    resultParagraph.textContent = '';
});
