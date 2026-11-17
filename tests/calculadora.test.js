const testarcalculadora = require("../models/calculadora");

test("teste da calculadora somando", () => {
  const resultado = testarcalculadora.soma(4, 5);
  expect(resultado).toBe(9);
});

test("Deveria retornar erro", () => {
  const resultado = testarcalculadora.soma("as5", 5);
  expect(resultado).toBe("Erro");
});
