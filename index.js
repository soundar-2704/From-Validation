
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const contact = document.querySelector("#contact");
const address = document.querySelector("#address");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

const errorNodes = document.querySelectorAll(".error");

function ValidateForm() {
    clearmessage();
    let errorFlag = false;

    if (nameInput.value == "") {
        errorNodes[0].innerText = "Name cannot be blank";
        errorFlag = true;
    }
    
    if (email.value.length < 1) {
        errorNodes[1].innerText = "Email cannot be blank";
        errorFlag = true;
    } else if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid Email";
        errorFlag = true;
    }
    
    if (password.value.length < 6 || !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/\d/.test(password.value)) {
        errorNodes[2].innerText = "Password must contain at least one number, one uppercase and lowercase letter, and be at least 6 characters";
        errorFlag = true;
    }
    
    if (contact.value.length < 10 || !/^\d+$/.test(contact.value)) {
        errorNodes[3].innerText = "Enter a valid contact number";
        errorFlag = true;
    }
    
    if (address.value == "") {
        errorNodes[4].innerText = "Fill in the full address";
        errorFlag = true;
    }
    
    if (message.value == "") {
        errorNodes[5].innerText = "Message cannot be blank";
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Form validation successful!";
        clearInputs();
    }
}

function clearmessage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
}

function clearInputs() {
    nameInput.value = "";
    email.value = "";
    password.value = "";
    contact.value = "";
    address.value = "";
    message.value = "";
}

function emailIsValid(k1) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(k1);
}
