import {ruswords} from "./words.js"
let proverit = document.getElementById("proverit");
let bukva = document.getElementById("bukva");
let words = ["вагонетка", "зима", "книга", "электромобиль", "аджика"];
words = ruswords;
console.log(words);
let secret = words[Math.floor(Math.random()*words.length)];
console.log(secret);
let cypher = document.getElementById("cypher");
let myLetters = document.getElementById("myLetters");
cypher.innerHTML = "*".repeat(secret.length);
let newGame = document.getElementById("newGame");
let imgNumber = 7;
let manNotHot = document.getElementById("manNotHot");
let mainTitle = document.getElementById("mainTitle");
let usedLetters = "";
newGame.onclick = function (event) {
    event.preventDefault();
    console.log("New Game");
    bukva.value = ""
    myLetters.innerHTML = "Тебе нужно угадать секретное слово! <br> Введи букву и проверяй"
    imgNumber = 7;
    manNotHot.src = "snow/snowman7.jpg"
    mainTitle.innerHTML = "Snowman"
    proverit.disabled = false;
    secret = words[Math.floor(Math.random()*words.length)];
    cypher.innerHTML = "*".repeat(secret.length);
    console.log(secret);
    usedLetters = ""
}

proverit.onclick = function (event) {
    console.log(bukva.value);

    event.preventDefault();

    if (secret.includes(bukva.value)) {
        console.log("Верно!");
        console.log(secret, bukva.value);
        let newCypher = "";
        for (let i = 0; i < secret.length; i = i + 1) {
            console.log(secret[i] == bukva.value);
            if (secret[i] == bukva.value) {
                newCypher = newCypher + bukva.value;
            }
            else {
                newCypher = newCypher + cypher.innerHTML[i]
            }
        }
        cypher.innerHTML = newCypher;
    }
    else {
        console.log("Неверно.");
        imgNumber = imgNumber - 1;
        manNotHot.src = "snow/snowman" + imgNumber + ".jpg";
        if (imgNumber == 0) {
            proverit.disabled = true;
            mainTitle.innerHTML = "Ты проиграл, а секретное слово было ничем иным, как " + secret;

        }
    }
if(secret === cypher.innerHTML){
    mainTitle.innerHTML = "Ты победил!"
}

    if (!usedLetters.includes(bukva.value)) {
        usedLetters = usedLetters + bukva.value + " "
    } 
    myLetters.innerHTML = usedLetters
    bukva.value = ""
    bukva.select()

}


// по нажатии кнопки проверить выводить нашу букву в параграф, стили по макету 

// по нажатию !ПРОВЕРИТЬ клинить инпут.!Новая игра не переобновлялась. Обновлять p и шифр на *. разобрать !for

//доделать использованные буквы, стили, эмоции победы