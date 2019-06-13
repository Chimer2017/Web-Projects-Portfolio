var quiz = document.getElementById('quiz');
var submit = document.getElementById('submit');
var results = document.getElementById('results');
var totalScore = 0;

const qq = [{
        q: "Does your business have legacy systems on premise?",
        options: {
            a: "Yes",
            b: "No",
            c: "Not Sure"
        },
        ans: "a",
    },
    {
        q: "Does your business have a need to move to the cloud?",
        options: {
            a: "Yes",
            b: "No",
            c: "Not Sure"
        },
        ans: "a",
    },
    {
        q: "Is your business innovative?",
        options: {
            a: "Yes",
            b: "No",
            c: "Not Sure"
        },
        ans: "a",
    },
];


function buildQuiz() {
    const output = [];
    // for each gives current value followed by index as default params
    qq.forEach((curQ, qNum) => {
        const ansOpts = []
        for (var item in curQ.options) {
            ansOpts.push(
                `<label class="q-lbl">
                <input type="radio" name="question${qNum}" value="${item}">
                ${curQ.options[item]}
              </label>`);
        }

        output.push(
            `<div class="question"> ${curQ.q} </div>
            <div class="answers"> ${ansOpts.join('')} </div>`
        );
    });
    quiz.innerHTML = output.join('');
}


function showResults() {

    //for each question
    var ansContainer = document.getElementsByClassName('answers');
    qq.forEach((curQ, qNum) => {
        //get choice
        var ansBox = ansContainer[qNum];
        var queryStr = 'input[name=question' + qNum + ']:checked';
        var userChoice = (ansBox.querySelector(queryStr) || {}).value;

        console.log(userChoice);

        //compare to right answer
        if (userChoice == curQ.ans) {
            totalScore++;
            //(ansBox.querySelector(queryStr)).style.color = 'lightgreen';
            ansBox.style.color = 'lightgreen';
        } else {
            ansBox.style.color = 'red';
        }
    });

    var resultsDiv = document.getElementById('results');
    var str = "<h3 id='score'>" + totalScore + " out of " + qq.length + "</h3>";
    resultsDiv.innerHTML = str;

    //display final score



}

buildQuiz();

submit.addEventListener("click", showResults);