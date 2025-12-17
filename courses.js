function loadCourses() {
  const container = document.getElementById("courseList");
  container.innerHTML = "";

  for (let key in COURSES) {
    const percent = getCourseProgress(key);

    container.innerHTML += `
      <div class="card">
        <h3>${COURSES[key].title}</h3>

        <div class="progress-container">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
        <p class="small-text">${percent}% completed</p>

        <button onclick="openCourse('${key}')">Open</button>
      </div>
    `;
  }
}

function openCourse(courseKey) {
  localStorage.setItem("currentCourse", courseKey);
  window.location.href = "course.html";
}

window.onload = loadCourses;
