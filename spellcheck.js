const SpellChecker = require("simple-spellchecker");
const { error, warning } = require("./ui");

function checkWord(word, locale = "en-US") {
  SpellChecker.getDictionary(locale, function (err, dictionary) {
    if (err) {
      console.error("Error:", err);
      return;
    }

    const misspelled = !dictionary.spellCheck(word);
    if (misspelled) {
      const suggestions = dictionary.getSuggestions(word);
      console.log(error(`The word ${word} is misspelled.`));
      console.log(warning(`Did you mean:`), suggestions.join(" "));
    } else {
      console.log(`The word ${word} is spelled correctly.`);
    }
  });
}

function checkWords(sentence, locale = "en-US") {
  SpellChecker.getDictionary(locale, function (err, dictionary) {
    if (err) {
      console.log("There was an error", err);
      return;
    }

    let allCorrect = true;
    let count = 0;
    const sentenceArr = sentence.split(" ");
    const sentenceLength = sentenceArr.length;

    for (let word of sentenceArr) {
      word = word.replace(/[^A-Z]/gi, "");
      let isMisspelled = !dictionary.spellCheck(word);
      if (isMisspelled) {
        console.log(`The word ${error(word)} is incorrect.`);
        allCorrect = false;
        count++;
        let suggestions = dictionary.getSuggestions(word);
        console.log(warning(`Did you mean:`), suggestions.join(" "));
      }
    }

    if (allCorrect) {
      console.log("All your words were spelled correctly.");
    } else {
      console.log(
        `You spelled ${sentenceLength - count} out of ${sentenceLength} correctly. Your accuracy is ${(
          ((sentenceLength - count) / sentenceLength) *
          100
        ).toFixed(2)}%`
      );
    }
  });
}

module.exports = {
  checkWord,
  checkWords,
};


/*


const SpellChecker = require("simple-spellchecker");

function checkWord(word, locale = "en-US") {
  SpellChecker.getDictionary(locale, function(err, dictionary) {
    if (err) {
      console.error("Error:", err);
      return;
    }

    const misspelled = !dictionary.spellCheck(word);
    if (misspelled) {
      const suggestions = dictionary.getSuggestions(word);
      console.log("Suggestions:", suggestions);
    } else {
      console.log("Word is spelled correctly.");
    }
  });
}

function checkWords(sentence, locale = "en-US") {
  SpellChecker.getDictionary(locale, function(err, dictionary) {
    if (err) {
      console.log("There was an error", err);
      return;
    }

    const sentenceArr = sentence.split(" ");
    let allCorrect = true;

    for (let word of sentenceArr) {
      // Remove non-letter characters
        word = word.replace(/[^A-Z]/i, "");  
      let isMisspelled = !dictionary.spellCheck(word);
      if (isMisspelled) {
        console.log(`The word ${word} is incorrect.`);
        allCorrect = false;
        let suggestions = dictionary.getSuggestions(word);
        console.log(`Did you mean:`, suggestions.join(" "));
      }
    }

    if (allCorrect) {
      console.log("All your words were spelled correctly.");
    }
  });
}

module.exports = {
  checkWord,
  checkWords,
};





*/



/*


// Import the simple-spellchecker module
const SpellChecker = require('simple-spellchecker');

// Define a function to check a word for spelling
function checkWord(word, locale) {
    // Get a dictionary instance for the specified locale
    SpellChecker.getDictionary(locale, function(err, dictionary) {
        // Handle errors, if any
        if (err) {
            console.error("Error:", err);
            return;
        }

        // Check if the word is misspelled
        const misspelled = !dictionary.spellCheck(word);
        if (misspelled) {
            // If misspelled, get suggestions
            const suggestions = dictionary.getSuggestions(word);
            console.log("Suggestions:", suggestions);
        } else {
            console.log("Word is spelled correctly.");
        }
    });
}

// Define a function to check multiple words in a sentence
function checkWords(sentence, locale) {
    const words = sentence.split(" ");
    words.forEach(word => {
        checkWord(word, locale);
    });
}

// Export the checkWord and checkWords functions
module.exports = {
    checkWord: checkWord,
    checkWords: checkWords
};

*/