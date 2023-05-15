window.addEventListener('DOMContentLoaded', () => {
    const $loginForm = document.querySelector('loginBtn');
    const $signupBtn = document.querySelector('signupBtn');
});

function goHome(event){
    event.preventDefault();
    window.location.href = '/home';
}

function loadSignin(event){
    event.preventDefault();
    window.location.href = '/signin';
}

function loadSignup(event){
    event.preventDefault();
    window.location.href = '/signup';
}