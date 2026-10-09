const questions = [
    {
        question: "You receive an email saying your bank account will be blocked in 10 minutes. What should you do?",
        answers: [
            "Click the link immediately",
            "Reply with your password",
            "Contact the bank through its official website or number",
            "Forward the email to friends"
        ],
        correct: 2,
        explanation: "Correct! Verify the message independently using the bank's official contact details."
    },
    {
        question: "Which is a common warning sign of phishing?",
        answers: [
            "An unexpected urgent request for sensitive information",
            "A message you were expecting from a known contact",
            "A website you opened using a saved bookmark",
            "A regular software update from an official app"
        ],
        correct: 0,
        explanation: "Unexpected urgency and requests for sensitive information are common phishing warning signs."
    },
    {
        question: "A stranger asks you to share an OTP to verify your identity. What should you do?",
        answers: [
            "Share it if they sound professional",
            "Share only half of the OTP",
            "Ask them to send another OTP",
            "Never share it and verify the request independently"
        ],
        correct: 3,
        explanation: "Never disclose an OTP to someone who requests it. Contact the service through an official channel."
    },
    {
        question: "What is social engineering?",
        answers: [
            "Building a secure computer network",
            "Manipulating people into revealing information or taking unsafe actions",
            "Updating computer software",
            "Encrypting a file"
        ],
        correct: 1,
        explanation: "Social engineering uses manipulation, trust, fear, or urgency to influence people."
    },
    {
        question: "What should you do if you accidentally click a suspicious link?",
        answers: [
            "Enter your details to check whether it works",
            "Ignore every warning from your browser",
            "Close the page, report the incident, and take appropriate security steps",
            "Forward the link to other people"
        ],
        correct: 2,
        explanation: "Stop interacting with the page and report the incident. If you entered credentials, change them using the official website and contact your IT or security team if applicable."
    }
];

const progress = document.getElementById("quiz-progress");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const quizContent = document.getElementById("quiz-content");
const quizResult = document.getElementById("quiz-result");
const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    answered = false;

    const item = questions[currentQuestion];

    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = item.question;
    answersElement.replaceChildren();
    feedbackElement.textContent = "";
    nextButton.hidden = true;

    item.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;

    const item = questions[currentQuestion];
    const answerButtons = answersElement.querySelectorAll(".answer-btn");

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === item.correct) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === item.correct) {
        score++;
        feedbackElement.textContent = "Correct! " + item.explanation;
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");

        feedbackElement.textContent = "Not quite. " + item.explanation;
    }

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "View Results"
            : "Next Question";

    nextButton.hidden = false;
}

function showResults() {
    quizContent.hidden = true;
    quizResult.hidden = false;

    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent =
            "Excellent! You answered every question correctly.";
    } else if (percentage >= 60) {
        resultMessage.textContent =
            "Good job! Review the missed questions to strengthen your awareness.";
    } else {
        resultMessage.textContent =
            "Keep learning! Review the warning signs and safety tips, then try again.";
    }

    progress.textContent = "Training completed";
}

nextButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    answered = false;

    quizResult.hidden = true;
    quizContent.hidden = false;

    showQuestion();
});

showQuestion();