function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function makeid(size) {
    const lenWord = Number(size);
    let word = "";
    const alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    const alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet3 = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const alphabet4 = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const alphabet = alphabet1 + alphabet2 + alphabet3 + alphabet4;

    for (var i = 0; i < lenWord; i++)
        word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

    return word;
}
function generateText(text, countStrings, sizeWord) {
    for (let i = 0; i < countStrings; i++) {
        text[i] = makeid(sizeWord);
    }
    return text;
}
function isPolindrom(item) {
    let polindromWord = "";
    let reverse = item.split("").reverse().join("");
    if (reverse == item) {
        polindromWord = reverse;
        return polindromWord;
    } else {
        return false;
    }
}

function polindromText(text, polindrom) {
    for (let i = 0; i < text.length; i++) {
        if (isPolindrom(text[i]) != false) {
            polindrom.push(isPolindrom(text[i]));
        }
    }
    return polindrom;
}

module.exports = { getRandom, generateText, polindromText };