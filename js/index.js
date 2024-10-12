var emailInput = document.querySelector('#userEmail');
var passwordInput = document.querySelector('#password');

var incorrect = document.querySelector('#incorrect');
var invalid = document.querySelector('#invalid');

var loginButton = document.querySelector('.login-btn');

var users = [];
if (localStorage.getItem('users') !== null) {
    users = JSON.parse(localStorage.getItem('users'));
}

loginButton.addEventListener('click', function () {
    if ( !emailInput.value || !passwordInput.value) {
        invalid.classList.remove('d-none');
        incorrect.classList.add('d-none'); 
        return false;
    }

    var isValidUser = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail === emailInput.value && users[i].password === passwordInput.value ) {
            sessionStorage.setItem('userName', `${users[i].userName}`);
            isValidUser = true;
            break;
        }
    }
    if (isValidUser) { 
        invalid.classList.add('d-none');
        incorrect.classList.add('d-none'); 
        window.location.href = 'home.html'; 
    } else { 
        incorrect.classList.remove('d-none');
        invalid.classList.add('d-none');
    }

    
});