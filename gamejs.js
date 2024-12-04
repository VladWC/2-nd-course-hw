// Game:«Угадай число»
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numb = getRandomIntInclusive(0, 100);
function gusseNumb(){
while (true) {
    let userAnswer = prompt('Попробуй угадать число!');
    console.log(userAnswer);
    if (userAnswer<0 || userAnswer>100 || isNaN(userAnswer)) {
        alert('Это ерунда!');
    }
    else if(userAnswer===null){
        break;
    }
    else if (numb > userAnswer) {
        alert('Загаданое число больше!');
    }
    else if (numb < userAnswer) {
        alert('Загаданное число меньше');
    }
    else {
        alert('Ура, угадал!!!');
        break;
    }
}
}

// Game:«Простая арифметика»

function simpleArifmetic() {
    let getRandomA=getRandomIntInclusive(0, 20);
    let getRandomB=getRandomIntInclusive(0, 20);
    const matSigns=['+','-','*','/'];
    let genSignsResult=genSigns();
console.log(matSigns[genSignsResult]);
    function genSigns() {
        return Math.ceil(Math.random()*(matSigns.length));
    }
    while(true) { 
    let taskString = [`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`];
    let task= Math.floor(eval(`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`));
    // console.log(taskString);
    // console.log(taskString = [`${getRandomA} / ${getRandomB}!!!`]);
    console.log(task);
    if (matSigns[genSignsResult]==='/'){
        alert('Ответ округлить до целого!')
    }
    let answer =prompt(`Введите ответ на задачу: ${taskString.join()}`);
    if (answer === null) {
        return;
    }
    answer= Math.floor(Number(answer));
    if (answer === task) {
        alert('Ответ верный!');
        break;
      } 
    else if(matSigns[genSignsResult]==='/' && answer != task) {
        alert(`Ответ округлить до целого! Ответ неверный! Правильный ответ: ${task}`);
      } 
    else  {
        alert(`Ответ неверный! Правильный ответ: ${task}`);
      }
    }
} 

// Game:«Переверни текст»

function refersText() {
    let userText = prompt("Введите любое слово");
    let textRevers = userText.split('').reverse().join('');
    alert(textRevers);
}

// Game:«Викторина»

const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function guizGame() {
    let rightAnswer = [];
    for (let i = 0; i < quiz.length; i++) {
        const {question, options, correctAnswer} = quiz[i];   
        const userAnswer = Number(prompt(question, options));
        if (userAnswer === correctAnswer) {
            rightAnswer.push(+1);
        }
        else {
            rightAnswer.push(0);
        }
    }
    return arraySum(rightAnswer); 
}
function arraySum(rightAnswer){
let sumRightAnswer = 0;
for(let i = 0; i < rightAnswer.length; i++){
    sumRightAnswer += rightAnswer[i];
    }
    alert(`Правильных ответов:${sumRightAnswer}.`);
}

// Game:«Камень, ножницы, бумага»

const stounScissorsPeper=["камень", "ножницы", "бумага"];

function gameSSP() {
    let stounScissorsPeperRandom=Math.floor(Math.random()*(stounScissorsPeper.length)+1);
    let userAnswerSSP=Number(prompt('Сделайте свой выбор:"камень", "ножницы", "бумага"!',"1.Камень 2.Ножницы 3.Бумага"));
   if(stounScissorsPeperRandom===userAnswerSSP) {
    alert('У нас ничья!');
   }
   else if(stounScissorsPeperRandom===1 && userAnswerSSP===3) {
    alert('Ура, Вы, победили!');
   }
   else if(stounScissorsPeperRandom===2 && userAnswerSSP===1) {
    alert('Ура, Вы, победили!');
   }
   else if(stounScissorsPeperRandom===3 && userAnswerSSP===2) {
    alert('Ура, Вы, победили!');
   }
   else {
    alert('К сожалению, вы проиграли! Попробуйте ещё!');
   }
}

// Game:«Генератор случайных цветов»

const mainEL=document.querySelector('.main');
const gameGenRandomColorButtonEL=document.querySelector('.gameGenRandomColorButton');

gameGenRandomColorButtonEL.addEventListener('click',(e) =>{
    e.preventDefault();
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
   mainEL.style.backgroundColor = randomColor;
   return false;
})

// SCROLL

function scrollToEL(X, Y) {
    let scrollButtonEL = document.getElementById(X);
    scrollButtonEL.addEventListener("click",  () => {
        let target = document.getElementById(Y);
        window.scroll({
            top: target.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
      });
};

window.onload = () => {
    scrollToEL('clickGO', 'scrollGO');
    scrollToEL('clickGN', 'scrollGN');
    scrollToEL('clickSA', 'scrollSA');
    scrollToEL('clickRT', 'scrollRT');
    scrollToEL('clickSNP', 'scrollSNP');
    scrollToEL('clickSV', 'scrollSV');
    scrollToEL('clickGRC', 'scrollGRC');
};

