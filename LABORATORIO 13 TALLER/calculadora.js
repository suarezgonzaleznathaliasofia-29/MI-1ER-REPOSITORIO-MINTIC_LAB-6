// --- Parte 1 & 2: Funciones matemáticas y Calculadora principal ---

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero no permitida.";
    }
    return a / b;
}

function calculadora(num1, num2, operacion) {
    const op = String(operacion).trim();
    switch (op) {
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividir(num1, num2);
        default:
            return "Error: Operación no válida.";
    }
}

// --- Parte 3: Lógica para el Navegador (DOM) ---

function ejecutarCalculadora() {
    // 1. Obtener valores del HTML usando el ID
    const inputNum1 = document.getElementById('num1').value;
    const inputNum2 = document.getElementById('num2').value;
    const operacion = document.getElementById('operacion').value;
    const resultadoDiv = document.getElementById('resultado');

    // 2. Convertir a números
    const num1 = parseFloat(inputNum1);
    const num2 = parseFloat(inputNum2);

    // 3. Validación
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.textContent = "Error: Por favor, ingrese números válidos.";
        resultadoDiv.style.color = 'red';
        return; 
    }

    // 4. Ejecutar y mostrar el resultado
    const resultado = calculadora(num1, num2, operacion);
    
    resultadoDiv.style.color = 'black'; 
    resultadoDiv.innerHTML = **${num1} ${operacion} ${num2}** = **${resultado}**;
}