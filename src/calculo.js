function calcularJurosCompostos(capitalInicial, taxaJuros, tempo) {
  const montante = capitalInicial * Math.pow(taxaJuros, tempo);
  const juros = montante - capitalInicial;

  return {
    montanteFinal: montante.toFixed(2),
    jurosAcumulados: juros.toFixed(2),
  };
}

const resultado = calcularJurosCompostos(1000, 0.05, 24);
console.log(`Montante Final: R$ ${resultado.montanteFinal}`);
console.log(`Juros Acumulados: R$ ${resultado.jurosAcumulados}`);
