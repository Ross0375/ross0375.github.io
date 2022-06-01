const phrase = 'The man we saw saw a saw'

//truncate
// return shotened version
//limit phrase by max numbers of char
//limit is max number of chars
// don't end in middle o0f word
//add ... at the end

function truncate (phrase, limit) {
    //indexof to return the index of the next space
    //use offset to search beyond first occurance
    //use limit as the offset

    const end = phrase.indexOf(' ', limit)

    //get part of a string with substring
    return phrase.substring(0, end) + '...'
};

console.log(truncate(phrase, 13));

//uniqueWords, return an arry of unique words in a phrase
function uniqueWords (phrase) {
    // create an array to hold uniqueWords
    const uniqueWords = []

    //use split method to break string into words (array)

    const words = phrase.split(' ')

    for (const word of words) {
        if (!uniqueWords.includes(word)){
            uniqueWords.push(word)
        }
    }

    return uniqueWords
}

console.log(uniqueWords(phrase));