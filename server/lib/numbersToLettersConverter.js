const lettersMap = require('./lettersMap')
var checkWord = require('check-word')
var words = checkWord('en')

const numberLetterWordCheck = (number) =>{
    let numbersString
    try{
        numbersString = number.toString()
    }
    catch(e){
        console.log(e)
        return []
    }

    const arrayOfNumbers = numbersString.split('')
    let arrayOfWords = []
    let arrayOfLetters = arrayOfNumbers
        .map((number)=>{
            const letters = numberToLetter(number)
            if(letters!==[]){
                return letters
            }
        })
        .reduce((previousValue, currentValue) => {
            let mergedValue = []
            previousValue.forEach(previousLetter => {
                currentValue.forEach(currentLetter => {
                    mergedValue.push(previousLetter + currentLetter)
                })
            })
            return mergedValue
        })

        arrayOfLetters.map((word) => {
            if(words.check(word)){
                arrayOfWords.push(word)
            }
        })

        if(arrayOfWords.length > 0){
            return arrayOfWords
        }
        else{
            return arrayOfLetters
        }
}

const numberToLetter = (number) => {
    let numberString

    try{
        numberString = number.toString()
    } catch(e) {
        console.log(e)
    }
    if(numberString in lettersMap){
        return lettersMap[numberString]
    }
    console.log(`Cannot map number ${number} to a letter`)
    return []
}

module.exports = {lettersMap, numberToLetter, numberLetterWordCheck}