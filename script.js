function calculateScores() {
    const tytCorrectAnswers = parseInt(document.getElementById("tyt-correct-answers").value);
    const aytCorrectAnswers = parseInt(document.getElementById("ayt-correct-answers").value);
    const ydtCorrectAnswers = parseInt(document.getElementById("ydt-correct-answers").value);
    const schoolGrade = parseFloat(document.getElementById("school-grade").value);
  
    const tytScore = calculateTYT(tytCorrectAnswers);
    const aytScore = calculateAYT(aytCorrectAnswers);
    const ydtScore = calculateYDT(ydtCorrectAnswers);
    const schoolScore = calculateSchoolScore(schoolGrade);
  
    document.getElementById("tyt-score").textContent = tytScore;
    document.getElementById("ayt-score").textContent = aytScore;
    document.getElementById("ydt-score").textContent = ydtScore;
    document.getElementById("school-score").textContent = schoolScore;
  
    const totalScore = tytScore + aytScore + ydtScore + schoolScore;
    document.getElementById("total-score").textContent = totalScore;
  }
  function calculateScores() {
    const tytCorrectAnswers = parseInt(document.getElementById("tyt-correct-answers").value);
    const aytCorrectAnswers = parseInt(document.getElementById("ayt-correct-answers").value);
    const ydtCorrectAnswers = parseInt(document.getElementById("ydt-correct-answers").value);
    const schoolGrade = parseFloat(document.getElementById("school-grade").value);
  
    const tytScore = calculateTYT(tytCorrectAnswers);
    const aytScore = calculateAYT(aytCorrectAnswers);
    const ydtScore = calculateYDT(ydtCorrectAnswers);
    const schoolScore = calculateSchoolScore(schoolGrade);
  
    document.getElementById("tyt-score").textContent = tytScore;
    document.getElementById("ayt-score").textContent = aytScore;
    document.getElementById("ydt-score").textContent = ydtScore;
    document.getElementById("school-score").textContent = schoolScore;
  
    const totalScore = tytScore + aytScore + ydtScore + schoolScore;
    document.getElementById("total-score").textContent = totalScore;
  }
  
  function calculateTYT(correctAnswers) {
    return 100 + (correctAnswers * 3);
  }
  
  function calculateAYT(correctAnswers) {
    return 100 + (correctAnswers * 3.33);
  }
  
  function calculateYDT(correctAnswers) {
    return 100 + (correctAnswers * 3.33);
  }
  
  function calculateSchoolScore(grade) {
    return grade * 100;
  }
    