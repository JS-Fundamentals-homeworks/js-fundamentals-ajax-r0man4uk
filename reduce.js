const array = [15, 20, 43, 57, 82];

const resReduce = array.reduce((instValue, currentValue) => {
    return instValue + currentValue;
}, 0);

console.log(resReduce);

//--------------------- "Hello my name is!"---------------------------
const arrWords = ["Hello", "my", "name", "is"];                
const wordReduce = arrWords.reduce((instValue, word) => 
    instValue + " " + word) + "!";
    console.log(wordReduce);   

//-------------------- "Hello, my name is!"---------------------------

const arrWords2 = ["Hello", "my", "name", "is"];                
const wordReduce2 = arrWords2.reduce((instValue, word, index) => 
    instValue + (index === 1 ? ", " : " ") + word) + "!";
    console.log(wordReduce2);   