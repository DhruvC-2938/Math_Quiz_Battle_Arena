let finalScore = Number(localStorage.getItem("lastScore"));
let playerName = localStorage.getItem("playerName");

if (document.getElementById("final_score")) {

    document.getElementById("final_score").textContent = finalScore || 0;
    document.getElementById("name").textContent = "Player: " + playerName;

    let message = "";

    if (finalScore >= 8) {
        message = "🔥 Excellent Work!";
    }

    else if (finalScore >= 5) {
        message = "👍 Good Job!";
    }

    else {
        message = "💪 Keep Practicing!";
    }

    document.getElementById("result").textContent = message;
}