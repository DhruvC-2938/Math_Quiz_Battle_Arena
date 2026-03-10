let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
});
let body = document.getElementById("leaderboard_body");
if (body) {
    leaderboard.forEach((player, index) => {
        if (index === 0) {
            document.getElementById("first_name").textContent = "Name: " + player.name;
            document.getElementById("first_score").textContent = "Score: " + player.score;
        }
        else if (index === 1) {
            document.getElementById("second_name").textContent = "Name: " + player.name;
            document.getElementById("second_score").textContent = "Score: " + player.score;
        }
        else if (index === 2) {
            document.getElementById("third_name").textContent = "Name: " + player.name;
            document.getElementById("third_score").textContent = "Score: " + player.score;
        }
        else {
            let row = document.createElement("tr");
            row.innerHTML =
                `<td>${index + 1}</td>
                 <td>${player.name}</td>
                 <td>${player.score}</td>
                 <td>${player.time}s</td>`;
            body.appendChild(row);
        }
    });
}