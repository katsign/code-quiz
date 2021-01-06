const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

inlineFormInputName2.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !inlineFormInputName2.value;
});

saveHighScore = (e) => {
    e.preventDefault();

const score = {
    score: mostRecentScore,
    name: inlineFormInputName2.value
};
//THESE SORT & CAP THE LOCAL STORAGE ENTRIES TO THE TOP 5 SCORES
highScores.push(score);
highScores.sort( (a,b) => b.score - a.score)
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/scores.html");
console.log(highScores);
};