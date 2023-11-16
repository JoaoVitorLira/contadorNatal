var relogio = setInterval(function relogioNatal() {
    // Data atual
    let agora = new Date();

    // Data do Natal
    let natal = new Date(agora.getFullYear(), 11, 25, 0, 0, 0);

    // Se o Natal já passou este ano, ajuste para o próximo ano
    if (agora > natal) {
        natal.setFullYear(agora.getFullYear() + 1);
    }

    // Calcula a diferença entre as datas
    let diferenca = natal - agora;

    // Calcula dias, horas, minutos e segundos
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    let tempo = (`${agora.getFullYear()} - ${dias}d ${horas}h ${minutos}m ${segundos}s`);
    document.getElementById('natal').textContent = tempo
}, 1000);

relogioNatal();