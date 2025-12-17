// let player, resumeKey, chapterIndex;

// function onYouTubeIframeAPIReady() {
//   const courseKey = localStorage.getItem("currentCourse");
//   const course = courses[courseKey];

//   chapterIndex = parseInt(localStorage.getItem("currentChapter"));
//   resumeKey = `${courseKey}_YT_${chapterIndex}`;

//   document.getElementById("courseName").innerText = course.title;
//   document.getElementById("breadcrumbChapter").innerText =
//     course.chapters[chapterIndex];

//   player = new YT.Player("player", {
//     videoId: course.videos[chapterIndex],
//     playerVars: { start: parseFloat(localStorage.getItem(resumeKey)) || 0 },
//     events: { onStateChange }
//   });

//   setInterval(() => {
//     if (player?.getCurrentTime)
//       localStorage.setItem(resumeKey, player.getCurrentTime());
//   }, 5000);
// }

// function onStateChange(e) {
//   if (e.data === 0) {
//     const courseKey = localStorage.getItem("currentCourse");
//     let done = JSON.parse(localStorage.getItem(courseKey)) || [];
//     if (!done.includes(chapterIndex)) done.push(chapterIndex);
//     localStorage.setItem(courseKey, JSON.stringify(done));
//     localStorage.removeItem(resumeKey);
//     document.getElementById("videoStatus").innerText = "✅ Completed";
//   }
// }
