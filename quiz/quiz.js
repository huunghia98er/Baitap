const questions  = [
    {
        questionText : "What is 2*5?",
        answers : [2, 5, 10, 15, 20],
        correctAnswer : 2*5,
        point : 1
    },
    {
        questionText : "What is 3*6?",
        answers : [2, 5, 10, 18, 20],
        correctAnswer : 3*6,
        point : 2
    },
    {
        questionText : "What is 3*7?",
        answers : [2, 5, 10, 18, 21],
        correctAnswer : 3*7,
        point : 3
    },
    {
        questionText : "What is 3*8?",
        answers : [2, 5, 10, 18, 24],
        correctAnswer : 3*8,
        point : 4
    }
]
var quizComponent = document.getElementById("quiz")
var nextButton  = document.getElementById("next")
var prevButton  = document.getElementById("prev")
var restartButton  = document.getElementById("restart")
var submitButton = document.getElementById("submit")
let index = 0;
let chooseAnsValues = [];
let sum = 0;
let totalPoint = 0;
let a = 0;



var component = function (){
    var DisplayButton = function () {
        if (index === 0){
            prevButton.style.display = 'none'
            nextButton.style.display = 'inline-block'
            submitButton.style.display = 'none'
            restartButton.style.display = 'none'
        } else if (index === questions.length - 1) {
            prevButton.style.display = 'inline-block'
            nextButton.style.display = 'none'
            submitButton.style.display = 'inline-block'
            restartButton.style.display = 'none'
        } else {
            prevButton.style.display = 'inline-block'
            nextButton.style.display = 'inline-block'
            submitButton.style.display = 'none'
            restartButton.style.display = 'none'
        }
    }

    var Check = (question, index) => {
        let chooseAnsValue
        question.answers.forEach((value,index) =>{
            if (document.getElementById(index).checked){
                chooseAnsValue = document.getElementById(index).value
            }
        })
        chooseAnsValues[index] = chooseAnsValue
    }

    var CheckAnswers = () => {
        for (let i = 0; i < questions.length; i++){
            if (parseInt(chooseAnsValues[i]) === parseInt(questions[i].correctAnswer)) {
                totalPoint += questions[i].point
                sum++;
                a = 0;
            }
            if (chooseAnsValues[i] === undefined) {                
                submitButton.style.display = 'inline-block'
                sum = 0
                totalPoint = 0
                a++;
                alert('Vui long nhap day du cau tra loi!')
                break;
            }
        }
    }

    var DisplayResult = function() {
        if (parseInt(chooseAnsValues[index]) === parseInt(questions[index].correctAnswer)) {
            document.getElementById('container').style.backgroundColor = '#00FF00'
        } else {
            document.getElementById('container').style.backgroundColor = 'red'
        }
        restartButton.style.display = 'inline-block'
        nextButton.addEventListener('click', function() {
            if (parseInt(chooseAnsValues[index]) === parseInt(questions[index].correctAnswer)) {
                document.getElementById('container').style.backgroundColor = '#00FF00'
            } else {
                document.getElementById('container').style.backgroundColor = 'red'
            }
            restartButton.style.display = 'inline-block'
        })
        prevButton.addEventListener('click', function() {
            if (parseInt(chooseAnsValues[index]) === parseInt(questions[index].correctAnswer)) {
                document.getElementById('container').style.backgroundColor = '#00FF00'
            } else {
                document.getElementById('container').style.backgroundColor = 'red'
            }
            restartButton.style.display = 'inline-block'
        })
    }

    var restartquiz = function() {
        index = 0;
        chooseAnsValues = [];
        sum = 0;
        totalPoint = 0;
        a = 0;
        nextButton.addEventListener('click', function(){
            document.getElementById('container').style.backgroundColor = '#1E90FF'
            restartButton.style.display = 'none'
        })
        prevButton.addEventListener('click', function(){
            document.getElementById('container').style.backgroundColor = '#1E90FF'
            restartButton.style.display = 'none'
        })        
    }

    var loadQuestion = (question, index) => {
        DisplayButton()
        document.getElementById('container').style.backgroundColor = '#1E90FF'
        let chooseValue = chooseAnsValues[index]
        let text = ""
        text += "<h2 >Question "+ (index + 1) + " </h2>"
        text += "<p>"+ question.questionText + "</p>"
        text += '<ul>';
        question.answers.forEach((value,index)=>{
            text += '<li>';
            text += '<input type="radio"'+((chooseValue !== undefined && chooseValue == value) ? 'checked' : '' )
                +' id = '+index+'   name = "answer" value = '+value+' >'+value+'</input>'
            text += '</li>';
        })
        text += '</ul>';
        quizComponent.innerHTML = text
        quizComponent.style.display = "block"
    }

    var loadPage = function (){
        nextButton.addEventListener('click', function (){
            DisplayButton();
            Check(questions[index], index)
            index++;
            loadQuestion(questions[index],index)
        })
        prevButton.addEventListener('click', function (){
            DisplayButton();
            Check(questions[index], index);
            index--;
            loadQuestion(questions[index],index);
        })
        submitButton.addEventListener('click', function (){
            Check(questions[index], index)
            CheckAnswers()
            restartButton.style.display = 'inline-block'
            if (a === 0){
                alert('Ban da tra loi dung ' +sum+' cau!' + 'Tong diem: '+totalPoint);
                DisplayResult();
            }
        })
        restartButton.addEventListener('click', function (){
            restartquiz();
            loadQuestion(questions[index],index);
        })
    }

    return {
        init : function(){
            loadQuestion(questions[index],index);
            loadPage();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function (){component.init()});