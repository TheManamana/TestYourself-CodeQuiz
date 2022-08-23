


var highscoresEl = document.getElementById('highscores');
var clearBtnEl = document.getElementById('clearScores');

postScores();

clearBtnEl.onclick = clearHighscores;

function postScores() {
    var highscores = JSON.parse(window.localStorage.getItem('scores')) || [];

    highscores.sort(function (a, b) {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }

        return 0;

    });

    for (var i = 0; i < highscores.length; i++) {

        var listItem = document.createElement('li');
        listItem.textContent = highscores[i].name + ' : ' + highscores[i].score;

        highscoresEl.appendChild(listItem);
    }
}
function clearHighscores() {
    window.localStorage.removeItem('scores');
    window.location.reload();
}






