function obterEntradas() {
  const numeroUm = Number(document.getElementById("numero-um").value);
  const numeroDois = Number(document.getElementById("numero-dois").value);
  return { numeroUm, numeroDois };
}

function exibirResultado(valor) {
  document.getElementById("resultado").textContent = valor;
}

function somar(a, b) {
  return a + b;
}

// Só executa no navegador, não durante os testes
if (typeof document !== "undefined") {
  document.getElementById("botao-somar").addEventListener("click", () => {
    const { numeroUm, numeroDois } = obterEntradas();
    const resultado = somar(numeroUm, numeroDois);
    exibirResultado(resultado);
  });
}

// Exporta a função para os testes
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { somar };
}