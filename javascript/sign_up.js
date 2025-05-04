function toggleForm(formId) {
    document.getElementById("signInForm").classList.add("hidden");
    document.getElementById("signUpForm").classList.add("hidden");
    document.getElementById(formId).classList.remove("hidden");
  }
  
  function signIn() {
    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;
  
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
  
    if (!password) {
      alert("Password cannot be empty.");
      return;
    }
  
    alert("Sign In Successful!");
  }
  
  function signUp() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
  
    if (!name) {
      alert("Full Name is required.");
      return;
    }
  
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
  
    if (!password) {
      alert("Password cannot be empty.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    alert("Sign Up Successful!");
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  