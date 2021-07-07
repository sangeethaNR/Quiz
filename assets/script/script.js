

var choice1 = document.querySelector('#A');
var choice2 = document.querySelector('#B');
var choice3 = document.querySelector('#C');
var choices = document.querySelector('#choices');
var question_div = document.querySelector('#question_div');
var start_btn = document.getElementById("startbtn");
var timer_div = document.getElementById('timer');
var final_scoreDisplay = document.querySelectorAll(".finalScore_div");
var high_score = document.querySelector('#high_score');
var submit_btn = document.getElementById('submit_btn');
var goback = document.getElementById('goback');
var clearscore = document.getElementById('clearscore');
var validation_text =  document.getElementById('validation');
var score = 0;
var secondsLeft = 200;
// var timer_count = 200;
const questionTime = 10;

var ScoreBoard = JSON.parse(localStorage.getItem(ScoreBoard));
// // questions for the quiz
const questions = [

    {

        question: "What does HTML stand for?",



        choiceA: "HyperText Markup Language",

        choiceB: "HMTL",

        choiceC: "HyperText Language",

        correct: "A"

    }, {

        question: "What does JS stand for?",



        choiceA: "Java",

        choiceB: "JavaStand",

        choiceC: "JavaScript",

        correct: "C"

    }, {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        choiceA: "global variable",
        choiceB: "local variable",

        choiceC: "Both of the above",

        correct: "B"
    }, {

        question: "What does CSS stand for?",



        choiceA: "CSS",

        choiceB: "Cascading Style Sheet",

        choiceC: "Comparing Style Sheet",

        correct: "B"

    }

];




let lasatquestionindex = questions.length - 1;
let runningquestionindex = 0;
// function to get questions from array and display it in the webpage 

function renderQuestions() {
    start_btn.setAttribute('style', 'display:none');

    let q = questions[runningquestionindex];
    question_div.innerHTML = "<p>" + q.question + "<p>";
    choice1.innerHTML = "1. " + q.choiceA;
    choice2.innerHTML = "2. " + q.choiceB;
    choice3.innerHTML = "3. " + q.choiceC;

}

init();
function init() {
    start_btn.setAttribute('style', 'display:block');
  
   
}
// click event for 'start quiz' button

start_btn.addEventListener("click", function (event) {

    setTime();
    question_div.setAttribute('style', 'display:block');
    choices.setAttribute('style', 'display:block');
    if (runningquestionindex <= lasatquestionindex) {
        renderQuestions();
    }

});


//function to check if the selected answer is correct or not,score and time gets updated with answer selected

function checkAns(answer) {

    if (questions[runningquestionindex].correct == answer) {
        score += 10;
        validation_text.setAttribute('style','display:block;margin-left:750px;');
        validation_text.innerHTML = 'Correct!'
    }
    else {
        score += 0;
        secondsLeft -= 10;
        validation_text.setAttribute('style','display:block;margin-left:750px;');
        validation_text.innerHTML="Wrong";

    }

    if (runningquestionindex < lasatquestionindex) {
        runningquestionindex++;

        renderQuestions();
    }
    else {
        var elements = document.querySelectorAll(".display");

        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute('style', 'display:none');
        }




        for (var j = 0; j < final_scoreDisplay.length; j++) {
            final_scoreDisplay[j].setAttribute('style', 'display:block')
        }
        document.querySelector("#score_span").innerHTML = score + ".";
    }
}
// submit button click function

submit_btn.addEventListener("click", function () {
    var initial = document.querySelector("#initial").value;

    if (initial == '' || !isNaN(initial)) {
        window.alert("please enter a valid input");
        document.querySelector("#initial").value = '';

    }
    else {
        var score_board = {
            highscore: score,
            initials: initial.trim()
        }
        //stores in local storage

        localStorage.setItem("ScoreBoard", JSON.stringify(score_board));

        //hide the initial and score textarea

        var final_scorediv = document.querySelectorAll('.finalScore_div');
        for (var k = 0; k < final_scorediv.length; k++) {
            final_scorediv[k].setAttribute('style', 'display:none');
        }
        //display 'go back' and 'clear score' button

        clearscore.style = "display:inline-block";
        goback.style = "display:inline-block";
    }
});

//click event for 'go back' button

goback.addEventListener("click", function () {

    score = 0;
    initial.value = '';
    var elements = document.querySelectorAll(".display");


    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('style', 'display:block');

    }

    goback.setAttribute('style', 'display:none');
    clearscore.setAttribute('style', 'display:none');
    document.getElementById("view").setAttribute('style', 'display:none');
    question_div.setAttribute('style', 'display:none');
    choices.setAttribute('style', 'display:none');
    runningquestionindex = 0;
    timer_div.innerHTML =200;
    validation_text.setAttribute('style', 'display:none');
});

//function for clearscore click event

clearscore.addEventListener("click", function () {
    //clears the local storage 

    localStorage.clear();

    document.getElementById("view").innerHTML = '';
    document.querySelector("#initial").value = ''
    score = 0;
    document.getElementById("view").style = 'display:none';
    validation_text.setAttribute('style', 'display:none');
});




function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer_div.textContent = secondsLeft;
        if (secondsLeft === 0 || (runningquestionindex >= lasatquestionindex)) {
            // Stops execution of action at set interval
            document.getElementById('timer_text').style = 'diplay:none';
            clearInterval(timerInterval);

        }

    }, 1000);
}
//function for 'high score' click event
high_score.addEventListener("click", function () {

    if (document.querySelector("#initial").value != 0) {

        document.getElementById("view").innerHTML = "<h1> HighScores </h1> <br/> <h2> <pre> 1.  "  + document.querySelector("#initial").value + "  " +score + "</pre></h2>";

    }
    validation_text.setAttribute('style', 'display:none');
});