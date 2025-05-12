let selectedOption = null;
let userAnswers = [];


const quizData = [
    //Question 1
    {
      title: "🏠 Meeting Your Roommate 🏠",
      dialogue: "You arrive at your dorm and meet your American roommate for the first time. They smile and say: “Hey! I’m so stoked you’re finally here. I was lowkey worried I’d be stuck with someone super weird. You seem chill though!”!”",
      question: "What does your roommate mean by stoked and chill?",
      options: ["A. Stoked means nervous, and chill means cold.",
                "B. Stoked means excited, and chill means relaxed and easygoing.",
                "C. Stoked means surprised, and chill means boring.",
                "D. Stoked means angry, and chill means shy."],
      answer: "B. Stoked means excited, and chill means relaxed and easygoing."
    },
    //Question 2
    {
      title: "🛏️ Dorm Talk 🛏️",
      dialogue: "Your roommate says: “My 8 a.m. class is killing me. I pulled an all-nighter for that exam.",
      question: "What is an all-nighter?",
      options: ["A. A fun party", 
                "B. Sleeping early",
                "C. Staying awake all night to study",
                "D. Traveling at night"],
      answer: "C. Staying awake all night to study"
    },
    // Question 3
    {
      title: "🏫 In the Classroom 🏫",
      dialogue: "After class, a friend says: “That professor is chill. He always lets us dip early.”",
      question: "What does dip early mean?",
      options: ["A. Take a quiz", 
                "B. Leave class before it ends",
                "C. Go to the cafeteria",
                "D. Be quiet"],
      answer: "B. Leave class before it ends"
    },

    // Question 4
    {
      title: "🧠 Study Tips 🧠",
      dialogue: "Your friend says: “You don’t even need the textbook, just go to Quizlet—it’s clutch.”",
      question: "What does clutch mean?",
      options: ["A. Expensive",
                "B. Useless",
                "C. Super helpful or reliable",
                "D. Outdated"],
      answer: "C. Super helpful or reliable"
    },

    // Question 5
    {
      title: "🤯 Midterm Madness 🤯",
      dialogue: "You tell your classmate you’re worried about the test, and they say, “Same. I’m totally cramming tonight.”",
      question: "What does cramming mean?",
      options: ["A. Eating a lot before a test",
                "B. Sleeping to regain energy",
                "C. Studying intensely at the last minute",
                "D. Skipping class to prepare",],
      answer: "C. Studying intensely at the last minute"
    },

    // Question 6
    {
      title: "🎉 Your First College Party 🎉",
      dialogue: "Someone invites you to a party and says, “It’s gonna be a rager—everyone’s going.”",
      question: "What does rager mean?",
      options: ["A. A study session",
                "B. A protest",
                "C. A loud and wild party",
                "A fundraiser",],
      answer: "C. A loud and wild party"
    },

    // Question 7
    {
      title: "🍕 Dining Hall 🍕",
      dialogue: "You overhear some students in the dining hall saying: “I’m trying to avoid the Freshman 15, but the mac and cheese here is way too good!”",
      question: "What does Freshman 15 mean?",
      options: ["A. A group of 15 students in their first year of college",
                "B. A rule that freshmen must gain 15 credits",
                "C. The common weight gain (around 15 pounds) that students experience during their first year of college",
                "D. The top 15 favorite meals of freshmen in the cafeteria",],
      answer: "C. The common weight gain (around 15 pounds) that students experience during their first year of college"
    },

    // Question 8
    {
      title: "🤝 Stranger Helper 🤝",
      dialogue: "You help a stranger you just met to sober up at a house party. After it’s over, they say: “Bro, you’re my G. I seriously couldn’t have done it without you.”",
      question: "What does You're my G mean?",
      options: ["A. You’re my guest.",
                "B. You’re my general",
                "C. You’re my girl.",
                "D. You’re my close friend or someone I trust.",],
      answer: "D. You’re my close friend or someone I trust."
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const titleElement = document.getElementById("quiz-title");
  const dialogueElement = document.getElementById("quiz-dialogue");

  
  let currentQuestion = 0;
  let score = 0;

  submitButton.addEventListener("click", () => {
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }
  
    const question = quizData[currentQuestion];
    const selectedText = selectedOption.innerText;
  
    const isCorrect = selectedText === question.answer;
    if (isCorrect) score++;
  
    // Save the question, selected answer, and correct answer
    userAnswers.push({
      question: question.question,
      selected: selectedText,
      correct: question.answer,
      isCorrect: isCorrect
    });
  
    selectedOption = null;
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  

  
  function showQuestion() {
    const question = quizData[currentQuestion];
  
    // Set title and dialogue
    titleElement.innerText = question.title;
    dialogueElement.innerHTML = question.dialogue;
  
    // Set question text
    questionElement.innerHTML = question.question
      .replace(/Stoked/gi, "<em>Stoked</em>")
      .replace(/All-nighter/gi, "<em>All-nighter</em>")
      .replace(/dip early/gi, "<em>dip early</em>")
      .replace(/clutchy/gi, "<em>clutch</em>")
      .replace(/cramming/gi, "<em>cramming</em>")
      .replace(/rager/gi, "<em>rager</em>")
      .replace(/Freshman 15/gi, "<em>Freshman 15</em>")
      .replace(/Chill/gi, "<em>Chill</em>");
  
    // Set options
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerHTML = option
     
      button.setAttribute("data-text", option); // store plain text for comparison
      button.classList.add("option-button");
      button.setAttribute("data-index", index);
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  
  function selectAnswer(e) {
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach(btn => btn.classList.remove("selected"));
  
    selectedOption = e.target;
    selectedOption.classList.add("selected");
  }


  function getResultMessage(score) {
    if (score <= 4) {
      return "You are NOT READY for America 😔";
    } else if (score <= 7) {
      return "You are SOMEWHAT READY for America 🤠";
    } else {
      return "You are TOTALLY READY for America 🦅🦅🦅";
    }
  }

  
  
  function showResult() {
    document.getElementById("options-container").style.display = "none";
  
    let resultHTML = `
    <h1>${getResultMessage(score)}</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <h2>Review:</h2>
    <div id="review-scroll">
    `;

    userAnswers.forEach((item, index) => {
      resultHTML += `
        <div class="review-question">
          <p><strong>Q${index + 1}: ${item.question}</strong></p>
          <p>Your answer: <span style="color: ${item.isCorrect ? 'green' : 'red'};">${item.selected}</span></p>
          ${item.isCorrect ? '' : `<p>Correct answer: <em>${item.correct}</em></p>`}
          <hr>
        </div>
      `;
    });

    resultHTML += `
        <button id="restart-button">Retake Quiz</button>
      </div>
    `;

    resultHTML += "</div>";
    quiz.innerHTML = resultHTML;

    document.getElementById("restart-button").addEventListener("click", () => {
    window.location.href = "indextitle.html";
  });

  }

  
  showQuestion();