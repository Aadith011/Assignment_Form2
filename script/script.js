function validate() {
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = '';

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name === "") {
        errorMessageDiv.textContent = "Name is required.";
        return false
    } else if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/.test(phone)) {
        errorMessageDiv.textContent = "Please enter a valid phone number.";
        return false
    } else if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        errorMessageDiv.textContent = "Please enter a valid email address.";
        return false
    } else {
        errorMessageDiv.textContent = "";
        return true
    }
}