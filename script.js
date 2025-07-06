function verificarPalpite() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");

    if (palpite === numeroSecreto) {
        mensagem.innerText = "🎉 Parabéns! Você acertou!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = `❌ Errou! O número era ${numeroSecreto}.`;
        mensagem.style.color = "red";
    }
}
