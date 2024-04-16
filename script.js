let loginBtn = document.querySelector('.loginbtn');
let registerBtn = document.querySelector('.registerbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

registerBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Register';
    text.innerHTML = 'Lost Password';
    loginBtn.classList.add('disable');
    registerBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
}); 
loginBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'login';
    text.innerHTML = 'Password Suggestions';
    loginBtn.classList.remove('disable');
    registerBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
}); 
