document.addEventListener('DOMContentLoaded', function() {
    // Scroll blur //
    let hero = document.querySelector('.hero');

    document.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let blurValue = scrollPosition / 100;
        background.style.filter = `blur(${blurValue}px)`;
    })
})
