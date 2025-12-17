function loadCourse() {
    const key = localStorage.getItem("currentCourse");
    const course = COURSES[key];
    const completed = JSON.parse(localStorage.getItem(key)) || [];
  
    document.getElementById("courseTitle").innerText = course.title;
    document.getElementById("courseCrumb").innerText = key;
  
    const container = document.getElementById("chapterList");
    container.innerHTML = "";
  
    course.chapters.forEach((chapter, index) => {
      const status = completed.includes(index)
        ? "✅ Completed"
        : "⏳ Pending";
  
      container.innerHTML += `
        <div class="card">
        <div> <h3>${chapter}</h3></div>
        <div> <p>Status: ${status}</p> </div>
        <div> <button onclick="openChapter(${index})">Open Chapter</button> </div>
        </div>
      `;
    });
  }
  
  function openChapter(index) {
    localStorage.setItem("currentChapter", index);
    window.location.href = "video.html";
  }
  