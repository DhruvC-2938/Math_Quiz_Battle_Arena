let score = 0;
let totalTime = 0;
let questionCount = 0;
let totalQuestions = 10;
let correctAnswer;
let timer;
let timeLeft = 10;
const params = new URLSearchParams(window.location.search);
const level = params.get("level");

function startQuiz(level) {
    let name = document.getElementById("playerName").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        return;
    }
    localStorage.setItem("playerName", name);
    window.location.href = "quiz.html?level=" + level;
}

function generateEasy() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let operator = Math.random() < 0.5 ? "+" : "-";
    let question;
    let answer;
    if (operator === "+") {
        question = `${a} + ${b}`;
        answer = a + b;
    } else {
        question = `${a} - ${b}`;
        answer = a - b;
    }
    return { question, answer };
}

function generateMedium() {
    let a = Math.floor(Math.random() * 12) + 1;
    let b = Math.floor(Math.random() * 12) + 1;
    let operator = Math.random() < 0.5 ? "×" : "÷";
    let question;
    let answer;
    if (operator === "×") {
        question = `${a} × ${b}`;
        answer = a * b;
    } else {
        answer = a;
        let product = a * b;
        question = `${product} ÷ ${b}`;
    }
    return { question, answer };
}

function generateHard() {
    let a = Math.floor(Math.random() * 20) + 5;
    let b = Math.floor(Math.random() * 10) + 2;
    let c = Math.floor(Math.random() * 10) + 1;
    let patterns = [
        `${a}+(${b}×${c})`,
        `(${a}×${b})-${c}`,
        `(${a}+${b})×${c}`
    ];
    let answers = [
        a + (b * c),
        (a * b) - c,
        (a + b) * c
    ];
    let index = Math.floor(Math.random() * patterns.length);
    return { question: patterns[index], answer: answers[index] };
}

function getQuestion() {
    if (level === "easy") return generateEasy();
    if (level === "medium") return generateMedium();
    if (level === "hard") return generateHard();
    return generateEasy();
}

function generateOptions(correct) {
    let options = [correct];
    while (options.length < 4) {
        let fake = correct + Math.floor(Math.random() * 10) - 5;
        if (!options.includes(fake)) {
            options.push(fake);
        }
    }
    options.sort(() => Math.random() - 0.5);
    return options;
}

function startTimer() {
    timeLeft = 10;
    let timerElement = document.getElementById("timer");
    if (timerElement) timerElement.textContent = "Time: " + timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        if (timerElement) timerElement.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            totalTime += 10 - timeLeft;
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    if (questionCount >= totalQuestions) {
        localStorage.setItem("lastScore", score);
        let name = localStorage.getItem("playerName");
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboard.push({ name: name, score: score, time: totalTime });
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        window.location.href = "result.html";
        return;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.classList.remove("correct", "wrong", "disabled");
        option.disabled = false;
    });

    questionCount++;
    let number = document.getElementById("number");
    if (number) number.textContent = "Question " + questionCount;

    let q = getQuestion();
    correctAnswer = q.answer;

    let question = document.getElementById("question");
    if (question) question.textContent = q.question;

    let options = generateOptions(correctAnswer);

    let o1 = document.getElementById("option1");
    let o2 = document.getElementById("option2");
    let o3 = document.getElementById("option3");
    let o4 = document.getElementById("option4");

    if (o1) o1.textContent = 'A. ' + options[0];
    if (o2) o2.textContent = 'B. ' + options[1];
    if (o3) o3.textContent = 'C. ' + options[2];
    if (o4) o4.textContent = 'D. ' + options[3];

    updateProgress();
    startTimer();
}

document.querySelectorAll(".option").forEach(btn => {
    btn.onclick = function () {
        totalTime += (10 - timeLeft);
        clearInterval(timer);

        document.querySelectorAll(".option").forEach(option => {
            option.disabled = true;
            option.classList.add("disabled");
        });

        let selected = Number(this.textContent.split(". ")[1]);

        if (selected === correctAnswer) {
            this.classList.add("correct");
            score++;
            document.getElementById("score").textContent = "Score: " + score;
        } else {
            this.classList.add("wrong");

            document.querySelectorAll(".option").forEach(option => {
                if (Number(option.textContent.split(". ")[1]) === correctAnswer) {
                    option.classList.add("correct");
                }
            });
        }

        setTimeout(nextQuestion, 800);
    };
});

function nextQuestion() {
    setTimeout(() => {
        loadQuestion();
    }, 500);
}

function updateProgress() {
    let progress = (questionCount / totalQuestions) * 100;
    let bar = document.getElementById("progress");
    if (bar) bar.style.width = progress + "%";
}

if (document.getElementById("question")) {
    loadQuestion();
}