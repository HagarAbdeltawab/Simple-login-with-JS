var title = document.querySelector('#homeTitle');
var userName= sessionStorage.getItem('userName');
title.innerHTML=`Welcome ${userName}` ;

var logoutButton= document.querySelector('.logout-btn');

logoutButton.addEventListener('click',function(){
    sessionStorage.removeItem('userName');
    window.location.href = 'index.html'; 
})