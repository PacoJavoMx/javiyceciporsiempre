function updateCountdown() {
    const weddingDate = new Date("2025-07-15T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el gran día.`;
}

setInterval(updateCountdown, 1000);
