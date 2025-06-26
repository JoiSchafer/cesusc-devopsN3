const { soma } = require("../script");

test("soma números positivos", () => {
  expect(soma(2, 3)).toBe(5);
});

test("soma negativo e positivo", () => {
  expect(soma(-1, 5)).toBe(4);
});
