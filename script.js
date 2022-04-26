//javascript steps
//1) Target id & classes
//2) add Event Listener -> Submit
//3) Engine Function
//4) Test the system


//1) Target id and classes by declaring variable

let id = (id) => document.getElementById(id) //(this is with return if we don't use {} curly braces )

let classes = (classes) => document.getElementsByClassName(classes)

let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon')


//2) add Event Listener -> Submit

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // if(username.value === ''){
    //     errorMsg[0].innerHTML = 'please enter username'
    //     failureIcon[0].style.opacity = '1'
    //     successIcon[0].style.opacity = '0'
    // }else{
    //     errorMsg[0].innerHTML = ''
    //     failureIcon[0].style.opacity = '0'
    //     successIcon[0].style.opacity = '1'
    // }

    engine(username, 0, 'Username cannot be blank')
    engine(email, 1, 'Email cannot be blank')
    engine(password, 2, 'Password cannot be blank')
})

let engine = (id, serial, message) => {
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message
        id.style.border = '2px solid red'

        failureIcon[serial].style.opacity = '1'
        successIcon[serial].style.opacity = '0'
    }else{
        errorMsg[serial].innerHTML = ''
        id.style.green = '2px solid green'

        failureIcon[serial].style.opacity = '0'
        successIcon[serial].style.opacity = '1'
    }
}