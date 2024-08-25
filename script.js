const userCredentials = {
    username: "samoett",
    email: "samoettinger_@outlook.com",
    password: "@Senha847136"
}

document.getElementById("loginForm").addEventListener('keydown', function(event){
    console.log("key pressed:", event.key)
    
    if (event.key === 'Enter' || event.keyCode === 13){
        event.preventDefault()
        validateLogin(event)
    }
})

function validateLogin(event){
    const enteredUsername = document.getElementById('username').value
    const enteredPassword = document.getElementById('password').value

    if (enteredUsername === userCredentials.username && enteredPassword === userCredentials.password){
        alert('Login Succesful!')
    } else {
        alert ('Login Unsuccesful!')
    }
}