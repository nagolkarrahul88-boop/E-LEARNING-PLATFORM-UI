function loadCertificate() {
  const downloadBtn = document.querySelector(".download-btn");
  downloadBtn.style.display = "none"; // hide by default

  const courseKey = localStorage.getItem("currentCourse");

  if (!courseKey || !COURSES || !COURSES[courseKey]) {
    document.getElementById("certMessage").innerText =
      "❌ Invalid access. Please complete a course.";
    return;
  }

  const completed = JSON.parse(localStorage.getItem(courseKey)) || [];
  const passed = localStorage.getItem(courseKey + "_ASSESSMENT");
  const total = COURSES[courseKey].chapters.length;
  const name = localStorage.getItem("user_name");

  if (completed.length !== total || passed !== "passed") {
    document.getElementById("certMessage").innerText =
      "❌ Certificate locked. Complete course & assessment.";
    return;
  }

  // ✅ UNLOCK
  document.getElementById("certificate").style.display = "block";
  downloadBtn.style.display = "inline-block";

  document.getElementById("studentName").innerText = name;
  document.getElementById("courseCertName").innerText =
    COURSES[courseKey].title;

  document.getElementById("certDate").innerText =
    new Date().toLocaleDateString();

  const certId =
    "CODTECH-" + courseKey + "-" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("certId").innerText = certId;
  localStorage.setItem("CERTIFICATE_ID", certId);
}
function downloadCertificate() {
  // Print only certificate (works like download / save as PDF)
  window.print();
}
