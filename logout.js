function logout() {
    if (!confirm("Are you sure you want to logout?")) return;
  
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("currentCourse");
  
    window.location.href = "index.html";
  }
  