const { somar } = require("../script");

test("soma números positivos", () => {
  expect(somar (2, 3)).toBe(5);
});

test("soma negativo e positivo", () => {
  expect(somar (-1, 5)).toBe(4);
});
