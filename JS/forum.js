if (document.getElementById("post")) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let container = document.getElementById("container");
    let player = localStorage.getItem("playerName") || "Anonymous";

    function showComments() {
        container.innerHTML = "<p id='count'></p>";
        comments.forEach(c => {
            let div = document.createElement("div");
            div.className = "comment";
            div.innerHTML = "<strong>" + c.name + "</strong>" + c.text;
            container.appendChild(div);
        });
    }

    document.getElementById("post").onclick = function () {
        let input = document.getElementById("comment");
        let text = input.value.trim();
        if (text === "") return;

        comments.push({ name: player, text: text });

        localStorage.setItem("comments", JSON.stringify(comments));
        input.value = "";
        showComments();
        updateCommentCount();
    };

    showComments();
    updateCommentCount();
}
function updateCommentCount() {
    let counter = document.getElementById("count");
    if (!counter) return;

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    counter.textContent = "💬 " + comments.length + " Comments";
}
