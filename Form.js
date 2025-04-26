function onClick() {
    alert("Sumitted")
}
function submitForm() {
    
    let val = true;

    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numberNumber.value;

    if (nameInput.length < 3 || nameId.length > 20) {
        val = flase;
        
    } 
    if (numberInput.length !=10) {
        val= false;

    }
    if (ageInput < 18) {
        val =fales;
    }
     let emailId = document.formName.emailEmail.value;
     let genderId = document.formName.gender.value;
     let passwardId = document.formName.passwardPassward.value;
     let correctId = document.formName.correctCorrect.value;
     let message = "Form Submitted Successfully!\n" +
         "Name: " + nameInput + "\n" +
         "Number: " + numberInput + "\n" +
         "Email: " + emailId + "\n" + "Gender: " + genderId +
         "\n" + "Passward: " + passwardId + "\n " + "Conform Passward: " + correctId + "\n" + "Age: " + ageInput;

    alert(message);
     return val;
}
// function clearForm() {

// }
