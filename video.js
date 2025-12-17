let player;
let resumeKey;
let courseKey;
let chapterIndex;

function initVideoPage() {
  // YouTube API will call onYouTubeIframeAPIReady
}

function onYouTubeIframeAPIReady() {
  loadVideo();
}

function loadVideo() {
  courseKey = localStorage.getItem("currentCourse");
  chapterIndex = parseInt(localStorage.getItem("currentChapter"));

  if (!courseKey || isNaN(chapterIndex)) {
    window.location.href = "courses.html";
    return;
  }

  const course = COURSES[courseKey];
  const videoId = course.videos[chapterIndex];

  document.getElementById("courseName").innerText = course.title;
  document.getElementById("courseCrumb").innerText = courseKey;
  document.getElementById("breadcrumbChapter").innerText =
    course.chapters[chapterIndex];

  resumeKey = courseKey + "_YT_TIME_" + chapterIndex;

  player = new YT.Player("player", {
    height: "400",
    width: "100%",
    videoId: videoId,
    playerVars: {
      rel: 0,
      modestbranding: 1,
      start: parseFloat(localStorage.getItem(resumeKey)) || 0
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });

  // Save watch position
  setInterval(() => {
    if (player && player.getCurrentTime) {
      localStorage.setItem(resumeKey, player.getCurrentTime());
    }
  }, 5000);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    markCompleted();
    localStorage.removeItem(resumeKey);
    document.getElementById("videoStatus").innerText =
      "✅ Chapter completed";
  }
}

function markCompleted() {
  let completed =
    JSON.parse(localStorage.getItem(courseKey)) || [];

  if (!completed.includes(chapterIndex)) {
    completed.push(chapterIndex);
    localStorage.setItem(courseKey, JSON.stringify(completed));
  }
}
