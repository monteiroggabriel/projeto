const { somar } = require('./index');

if (somar(2, 3) !== 5) {
    console.error("Falhou!");
    process.exit(1);
} else {
    console.log("Sucesso!");
}
