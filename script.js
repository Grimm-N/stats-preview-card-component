document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.card__content-title');
    const text = document.querySelector('.card__content-text');
    const statsItems = document.querySelectorAll('.card__stats-item');

    setTimeout(() => {
        title.classList.add('show');
    }, 500); 

    setTimeout(() => {
        text.classList.add('show');
    }, 1000); 

    statsItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show'); 
            item.querySelector('p').classList.add('show'); 
        }, 1500 + index * 500); 
    });
});
