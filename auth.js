function login() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("loginError");

  // Simple professional email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    error.innerText = "❌ Please enter both name and email";
    return;
  }

  if (!emailPattern.test(email)) {
    error.innerText = "❌ Please enter a valid email address";
    return;
  }

  // Clear error
  error.innerText = "";

  // Store user details
  localStorage.setItem("user_name", name);
  localStorage.setItem("user_email", email);

  window.location.href = "courses.html";
}
