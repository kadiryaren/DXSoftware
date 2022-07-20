// coded by Kadir YAREN
const replaceSymbols = (sentence) => {
    return sentence.replace(/[^a-zA-Z ]/g, "");
}

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

const findLongestWord = (sentence) => {

    let wordList = replaceSymbols(sentence).split(" ");

    let maxWordCount = 0;
    let maxWord = "";

    wordList.forEach((word) => {

        if(word.length > maxWordCount){
            maxWordCount = word.length;
            maxWord = word;
        }
        else if(word.length == maxWordCount){
            if(getVowels(word) > getVowels(maxWord)){
                maxWord = word;
            }
        }
    })

    console.log(maxWord);
    // return maxWord
}

let string = "Smart people learn from everything@#$234234 and everyone, average people from their experience, stupid people already, have all the answers";

findLongestWord(string);

