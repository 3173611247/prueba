const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumButton = document.getElementById("sumButton");
const resultElement = document.getElementById("result");

    // Evento click 
    sumButton.addEventListener("click", function () {
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Verifica los numeros
        
        const resultado = num1 + num2;
        resultElement.textContent = "Resultado: " + resultado;
    
    });

