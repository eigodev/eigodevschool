const passwordInput = document.getElementById('password')
const showPasswordIcon = document.getElementById('show-icon')
const hidePasswordIcon = document.getElementById('hide-icon')
const logIn = document.querySelector('#login-in')
const signUp = document.querySelector('#sign-up')

showPasswordIcon.addEventListener('click', function(){
    passwordInput.type = 'text';
    showPasswordIcon.style.display = 'none'
    hidePasswordIcon.style.display = 'block'
})

hidePasswordIcon.addEventListener('click', function(){
    passwordInput.type = 'password'
    hidePasswordIcon.style.display = 'none'
    showPasswordIcon.style.display = 'block'
})

logIn.addEventListener('click', function(){
    console.log('clicou Login')
})

signUp.addEventListener('click', function(){
    console.log('clicou Sign-up')
})