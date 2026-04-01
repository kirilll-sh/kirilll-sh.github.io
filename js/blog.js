const dots = document.querySelectorAll('.blog__dot');
const blogCards = document.querySelectorAll('.blog__card');
let currentIndex = 1;

dots[currentIndex].classList.add('active');
showBlogCard(currentIndex);

function showBlogCard(index) {
    blogCards.forEach((card) => {
        card.classList.remove('active');
        card.classList.add('inactive');
    });

    if (index === 0) {
        setTimeout(() => {
            blogCards[0].classList.add('active');
            blogCards[0].classList.remove('inactive');
        }, 0);
        setTimeout(() => {
            blogCards[1].classList.add('active');
            blogCards[1].classList.remove('inactive');
        }, 100);
    } else if (index === 1) {
        setTimeout(() => {
            blogCards[2].classList.add('active');
            blogCards[2].classList.remove('inactive');
        }, 0);
        setTimeout(() => {
            blogCards[3].classList.add('active');
            blogCards[3].classList.remove('inactive');
        }, 100);
    } else if (index === 2) {
        setTimeout(() => {
            blogCards[4].classList.add('active');
            blogCards[4].classList.remove('inactive');
        }, 0);
        setTimeout(() => {
            blogCards[5].classList.add('active');
            blogCards[5].classList.remove('inactive');
        }, 100);
    }
}

dots.forEach((dotItem, dotIndex) => {
    dotItem.addEventListener('click', () => {
        dotItem.classList.add('active');
        dots.forEach((otherDot, otherIndex) => {
            if (otherIndex !== dotIndex) {
                otherDot.classList.remove('active');
            }
        });
        showBlogCard(dotIndex);
    });
});
