//Check validity of each field
//if field is invalid change the border color to red
//if field is correct change the border color to green
// clicking on the 'create account' button begins the checks for password
//first name, last name, email, and phone-number should be checked instantaneously


//First name: only letters are allowed

//Last name: letters, dash and apostrophe are allowed

//Email: needs to follow email validation

//Phone number: only numbers are allowed

// Password, must contain small & large letter, number and a symbol. minimum 8 characters

// when password.length matches confirm.password. length run validation

// display validation error when password doesn't match

const firstName =       document.querySelector('#first_name');
const lastName =        document.querySelector('#last_name');
const email =           document.querySelector('#email');
const phoneNumber =     document.querySelector('#phone_number');
const password =        document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

const labels = [firstName, lastName, email, phoneNumber, password, confirmPassword];

const addValidityListeners = (element) => {
    element.addEventListener('keyup', () => {
        element.classList.remove('green-border', 'red-border', 'input-reset');
        if (element.value.length === 0) {
            element.classList.add('input-reset');
        } else if (!element.checkValidity()) {
            element.classList.add('red-border');
            addErrorMessage(element);
        } else {
            element.classList.add('green-border');
                if (element.parentNode.lastChild.nodeName.toLowerCase() === 'p') {
                    element.parentNode.lastChild.classList.add('correctedText');
                }
        }
        checkPasswordValidity(element);
    });
}

labels.forEach(addValidityListeners);

const firstNameError =          document.querySelector('.firstNameError');
const lastNameError =           document.querySelector('.lastNameError');
const emailError =              document.querySelector('.emailError');
const phoneNumberError =        document.querySelector('.phoneNumberError');
const passwordError =           document.querySelector('.passwordError');
const confirmPasswordError =    document.querySelector('.confirmPasswordError');

const firstNamePara =           document.createElement('p');
const lastNamePara =            document.createElement('p');
const emailPara =               document.createElement('p');
const phoneNumberPara =         document.createElement('p');
const passwordPara =            document.createElement('p');
const confirmPasswordPara =     document.createElement('p');
const confirmPasswordParaPass = document.createElement('p');

const passwordParaSmall =  document.createElement('p');
const passwordParaLarge =  document.createElement('p');
const passwordParaNumber = document.createElement('p');
const passwordParaUnique = document.createElement('p');
const passwordParaLength = document.createElement('p');




const addErrorMessage = function (element) {
    if (element == firstName  && element.parentNode.lastChild.nodeName !== 'p') {
        firstNamePara.textContent = 'Please use letters only'
        firstNamePara.classList.add('errorText');
        firstNameError.appendChild(firstNamePara);
    } else if (element == lastName && element.parentNode.lastChild.nodeName !== 'p') {
        lastNamePara.textContent = 'Please use letters, dashes, or apostrophes'
        lastNamePara.classList.add('errorText');
        lastNameError.appendChild(lastNamePara);
    } else if (element == email && element.parentNode.lastChild.nodeName !== 'p') {
        emailPara.textContent = 'Please use "example@email.com as a guideline'
        emailPara.classList.add('errorText');
        emailError.appendChild(emailPara);
    } else if (element == phoneNumber && element.parentNode.lastChild.nodeName !== 'p') {
        phoneNumberPara.textContent = '10-12 characters, numbers only'
        phoneNumberPara.classList.add('errorText');
        phoneNumberError.appendChild(phoneNumberPara);
    } else if (element == password && element.parentNode.lastChild.nodeName !== 'p') {
        passwordPara.textContent = "Password requirements:";
        passwordPara.classList.add('errorText');
        passwordError.appendChild(passwordPara);

        passwordParaSmall.textContent = "- small letter"
        passwordParaSmall.classList.add('errorText');
        passwordParaLarge.textContent = "- large letter"
        passwordParaLarge.classList.add('errorText');
        passwordParaNumber.textContent = "- number"
        passwordParaNumber.classList.add('errorText');
        passwordParaUnique.textContent = "- special character"
        passwordParaUnique.classList.add('errorText');
        passwordParaLength.textContent = "- 8+ characters long"
        passwordParaLength.classList.add('errorText');

        passwordError.appendChild(passwordParaSmall);
        passwordError.appendChild(passwordParaLarge);
        passwordError.appendChild(passwordParaNumber);
        passwordError.appendChild(passwordParaUnique);
        passwordError.appendChild(passwordParaLength);
    } else if (element == confirmPassword && element.parentNode.lastChild.nodeName !== 'p') {
        confirmPasswordPara.textContent = "Passwords do not match";
        confirmPasswordPara.classList.add('errorText');
        confirmPasswordError.appendChild(confirmPasswordPara);
    }
    if (element.parentNode.lastChild.classList.contains('correctedText')) {
        element.parentNode.lastChild.classList.remove('correctedText');
        element.parentNode.lastChild.classList.add('errorText');
    }
}

const checkPasswordValidity = () => {
    if (/[a-z]/.test(password.value)) {
        passwordParaSmall.classList.remove('errorText');
        passwordParaSmall.classList.add('correctedText');
    } else {
        passwordParaSmall.classList.remove('correctedText');
        passwordParaSmall.classList.add('errorText');
    }
    if (/[A-Z]/.test(password.value)) {
        passwordParaLarge.classList.remove('errorText');
        passwordParaLarge.classList.add('correctedText');
    } else {
        passwordParaLarge.classList.remove('correctedText');
        passwordParaLarge.classList.add('errorText');
    }
    if (/\d/.test(password.value)) {
        passwordParaNumber.classList.remove('errorText');
        passwordParaNumber.classList.add('correctedText');
    } else {
        passwordParaNumber.classList.remove('correctedText');
        passwordParaNumber.classList.add('errorText');
    }
    if (/[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?`~]/.test(password.value)) {
        passwordParaUnique.classList.remove('errorText');
        passwordParaUnique.classList.add('correctedText');
    } else {
        passwordParaUnique.classList.remove('correctedText');
        passwordParaUnique.classList.add('errorText');
    }
    if (/.{8,}/.test(password.value)) {
        passwordParaLength.classList.remove('errorText');
        passwordParaLength.classList.add('correctedText');
    } else {
        passwordParaLength.classList.remove('correctedText');
        passwordParaLength.classList.add('errorText');
    }
    if (confirmPassword.checkValidity()) {
        confirmPasswordError.lastChild.remove()
        confirmPasswordParaPass.textContent = "It's a match";
        confirmPasswordParaPass.classList.add('correctedText');
        confirmPasswordError.appendChild(confirmPasswordParaPass);
    }
}