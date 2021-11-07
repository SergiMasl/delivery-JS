const btnAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const login = document.getElementById('login')
const password = document.getElementById('password');




const closedForm = () => {
    modalAuth.style.display = 'none'
}

const logIn = (currentUser) => {
    btnAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';

    userName.textContent = currentUser.log
    closedForm()
}

buttonOut.addEventListener('click',() => {
    btnAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';

    userName.textContent = ''

    localStorage.removeItem('user')
    }
)


btnAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', closedForm)

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentUser = {
        log: login.value,
        pass: password.value,
    }

    localStorage.setItem('user', JSON.stringify(currentUser))
    logIn(currentUser);
})

if(localStorage.getItem('user')) {
    logIn(JSON.parse(localStorage.getItem('user')))
}