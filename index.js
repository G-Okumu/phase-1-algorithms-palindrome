function isPalindrome(word) {
    // Write your algorithm here
    // let reversedWord = word.split("").reverse().join("");
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    // console.log(reversedWord);

    if (reversedWord === word) {
        return true;
    } else {
        return false;
    }
}

// isPalindrome("racecar");

/* 
  Add your pseudocode here
  - Reverse the word
  - initialize an empty array to carry the reversed word
  - use if else statement,if(word === reversedWord){return true} else{return false}
*/

/*
  Add written explanation of your solution here
  - isPalindrome receives one argument, that is string word
  - return true if the word reads same forward and backwards, otherwise false
  - 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;