const numeroSorteado = Math.floor(Math.random() * 51);

function verificarPalpite() {
    const palpiteUsuario = parseInt(document.getElementById('userGuess').value);

    if (isNaN(palpiteUsuario) || palpiteUsuario < 0 || palpiteUsuario > 50) {
        alert("Por favor, insira um número válido entre 0 e 50.");
    } else {
        if (palpiteUsuario === numeroSorteado) {
            document.getElementById('resultado').innerHTML = `Parabéns! Você acertou! O número sorteado é ${numeroSorteado}.`;
        } else if (palpiteUsuario < numeroSorteado) {
            document.getElementById('resultado').innerHTML = 'Tente novamente. O número é maior.';
        } else {
            document.getElementById('resultado').innerHTML = 'Tente novamente. O número é menor.';
        }
    }
}

function verNumero() {
    document.getElementById('resultado').innerHTML = `O número sorteado era ${numeroSorteado}.`;
}