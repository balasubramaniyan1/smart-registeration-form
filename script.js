// DOM Elements
var form = document.getElementById("registrationForm");
var regName = document.getElementById("name");
var regEmail = document.getElementById("email");
var regPassword = document.getElementById("password");
var regBio = document.getElementById("bio");
var submitBtn = document.getElementById("submitBtn");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var charCounter = document.getElementById("charCounter");

var formCard = document.getElementById("formCard");
var ackCard = document.getElementById("ackCard");
var registeredName = document.getElementById("registeredName");
var backBtn = document.getElementById("backBtn");


// Validation State Tracking and used for submit
var validationState = {
    name: false,
    email: false,
    password: false
};

// Email Regex Pattern for validation getting through online
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time Validation Functions
function validateName() {
    if (regName.value.trim() === "") {
        nameError.textContent = "Name field cannot be empty.";
        validationState.name = false;
    } else {
        nameError.textContent = "";
        validationState.name = true;
    }
    submitButton();
}
// email Validation, test function used to search a char inside a value like @
function validateEmail() {
    if (!emailRegex.test(regEmail.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        validationState.email = false;
    } else {
        emailError.textContent = "";
        validationState.email = true;
    }
    submitButton();
}

function validatePassword() {
    if (regPassword.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        validationState.password = false;
    } else {
        passwordError.textContent = "";
        validationState.password = true;
    }
    submitButton();
}

// Bio character updation for count
function handleBioInput() {
    var currentLength = regBio.value.length;
    charCounter.textContent = `${currentLength} / 200 characters`;
    if (currentLength == 200) {
        alert("Max limit Reached in BIO");
    }
}

// Enable/Disable Submit Button
function submitButton() {
    if (validationState.name && validationState.email && validationState.password) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// Event Listeners for Real-time Interaction
regName.addEventListener('input', validateName);
regEmail.addEventListener('input', validateEmail);
regPassword.addEventListener('input', validatePassword);
regBio.addEventListener('input', handleBioInput);

// Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration Form Submitted Successfully!");

    // Name field in acknowledgement
    registeredName.textContent = regName.value;

    // Switch visible containers
    formCard.classList.add("hidden");
    ackCard.classList.remove("hidden");
});

// Reset button to allow testing multiple times
backBtn.addEventListener('click', function () {
    form.reset();
    charCounter.textContent = "0 / 200 characters";
    validationState.name = false;
    validationState.email = false;
    validationState.password = false;
    submitButton();

    ackCard.classList.add("hidden");
    formCard.classList.remove("hidden");
});