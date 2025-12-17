const QUESTIONS = {
    HTML: {
      title: "HTML Final Assessment",
      list: [
        { q: "What does HTML stand for?", o: ["HighText Machine Language", "HyperText Markup Language", "HyperTool Multi Language"], a: "b" },
        { q: "Which tag is used for hyperlinks?", o: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;"], a: "b" },
        { q: "Which tag is used for line break?", o: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;"], a: "a" }
      ]
    },
  
    CSS: {
      title: "CSS Final Assessment",
      list: [
        { q: "Which selector selects all <p> inside <div>?", o: ["div + p", "div > p", "div p", "div ~ p"], a: "c" },
        { q: "Immediate next sibling selector?", o: [">", "+", "~", "space"], a: "b" },
        { q: "Focused input pseudo-class?", o: [":hover", ":active", ":focus", ":checked"], a: "c" },
        { q: "Insert content before?", o: [":before", "::after", "::before", ":first-line"], a: "c" },
        { q: "Viewport width unit?", o: ["em", "%", "vw", "px"], a: "c" }
      ]
    },
  
    JS: {
      title: "JavaScript Final Assessment",
      list: [
        { q: "Which symbol ends a JS statement?", o: [":", ";", ".", ","], a: "b" },
        { q: "Which keyword cannot be reassigned?", o: ["var", "let", "const", "static"], a: "c" },
        { q: "Boolean data type stores?", o: ["String", "Number", "Boolean", "Object"], a: "c" },
        { q: "Strict equality operator?", o: ["=", "==", "===", "!="], a: "c" },
        { q: "Runs when condition is true?", o: ["for", "while", "if", "switch"], a: "c" }
      ]
    }
  };
  
  window.onload = () => {
    const course = localStorage.getItem("currentCourse");
    if (!course || !QUESTIONS[course]) return;
  
    document.getElementById("assessmentTitle").innerText =
      QUESTIONS[course].title;
  
    renderQuestions(course);
  };
  
  function renderQuestions(course) {
    const box = document.getElementById("questions");
    box.innerHTML = "";
  
    QUESTIONS[course].list.forEach((q, i) => {
      box.innerHTML += `
        <h3>${i + 1}. ${q.q}</h3>
        ${q.o.map((opt, idx) => `
          <label>
            <input type="radio" name="q${i}" value="${String.fromCharCode(97 + idx)}">
            ${opt}
          </label>
        `).join("")}
      `;
    });
  
    document.querySelectorAll("input[type=radio]").forEach(r =>
      r.addEventListener("change", enableSubmit)
    );
  }
  
  function enableSubmit() {
    const course = localStorage.getItem("currentCourse");
    const total = QUESTIONS[course].list.length;
  
    const allAnswered = [...Array(total).keys()].every(i =>
      document.querySelector(`input[name="q${i}"]:checked`)
    );
  
    document.getElementById("submitBtn").disabled = !allAnswered;
  }
  
  function submitAssessment() {
    const course = localStorage.getItem("currentCourse");
    let score = 0;
  
    QUESTIONS[course].list.forEach((q, i) => {
      const ans = document.querySelector(`input[name="q${i}"]:checked`);
      if (ans && ans.value === q.a) score++;
    });
  
    if (score >= Math.ceil(QUESTIONS[course].list.length * 0.7)) {
      localStorage.setItem(course + "_ASSESSMENT", "passed");
      document.getElementById("result").innerHTML =
        "<span style='color:green'>✅ Assessment Passed</span>";
      document.getElementById("viewCertBtn").style.display = "inline-block";
    } else {
      document.getElementById("result").innerHTML =
        "<span style='color:red'>❌ Assessment Failed</span>";
    }
  }
  
  function goToCertificate() {
    window.location.href = "certificate.html";
  }
  