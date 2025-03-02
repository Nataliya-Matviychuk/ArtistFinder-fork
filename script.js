document.addEventListener('DOMContentLoaded', function() {
    const darkHeader = document.querySelector('header');
    const darkLogo = document.querySelector('.logo');
    const darkLink = document.querySelector('.link');
    const darkBtnJoin = document.querySelector('.link--btn');
    const darkBtnLogin = document.querySelector('.link--btn--media');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1) {
            darkHeader.classList.add('dark-header');
            darkLogo.classList.add('dark-logo');
            darkLink.classList.add('dark-link');
            darkBtnJoin.classList.add('dark--btn');
            darkBtnLogin.classList.add('dark--btn--media');
        } else {
            darkHeader.classList.remove('dark-header');
            darkLogo.classList.remove('dark-logo');
            darkLink.classList.remove('dark-link');
            darkBtnJoin.classList.remove('dark--btn');
            darkBtnLogin.classList.remove('dark--btn--media');
        }
    });
});