const userCredentials = [{
    username: "samoett",
    email: "samoettinger_@outlook.com",
    password: "@Senha847136"
},
{
    username: "mayuka",
    email: "carooolmayumi@gmail.com",
    password: "090887"
}]

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

    let loginSuccesful = false
    let matchedUser = null

    for (let index = 0; userCredentials.length; index++){
        let user = userCredentials[index]

        if(enteredUsername === user.username || enteredUsername === user.email && enteredPassword === user.password){
            loginSuccesful = true
            matchedUser = user
            break
        }
    }
    if (loginSuccesful){alert(`Seja bem-vindo(a) ${matchedUser.username}`)}
    else {alert('Você não possui cadastro!')}
}
