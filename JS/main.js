function startQuiz(level) {

    let name = document.getElementById("playerName").value;

    if (name.trim() === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name";

        return;
    }

    localStorage.setItem("playerName", name);

    window.location.href = "quiz.html?level=" + level;
}

let userArea = document.getElementById("userArea");
let navUser = document.getElementById("navUser");

if (userArea && navUser) {

    let player = localStorage.getItem("playerName");

    if (player) {
        navUser.textContent = player;

        userArea.onclick = function () {
            if (confirm("Logout?")) {
                localStorage.removeItem("playerName");
                location.reload();
            }
        };

    } else {
        navUser.textContent = "Sign In";

        userArea.onclick = function () {
            window.location.href = "levels.html";
        };
    }
}