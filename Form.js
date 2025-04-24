function onClick(){
    alert("Sumitted")
}
function submitForm(Event)
{
    Event.preventdefault();
    let value=true;

    let nameId = document.formName.nameName.value;
    let numberId = document.formName.numberNumber.value;
    let emailId = document.formName.emailEmail.value;
    let message = "Form Submitted Successfully!\n\n" +
                  "Name: " + nameId + "\n" +
                  "Number: " + numberId + "\n" +
                  "Email: " + emailId;

    alert(message);
    return value;
}
function clearForm(){
    
}