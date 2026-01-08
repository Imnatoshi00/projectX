function toggleMode() {
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mode");

  // Optional: toggle icon 🌙 ↔ ☀️
  const btn = document.querySelector(".toggle-btn");
  if(container.classList.contains("dark-mode")){
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}


function goToWelcome() {
  window.location.href = "welcome.html";
}
function signUp() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
    return;
  }

  // If validation passes
  window.location.href = "welcome.html";
}
function signUp() {
  const signupBtn = document.getElementById("signupBtn");

  // Change button text to show action
  signupBtn.textContent = "Signing Up...";
  signupBtn.disabled = true; // prevent double clicks

  // Simulate form processing (like a server request)
  setTimeout(() => {
    // Redirect to welcome page after "processing"
    window.location.href = "welcome.html";
  }, 1500); // 1.5 seconds delay
}
  function registerNewAccount() {
    // Redirect to your sign-up page
    window.location.href = "signup.html";
  }