const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_BONUS = 5;

finalScore.innerText = mostRecentScore;

initials.addEventListener("click", function() {
  saveScoreBtn.disabled = !initials.value;
});

saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: initials.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};