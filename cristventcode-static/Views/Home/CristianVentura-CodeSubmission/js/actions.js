var myForm = document.getElementById("my-form"),
    errorMsg = document.getElementById("error-msg");

function validateForm() {
    var x = document.forms["my-form"]["firstName"].value;
    if (x == "") {
        errorMsg.innerText = "All fields must contain a value"
        return false;
    }
}