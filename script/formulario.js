function calcularPontuacao() {
  const form = document.getElementById("srqForm");
  const respostas = form.querySelectorAll('input[type="radio"]:checked');
  let pontos = 0;
  respostas.forEach((resposta) => {
    if (resposta.value === "sim") {
      pontos++;
    }
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
      <h1>VOCÊ FEZ <span>${pontos} PONTOS.</span></h1>`;
}
