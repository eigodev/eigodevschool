const passwordInput = document.getElementById('password')
const showPasswordIcon = document.getElementById('show-icon')
const hidePasswordIcon = document.getElementById('hide-icon')

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