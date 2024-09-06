function verificarLetraA(str) {
    const strLower = str.toLowerCase();
    const quantidade = (strLower.match(/a/g) || []).length;
    const existe = quantidade > 0;
    console.log(`A letra 'a' ${existe ? 'existe' : 'não existe'} na string.`);
    console.log(`Quantidade de vezes que a letra 'a' aparece: ${quantidade}`);
}

const minhaString = 'Abacate.';
verificarLetraA(minhaString);

/* Resultado:

A letra 'a' existe na string.
Quantidade de vezes que a letra 'a' aparece: 3 */