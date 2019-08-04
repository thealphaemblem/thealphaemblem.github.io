var total = 0;
var question;
var answer;

function askQuestion() {
    var a = Math.floor(Math.random()*100); //pick a number between 1-12
    var b = Math.floor(Math.random()*100); //pick a second number between 1-12
    var operator = Math.floor(Math.random()*3); //pick a number between 1-3
    
    switch(operator){
        case 0:
            opAddition(a,b);
            break;
        case 1:
            opSubtraction(a,b);
            break;
        case 2:
            opMultiplication(a,b);
            break;
        case 3:
            opDivision(a,b);
            break;
    }
    document.getElementById("question").innerHTML = question;
    //document.getElementById("answer").innerHTML = answer;
}

function checkAnswer() {
    var myAnswer = document.getElementById("myAnswer").value;
    if (answer == myAnswer) {
        //correct
        document.getElementById("answer").innerHTML = "CORRECT"
        updateScore();
        askQuestion();
        document.getElementById("myAnswer").value = "";
    }
    else{
        //false
        document.getElementById("answer").innerHTML = "INCORRECT";
    }
}

function updateScore() {
    total = total + 1;
    if (total == 10) {
        window.location.href = "winner.html";
    }
    else {
        document.getElementById("score").innerHTML = "Your score is " + total + " out of 10!";
    }
}

function opAddition(a,b) {
    question = "What is " + a + " + " + b + "?";
    answer = a+b;
}

function opSubtraction(a,b) {
    if (a<b){
        question = "What is " + b + " - " + a + "?";
        answer = b-a;
    }
    else{
        question = "What is " + a + " - " + b + "?";
        answer = a-b;
    }
}

function opMultiplication(a,b) {
    question = "What is " + a + " x " + b + "?";
    answer = a*b;
}

function opDivision(a,b) {
    question = "What is " + a + " / " + b + "?";
    answer = a/b;
}
