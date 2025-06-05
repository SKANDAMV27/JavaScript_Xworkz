function validate() {
    let val = true;
    let names = document.formName.nameName.value;
    let emails = document.formName.emailEmail.value;
    let passwods = document.formName.passwordPassword.value;
    let conformpasswords = document.formName.conformpasswords.value;

    let genders = document.formName.genderGender.value;
    if (names.length > 10) {
        alert('Form not get Submited')
        val = false;

    }

    else if (!emails.include('@') || !emails.include('.')) {
        alert('Invaid Email Address')
        val = false;
    }
    else if (passwods.length < 8) {
        alert('Password Must be more than 8 Characture')
        val = false;

    } else if (passwods !== conformpasswords) {
        alert('Password not match')
        val = false;

    }
    else
        alert('Form Submitted Sucessfully')

    return val;


}