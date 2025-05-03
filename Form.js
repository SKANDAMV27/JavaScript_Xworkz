// function onClick() {
//     document.getElementById('nameId').innerHTML='min 3 letter max 20 letetr';

//     let dothis=document.getElementsByClassName('numberClass')[0].innerHTML='skanda';

//     document.getElementsByName('nameName')[0].innerHTML='Helloooo';

//     document.getElementsByTagName('tagName')[0].innerHTML='Sagar';

// }



function submitForm() {
    let val = true;

    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numberNumber.value;
    let emailId = document.formName.emailEmail.value;
    let genderId = document.formName.gender.value;
    let passwordId = document.formName.passwardPassward.value;
    let confirmId = document.formName.correctCorrect.value;

    
    if (nameInput.length < 3 || nameInput.length > 20) {
        val = false;
        setError('nameErrorId', "Name must be between 3 and 20 characters.");
    } else {
        clearField('nameErrorId');
    }

    if (numberInput.length !== 10 || isNaN(numberInput)) {
        val = false;
        setError('numberErrorId', "Number must be exactly 10 digits.");
    } else {
        clearField('numberErrorId');
    }
    if (ageInput < 18 || isNaN(ageInput)) {
        val = false;
        setError('ageErrorId', "Age must be 18 or above.");
    } else {
        clearField('ageErrorId');
    }
    if (emailId.length < 5 || emailId.length > 50 || !emailId.endsWith("@gmail.com")) {
        val = false;
        setError('emailErrorId', "Email must be 5-50 characters and end with @gmail.com.");
    } else {
        clearField('emailErrorId');
    }

    if (passwordId.length < 5 || passwordId.length > 40) {
        val = false;
        setError('passwordErrorId', "Password must be between 5 and 40 characters.");
    } else {
        clearField('passwordErrorId');
    }
    if (passwordId !== confirmId) {
        val = false;
        setError('confirmErrorId', "Passwords do not match.");
    } else {
        clearField('confirmErrorId');
    }

    if (!val) return false;

    let message = "Form Submitted Successfully!\n" +
        "Name: " + nameInput + "\n" +
        "Number: " + numberInput + "\n" +
        "Email: " + emailId + "\n" +
        "Gender: " + genderId + "\n" +
        "Password: " + passwordId + "\n" +
        "Confirm Password: " + confirmId + "\n" +
        "Age: " + ageInput;

    alert(message);
    return true;
}

function setError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearField(id) {
    document.getElementById(id).innerHTML = '';
}
