function mostrarMenu() {
    return prompt(
        "Seleccione una opcion:\n" +
        "1. Calculadora simple\n" +
        "2. Verificador de palindromo\n" +
        "3. Generador de numeros aleatorios\n" +
        "4. Convertidor de temperatura\n" +
        "5. Contador de vocales\n" +
        "6. Factorial de un numero\n" +
        "7. Suma de elementos de un array\n" +
        "8. Inversion de cadena\n" +
        "9. Buscador de numeros primos\n" +
        "10. Ordenamiento de array\n" +
        "0. Salir"
    );
}

function calcular(num1, num2, operador) {
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division por cero';
        default: return 'Operador no valido';
    }
}

function esPalindromo(texto) {
    let invertido = texto.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
    return texto.toLowerCase().replace(/[^a-z0-9]/g, '') === invertido;
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertirTemperatura(grados, tipo) {
    return tipo === 'C' ? (grados * 9/5) + 32 : (grados - 32) * 5/9;
}

function contarVocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function sumaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primosEnRango(inicio, fin) {
    let primos = [];
    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) primos.push(i);
    }
    return primos;
}

function ordenarArray(arr, orden = 'asc') {
    return orden === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

let opcion;
do {
    opcion = mostrarMenu();
    switch (opcion) {
        case '1':
            let num1 = parseFloat(prompt("Ingrese el primer numero:"));
            let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
            let operador = prompt("Ingrese el operador (+, -, *, /):");
            alert("Resultado: " + calcular(num1, num2, operador));
            break;
        case '2':
            let texto = prompt("Ingrese una palabra o frase:");
            alert("Es palindromo: " + esPalindromo(texto));
            break;
        case '3':
            let min = parseInt(prompt("Ingrese el minimo:"));
            let max = parseInt(prompt("Ingrese el maximo:"));
            alert("Numero aleatorio: " + numeroAleatorio(min, max));
            break;
        case '4':
            let grados = parseFloat(prompt("Ingrese los grados:"));
            let tipo = prompt("Convertir a (C/F):");
            alert("Conversion: " + convertirTemperatura(grados, tipo));
            break;
        case '5':
            let cadena = prompt("Ingrese un texto:");
            alert("Numero de vocales: " + contarVocales(cadena));
            break;
        case '6':
            let n = parseInt(prompt("Ingrese un numero:"));
            alert("Factorial: " + factorial(n));
            break;
        case '7':
            let array = prompt("Ingrese numeros separados por coma:").split(',').map(Number);
            alert("Suma del array: " + sumaArray(array));
            break;
        case '8':
            let textoInvertir = prompt("Ingrese un texto:");
            alert("Texto invertido: " + invertirCadena(textoInvertir));
            break;
        case '9':
            let inicio = parseInt(prompt("Ingrese el numero de inicio:"));
            let fin = parseInt(prompt("Ingrese el numero de fin:"));
            alert("Numeros primos: " + primosEnRango(inicio, fin));
            break;
        case '10':
            let arrOrdenar = prompt("Ingrese numeros separados por coma:").split(',').map(Number);
            let orden = prompt("Orden (asc/desc):");
            alert("Array ordenado: " + ordenarArray(arrOrdenar, orden));
            break;
        case '0':
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opcion no valida. Intente nuevamente.");
    }
} while (opcion !== '0');