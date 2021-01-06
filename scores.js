const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//MAP TAKES SCORE ARRAY AND TURNS IT INTO NEW ELEMENT (LIST)
highScoresList.innerHTML =
    highScores
    .map(score => {
    return `<dt class="high-score">${score.name} — ${score.score}</dt>`;
    })
    .join("");