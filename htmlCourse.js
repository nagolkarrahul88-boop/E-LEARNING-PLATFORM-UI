function loadCourse() {
  const courseKey = localStorage.getItem("currentCourse");
  const course = courses[courseKey];
  const completed = JSON.parse(localStorage.getItem(courseKey)) || [];

  document.querySelector("h1").innerText = course.title;

  const container = document.getElementById("chapterList");
  container.innerHTML = "";

  course.chapters.forEach((ch, i) => {
    const status = completed.includes(i) ? "✅ Completed" : "⏳ Pending";
    container.innerHTML += `
      <div class="card">
        <h3>${ch}</h3>
        <p>${status}</p>
        <button onclick="openChapter(${i})">Open</button>
      </div>`;
  });
}

function openChapter(i) {
  localStorage.setItem("currentChapter", i);
  window.location.href = "video.html";
}
