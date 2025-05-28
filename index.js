function enviarMensagem(mensagem) {
  const textarea = document.querySelector(`div[contenteditable="true"]`);

  if (!textarea) {
    console.error(
      "Campo de texto não encontrado. Verifique se você está na página do WhatsApp Web e em uma conversa."
    );
    return false;
  }

  textarea.focus();
  document.execCommand("insertText", false, mensagem);
  textarea.dispatchEvent(new Event("change", { bubbles: true }));

  setTimeout(() => {
    const botaoEnviar = document.querySelector(
      'button[data-tab="11"][aria-label="Enviar"]'
    );
    if (botaoEnviar) {
      botaoEnviar.click();
      console.log("Mensagem enviada: " + mensagem);
      return true;
    } else {
      console.error("Botão de enviar não encontrado");
      return false;
    }
  }, 100);
}

function iniciarEnvioAutomatico() {
  const intervalo = 300000;

  const mensagem = "Aguardo retorno";

  enviarMensagem(mensagem);

  const intervalId = setInterval(() => {
    enviarMensagem(mensagem);
  }, intervalo);

  console.log(
    "Enviando " +
      mensagem +
      " a cada 5 minutos. Para parar, digite: clearInterval(" +
      intervalId +
      ")"
  );

  return intervalId;
}

iniciarEnvioAutomatico();
