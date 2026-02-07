// getting input of firstname
const firstName = document.querySelector('.first-name');
firstName.addEventListener('change', () => {
    let b = document.querySelector('.warningOne');
    if (firstName.value.length < 3){
        b.textContent = 'First name must be alphanumeric and contain 3 - 16 characters';
    } else {
        firstName.style.border = '2px solid green';
        b.textContent = '';

    }
})

const lastName = document.querySelector('.last-name');
lastName.addEventListener('blur', () => {
    let b = document.querySelector('.warningTwo');
    if (lastName.value.length <= 3){
        b.textContent = 'First name must be alphanumeric and contain 3 - 16 characters';
    } else {
        b.textContent = '';
        lastName.style.border = '2px solid green';
    }
})

const email = document.querySelector('.email');
email.addEventListener('blur', () => {
    let b = document.querySelector('.warningThree');
    if (email.value.length > 3 && email.value.includes('@')){
        email.style.border = '2px solid green';
        b.textContent = '';

    } else {
        b.textContent = 'Email must be a valid address, e.g. example@example.com';
    }
})

const password = document.querySelector('.password');
password.addEventListener('blur', () => {
    let b = document.querySelector('.warningPassword');
    if (password.value.length < 7){
        b.textContent = 'Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters';
    } else {
        password.style.border = '2px solid green';
        b.textContent = '';
    }
})

const phone = document.querySelector('.phone');
phone.addEventListener('blur', () => {
    let p = document.querySelector('.warningPhone');
    if (phone.value.length != 11){
        p.textContent = 'A valid Telephone number (11 digits and 333-333-3334)';
    } else {
        phone.style.border = '2px solid green';
        b.textContent = '';

    }
})

const bio = document.querySelector('.bio');
bio.addEventListener('blur', () => {
    let p = document.querySelector('.warningBio');
    if (bio.value.length <= 8){
        p.textContent = 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters.';
    } else {
        bio.style.border = '2px solid green';
        b.textContent = '';

    }
})

const button = document.querySelector('button');
let isPressed = false;
button.addEventListener('mouseover', () => {
    let isSatisfied = firstName.value.length > 2 && lastName.value.length > 2 && email.value.length > 2 && email.value.includes('@');
    isSatisfied = isSatisfied && password.value.length > 7 && phone.value.length == 11 && bio.value.length > 9;
    if (isSatisfied){
        button.style.backgroundColor = 'green';
        button.style.border = '2px solid green';
    }
})
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'rgb(88, 84, 84)';
    button.style.border = '2px solid rgb(88,84,84)';
})
