// WORK EDUCATION RESEARCH TOGGLER
function show(element) {
    let wer = document.querySelectorAll('.wer');
    wer.forEach(section => section.classList.remove('show'));

    let selected = document.querySelector(`.${element}`);
    selected.classList.add('show');
}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', function() {

    let hero = document.querySelector('.hero-background');
    // SCROLL BLUR //
    document.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let blurValue = scrollPosition / 50;
        hero.style.filter = `blur(${blurValue}px)`;
    })

    // BUTTON HIGHLIGHT TOGGLER
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', function() {
        buttons.forEach(button => button.classList.remove('color'));
        button.classList.add('color');
    }))

    // FOCUS EDUCATION FIRST
    document.querySelector('#education-button').click();

})
