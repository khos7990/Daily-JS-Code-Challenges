// 1. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//ANSWER
function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length > 1 && names.length < 3)
    return names[0] + " " + "and " + names[1] + " like this";
  if (names.length > 2 && names.length < 4)
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  if (names.length > 3) {
    let others = names.length - 2;
    return names[0] + ", " + names[1] + " and " + others + " others like this";
  }
}

// 2. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//Answer
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowercaseStr = string.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercaseStr.indexOf(alphabet.charAt(i)) === -1) return false;
  }
  return true;
}

//3. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e))
  }