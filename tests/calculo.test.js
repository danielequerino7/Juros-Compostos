const { calcularJurosCompostos } = require("../src/calculo");

describe("Testes de Juros Compostos", () => {
  test("Deve calcular corretamente o montante final e juros acumulados para valores positivos", () => {
    const resultado = calcularJurosCompostos(1000, 0.05, 12);
    expect(resultado.montanteFinal).toBe("1795.86");
    expect(resultado.jurosAcumulados).toBe("795.86");
  });

});
