const message = document.getElementById("message")
const phrase = document.getElementById("phrase")
const picture = document.getElementById("picture")

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = [];
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

//console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
//console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    { 
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

function function1() {
    messageWords = message.value.split(" ");
    let numberOfWordsInTheMessage = messageWords.length;
    let wordsCounter = {};
    let theMostFrequentWordCount = 0;

    for(var i = 0; i < numberOfWordsInTheMessage; i++) {
        var currentWord = messageWords[i].toLowerCase(); 
        if(currentWord in wordsCounter) {
            wordsCounter[currentWord]++;
        } else {
            wordsCounter[currentWord] = 1;
        }
    }

    for(var word in wordsCounter) {
        if(wordsCounter[word] > theMostFrequentWordCount) {
            theMostFrequentWordCount = wordsCounter[word];
            theMostFrequentWord = word;
        }
    }
    
    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`);
}

function function2() {
    let randomNumber = Math.floor(Math.random() * 3); 

    phrase.innerHTML = randomPhrasesAndPictures[randomNumber]["phrase"];
    picture.src = randomPhrasesAndPictures[randomNumber]["imageURL"];
}

function buttonFunction() {
    function1();
    function2();
}