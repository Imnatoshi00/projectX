/* 🌙 Dark Mode Toggle */
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector(".toggle-btn");
  if (!btn) return;

  btn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
}

/* 🔐 Sign Up Validation + Redirect */
function signUp() {
  const password = document.getElementById("password")?.value || "";
  const confirmPassword = document.getElementById("confirmPassword")?.value || "";
  const errorMsg = document.getElementById("errorMsg");
  const signupBtn = document.getElementById("signupBtn");

  if (errorMsg) errorMsg.textContent = "";

  if (password !== confirmPassword) {
    if (errorMsg) errorMsg.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 6) {
    if (errorMsg) errorMsg.textContent = "Password must be at least 6 characters!";
    return;
  }

  // Button loading state (optional)
  if (signupBtn) {
    signupBtn.textContent = "Signing Up...";
    signupBtn.disabled = true;
  }

  // Simulate server delay
  setTimeout(() => {
    window.location.href = "welcome.html";
  }, 1500);
}

/* 📝 Register new account */
function registerNewAccount() {
  window.location.href = "signup.html";
}

/* 👋 Go to Welcome page */
function goToWelcome() {
  window.location.href = "welcome.html";
}
