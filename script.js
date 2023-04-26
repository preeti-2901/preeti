
    const questions = [
        {
            question: "National bird?",
            answers: [
                { text: "Parrot", correct: false },
                { text: "Peacock", correct: true },
                { text: "Penguin", correct: false },
                { text: "Ostrich", correct: false },
    
            ]
        },
        {
            question: "National Anthem?",
            answers: [
                { text: "Jan gan man", correct: true },
                { text: "Vande Matram", correct: false },
                { text: "Teri Hae Jameen", correct: false },
                { text: "Hum honge Kamyab", correct: false },
            ]
        },
        {
            question: "Who wrote the crime novel Ten Little Niggers",
            answers: [
                { text: "Sir Arthur", correct: false },
                { text: "Irvine Welsh", correct: false },
                { text: "Agatha Christie", correct: true },
                { text: "Emile Zola", correct: false },
            ]
        },
        {
            question: "Who wrote the famous book, 'Who wants to be millionaire'",
            answers: [
                { text: "Vikram Seth", correct: false },
                { text: "Chetan Bhagat", correct: false },
                { text: "Agatha Christie", correct: true },
                { text: "D.Emile Zola", correct: false },
            ]
        },
        {
            question: "What is the other pen name of Munshi Premchand",
            answers: [
                { text: "Nawab Rai", correct: true },
                { text: "Dhanpat Das", correct: false },
                { text: "Gopal Sharma", correct: false },
                { text: "Prem Das", correct: false },
            ]
        },
        {
            question: "Who is the author of the book 'Shadow Lines'",
            answers: [
                { text: "Vikram Seth", correct: false },
                { text: "R.K. Narayan", correct: false },
                { text: "Amitav Gosh", correct: true },
                { text: "Rohington Mistry", correct: false },
            ]
        },
        {
            question: "Who wrote the famous novel 'Anandmath'",
            answers: [
                { text: "Rabindranath Tagore", correct: false },
                { text: "Bankim Chandra Chaterjee", correct: true },
                { text: "Sarat Chandra", correct: false },
                { text: "None of the above", correct: false },
            ]
        },
        {
            question: "The Authography of an Unknown Indian is written by?",
            answers: [
                { text: "Vikram Seth", correct: false },
                { text: "V.S. Naipaul", correct: false },
                { text: "Nirad C. Chaudhury", correct: true},
                { text: "None of the above", correct: false },
            ]
        },
        {
            question: "Which city is known as pink city?",
            answers: [
                { text: "Jaipur", correct: true },
                { text: "Agra", correct: false },
                { text: "Delhi", correct: false },
                { text: "Udaipur", correct: false },
            ]
        },
        {
            question: "How many types of CSS is there?",
            answers: [
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "5", correct: false },
                { text: "7", correct: false },
            ]
        }
    ];
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    let CurrentQuestionIndex = 0;
    let score = 0;

   

    
    
    function startQuiz() {
        CurrentQuestionIndex = 0;
        score = 0;
        nextButton.innerhtml = "Next"
        showQuestion();
    }
    
    function showQuestion() {
        resetState();
        let currentQuestion = questions[CurrentQuestionIndex]
        let questionNo = CurrentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + " ." + currentQuestion.question;
    
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
    
            }
    
            button.addEventListener("click", selectAnswer);
        });
    
    }
    
    function resetState() {
        nextButton.style.display = "block";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }
    
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        // Array.from(answerButtons.children).array.forEach(button => {
        //     if (button.dataset.correct === "true") {
        //         button.disabled=true;
        //     }
            
        // });
        
        // nextButton.style.display = "block";
    }
    
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored  ${score} out of ${questions.length}!;`;
        nextButton.innerHTML = "Start again";
        nextButton.style.display = "block";
    }
    
    
    function handleNextButton() {
        CurrentQuestionIndex++;
        if (CurrentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (CurrentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
startQuiz();

