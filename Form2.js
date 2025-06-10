function validate() {
    let val = true;

    let names = document.formName.nameName.value.trim();
    let emails = document.formName.emailEmail.value.trim();
    let passwords = document.formName.passwordPassword.value;
    let confirmPasswords = document.formName.conformpasswords.value;

    const gender = document.querySelector('input[name="genderGender"]:checked');
    const programs = document.querySelectorAll('input[name="languageLanguage"]:checked');
    const programs1 = Array.from(programs).map(e => e.value);
    console.log('programs1',programs1)

    if (names.length < 10) {
        val = false;
        alert('Name must be at least 10 characters long.');
    } else if (!emails.includes('@') || !emails.includes('.')) {
        val = false;
        alert('Invalid Email Address. It must include "@" and "."');
    } else if (passwords.length < 8) {
        val = false;
        alert('Password must be at least 8 characters long.');
    } else if (passwords !== confirmPasswords) {
        val = false;
        alert('Passwords do not match.');
    } else if (selectedPrograms.length === 0) {
        val = false;
        alert('Please select at least one programming language.');
    } else if (!gender) {
        val = false;
        alert('Please select your gender.');
    } else {
        alert(
            'Form Submitted Successfully!\n\n' +
            'Name: ' + names + '\n' +
            'Email: ' + emails + '\n' +
            'Password: ' + passwords + '\n' +
            'Gender: ' + gender.value + '\n' +
            'Languages: ' + selectedPrograms.join(', ')
        );
    }

    return val;
}
