function enviarFeedback() {
  const feedback = document.getElementById("feedback").value.trim();
  if (feedback) {
    alert("Obrigado por compartilhar suas ideias! Elas são muito valiosas.");
    document.getElementById("feedbackForm").reset();
  } else {
    alert("Por favor, preencha o campo antes de enviar.");
  }
}
