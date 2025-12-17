function verifyCertificate() {
    const enteredId = document.getElementById("verifyId").value.trim();
    const storedId = localStorage.getItem("CERTIFICATE_ID");
    const name = localStorage.getItem("user_name");
  
    const resultDiv = document.getElementById("verifyResult");
  
    if (!enteredId) {
      resultDiv.innerHTML =
        "<p style='color:red'>❌ Please enter a Certificate ID.</p>";
      return;
    }
  
    if (enteredId === storedId) {
      resultDiv.innerHTML = `
        <p style="color:green; font-weight:bold">✅ Certificate is VALID</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> HTML Course</p>
      `;
    } else {
      resultDiv.innerHTML =
        "<p style='color:red; font-weight:bold'>❌ Invalid Certificate ID</p>";
    }
  }
  