const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.testimonials__dot');
let currentCard = 0;
let currentDot = 0;
const interval = 3000;

function animate() {
    cards.forEach((card, index) => {
        if (index === currentCard) {
            card.classList.add('active');
            card.classList.remove('inactive');
        } else {
            card.classList.remove('active');
            card.classList.add('inactive');
        }
    });

    dots.forEach((dot, index) => {
        if (index === currentDot) {
            dot.classList.add('active');
            dot.classList.remove('inactive');
        } else {
            dot.classList.remove('active');
            dot.classList.add('inactive');
        }
    });

    currentDot = (currentDot + 1) % dots.length;
    currentCard = (currentCard + 1) % cards.length;
}

animate();
setInterval(animate, interval);
