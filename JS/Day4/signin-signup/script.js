// ===============================
// 1. GET HTML ELEMENTS
// ===============================

const showSignIn = document.getElementById("showSignIn");
const showSignUp = document.getElementById("showSignUp");

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");


// ===============================
// 2. SWITCH BETWEEN FORMS
// ===============================

showSignIn.addEventListener("click", function () {
  signInForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");

  showSignIn.classList.add("active");
  showSignUp.classList.remove("active");
});

showSignUp.addEventListener("click", function () {
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");

  showSignUp.classList.add("active");
  showSignIn.classList.remove("active");
});


// ===============================
// 3. SIGN IN VALIDATION
// ===============================

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Get error elements
  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");
  const success = document.getElementById("loginSuccess");

  // Clear previous messages
  emailError.textContent = "";
  passwordError.textContent = "";
  success.textContent = "";

  let isValid = true;

  // Check email
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Check password
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  }

  // Show success
  if (isValid) {
    success.textContent = "Sign In form validated successfully!";
  }
});


// ===============================
// 4. SIGN UP VALIDATION
// ===============================

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Get error elements
  const nameError = document.getElementById("signupNameError");
  const emailError = document.getElementById("signupEmailError");
  const passwordError = document.getElementById("signupPasswordError");
  const confirmError = document.getElementById("confirmPasswordError");
  const success = document.getElementById("signupSuccess");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  success.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword === "") {
    confirmError.textContent = "Please confirm your password";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  // Show success
  if (isValid) {
    success.textContent = "Sign Up form validated successfully!";
  }
});