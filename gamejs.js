// Game:«Угадай число»
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numb = getRandomIntInclusive(0, 100);
while (i = numb) {
    let userAnswer = prompt('Попробуй угадать число!');
    if (i == userAnswer && i == numb) {
        alert('Ура, угадал!!!');
        break;
    }
    if (i > userAnswer) {
        alert('Загаданое число больше!');
    }
    if (i < userAnswer) {
        alert('Загаданное число меньше');
    }

}