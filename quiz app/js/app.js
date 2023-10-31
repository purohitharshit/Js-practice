const questions = [{
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melboune",
    c: "Canberra",
    d: "Perth",
    answer: "c"
}, {
    question: "Which of the following is a markup language?",
    a: "HMTL",
    b: "CSS",
    c: "JS",
    d: "PHP",
    answer: "a",
}, {
    question: "Who won the 2019 World Cup?",
    a: "India",
    b: "Australia",
    c: "England",
    d: "New Zealand",
    answer: "c",
}
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesbox = document.getElementById('quesBox');
const optionsInput = document.querySelectorAll('.option');

const loadQuestion = () => {

    if (index == total) {
        return endQuiz();
    }
    reset();

    let data = questions[index];
    console.log(data);
    quesbox.innerText = `${index + 1} ${data.question}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;

}

const submitBtn = () => {

    let data = questions[index];
    let rightAnswer = getAnswer();

    if (rightAnswer == data.answer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;

    optionsInput.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })
    return answer;
}

const reset = () => {
    optionsInput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {

    document.getElementById('box').innerHTML = `
    <h2> Thank You for your participation! </h2>
    <br>
    <h3>  ${right}/${total} questions are correct </h3>
    `
}



loadQuestion();