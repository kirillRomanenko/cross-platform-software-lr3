const readlineSync = require('readline-sync');
const request = require('./redis');
const functions = require('./functions');

const menu = readlineSync.question('Выбор варианта:\n 1-Генерация текста и поиск слов палиндромов\n 2-Показать исходный текст\n 3-Показать палиндромы\n');
let countStrings;
let text = [];
let polindrom = [];
if (Number(menu) == 1) {
    countStrings = functions.getRandom(100, 500);
    console.log('количество слов (значение от 100 до 500): ', countStrings);
    const sizeWord = readlineSync.question('Введите длину слова: ');
    text = functions.generateText(text, countStrings, sizeWord);
    polindrom = functions.polindromText(text, polindrom);

    const textRedis = JSON.stringify(text);
    const polindromRedis = JSON.stringify(polindrom);
    request.setCountWords(countStrings);
    request.setSourceText(textRedis);
    request.setPolindrom(polindromRedis);

}



