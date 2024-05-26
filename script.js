document.addEventListener("DOMContentLoaded", function() {
    // Délai avant de masquer les animations et d'afficher le message de remerciement
    setTimeout(function() {
        document.querySelector('.animation-container').style.display = 'none';
        document.getElementById("thank-you-message").style.display = 'block';

        // Déclenche les confettis
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Déclenche les feux d'artifice
        const fireworks = new Fireworks({
            target: 'thank-you-message',
            hue: 120,
            startDelay: 0,
            minDelay: 20,
            maxDelay: 40,
            speed: 2,
            acceleration: 1.05,
            friction: 0.95,
            gravity: 1.5,
            particles: 50,
            trace: 3,
            explosion: 5,
            boundaries: {
                x: 50,
                y: 50,
                width: window.innerWidth - 100,
                height: window.innerHeight - 100,
            },
            sound: {
                enable: true,
                list: [
                    'https://fireworks.js.org/sounds/explosion0.mp3',
                    'https://fireworks.js.org/sounds/explosion1.mp3',
                    'https://fireworks.js.org/sounds/explosion2.mp3'
                ],
                min: 4,
                max: 8,
            },
        });

        fireworks.start();

        // Arrête les feux d'artifice après 5 secondes
        setTimeout(() => fireworks.stop(), 5000);

    }, 3000); // 3 secondes
});
