function isPalindrome(word) {
  // Write your algorithm here
  const arrayLetters = word.split('')
  const reverseLetters = arrayLetters.reverse()
  const reverseWord = reverseLetters.join('')
  if (word === reverseWord) {
    return true
  }
  else return false
}

/* 
  Add your pseudocode here
  .split method
  .reverse method
  .join method
  if word === reverseWord then its a palindrome, else no palindrome 
*/

/*
  Add written explanation of your solution here
  the .split method converts the string into an array of individual characters
  the .reverse method reverses the positions of the array
  the .join method joins all the elements of the array into a string
  the if/else checks to see if the new reverse string is the same as the original, if it is returns the word palindrome!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("=>", isPalindrome('mom'));

  console.log('=>', isPalindrome('dad'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('=>', isPalindrome('nessie'));
}

module.exports = isPalindrome;
