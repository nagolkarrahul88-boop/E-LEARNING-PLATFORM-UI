function getCourseProgress(courseKey) {
  const completed = JSON.parse(localStorage.getItem(courseKey)) || [];
  const total = COURSES[courseKey].chapters.length;

  let percent = Math.floor((completed.length / total) * 90);

  const assessmentKey = courseKey + "_ASSESSMENT";
  if (completed.length === total &&
      localStorage.getItem(assessmentKey) === "passed") {
    percent = 100;
  }

  return percent;
}
