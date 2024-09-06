function verificaFibonacci(numero) {
    if (numero < 0) {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
        return;
    }
    
    let fib = [0, 1];
    while (true) {
        let proximo = fib[fib.length - 1] + fib[fib.length - 2];
        if (proximo > numero) break;
        fib.push(proximo);
    }
    
    if (fib.includes(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
}

let numeroParaVerificar = 5;
verificaFibonacci(numeroParaVerificar);

/*
Resultado:
5 pertence à sequência de Fibonacci. 
*/