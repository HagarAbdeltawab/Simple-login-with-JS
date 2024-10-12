var nameInput = document.querySelector('#userName');
var emailInput = document.querySelector('#userEmail');
var passwordInput = document.querySelector('#password');

var signupButton = document.querySelector('.signup-btn');

var success = document.querySelector('#success');
var emailExist = document.querySelector('#emailExist');
var invalid = document.querySelector('#invalid');

var users = [];
if (localStorage.getItem('users') !== null) {
    users = JSON.parse(localStorage.getItem('users'));
}

signupButton.addEventListener('click', function () {
    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        invalid.classList.remove('d-none');
        success.classList.add('d-none');
        emailExist.classList.add('d-none');
        return false;
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail === emailInput.value) {
            emailExist.classList.remove('d-none');
            success.classList.add('d-none');
            invalid.classList.add('d-none');
            return false;
        }
    }

    var user = {
        userName: nameInput.value,
        userEmail: emailInput.value,
        password: passwordInput.value
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    success.classList.remove('d-none');
    emailExist.classList.add('d-none');
    invalid.classList.add('d-none');
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;

}); 