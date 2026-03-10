# 🧠 Math Quiz Battle Arena

**Math Quiz Battle Arena** is an interactive web application where users can test their math skills through timed quizzes with different difficulty levels. Players can compete for top positions on the leaderboard and participate in the discussion forum.

🔗 **Live Demo:**  
https://mathquizbattlearena.netlify.app/

---

## 🚀 Features

- 🎯 **Multiple Difficulty Levels**
  - Easy
  - Medium
  - Hard

- ⏱ **Timed Quiz System**
  - Each question has a countdown timer.

- 🧮 **Random Math Question Generator**
  - Addition
  - Subtraction
  - Multiplication
  - Division
  - Mixed operations

- 🅰️ **Multiple Choice Answers**
  - A / B / C / D format.

- 📊 **Leaderboard**
  - Stores player scores.
  - Ranks players based on score and time.

- 💬 **Discussion Forum**
  - Players can post comments.
  - Messages are stored locally.

- 👤 **User System**
  - Enter name before playing.
  - Name appears on leaderboard and forum.

- 📱 **Responsive Design**
  - Works on desktop and mobile.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **LocalStorage API**
- **Google Fonts**
- **Netlify (Deployment)**

---

## 📂 Project Structure

```
Math-Quiz-Battle-Arena
│
├── assets
│   ├── logo.png
│   └── Video.mp4
│
├── CSS
│   ├── style.css
│   ├── index.css
│   ├── levels.css
│   ├── quiz.css
│   ├── leaderboard.css
│   ├── forum.css
│   └── result.css
│
├── JS
│   ├── main.js
│   ├── quiz.js
│   ├── leaderboard.js
│   ├── forum.js
│   └── result.js
│
├── index.html
├── levels.html
├── quiz.html
├── leaderboard.html
├── forum.html
└── result.html
```

---

### Description

| Folder/File | Purpose |
|-------------|--------|
| **assets/** | Stores images, logos, and video background |
| **CSS/** | Contains all styling files for different pages |
| **JS/** | Contains JavaScript logic for quiz, leaderboard, forum, and main functionality |
| **index.html** | Homepage of the application |
| **levels.html** | Difficulty selection and player name input |
| **quiz.html** | Quiz gameplay interface |
| **leaderboard.html** | Displays top players and rankings |
| **forum.html** | Discussion area for players |
| **result.html** | Displays quiz results after completion |
---

## 🎮 How the Quiz Works

1. Enter your name on the **difficulty selection page**.
2. Choose a difficulty level.
3. Answer **10 questions**.
4. Each question has a **10-second timer**.
5. Score is calculated based on:
   - Correct answers
   - Total time taken
6. Your score is saved to the **leaderboard**.

---

## 💾 Data Storage

The project uses **LocalStorage** to store:

- Player name
- Quiz scores
- Leaderboard rankings
- Forum comments

This allows the app to function **without a backend server**.

---

## 📦 Installation (Run Locally)

Clone the repository:

```bash
git clone https://github.com/yourusername/math-quiz-battle-arena.git
```

