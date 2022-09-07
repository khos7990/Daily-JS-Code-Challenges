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
  return a.filter((e) => !b.includes(e));
}

//4. Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  let hours = "";
  let minutes = "";
  let remainingTime = "";

  if (seconds === 0) return "00:00:00";
  //calculation for hours
  if (seconds / 3600 >= 1) {
    remainingTime = seconds / 3600;
    hours = seconds / 3600;
    hours = hours | 0;
    remainingTime = remainingTime - hours;
  }
  if (hours <= 9 && hours >= 1) {
    hours = "0" + hours;
  } else if (hours >= 10) {
    hours = hours;
  } else {
    hours = "00";
    remainingTime = -1;
  }
  //calculation for minutes
  if (remainingTime >= 0) {
    minutes = remainingTime * 60;
    minutes = minutes | 0;
  } else {
    minutes = seconds / 60;
    minutes = minutes | 0;
    remainingTime = seconds % 60;
  }

  if (minutes < 1) {
    minutes = "00";
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  //calculation for seconds
  if (minutes % 1 !== 0) {
    seconds = minutes % 1;
    seconds = Math.round(seconds * 60);
  } else {
    seconds = seconds % 60;
  }

  if (seconds < 1) {
    seconds = "00";
  } else if (seconds <= 9) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

//Best Practice
//function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }

//5. What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
function anagrams(word, words) {
  let wordArr = word.split("");
  let results = [];
  wordArr = wordArr.sort().join("");

  for (let i = 0; i < words.length; i++) {
    let newWord = words[i].split("");
    newWord = newWord.sort().join("");
    if (newWord === wordArr) {
      results.push(words[i]);
    }
  }

  return results;
}
//Best Practice
// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }

//6. Check if numbers are prime numbers or not. Return true or false.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % [i] === 0) return false;
  }
  return true;
}
//More efficient Answer

// function isPrime2(n) {
//   if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
//   if (n % 2 == 0) return (n == 2);
//   var m = Math.sqrt(n);
//   for (var i = 3; i <= m; i += 2) {
//       if (n % i == 0) return false;
//   }
//   return true;
// }

//7. // - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.

//Answer

function removeEnds(str) {
  if (str.length < 3) return "";

  return str.substring(1, str.length - 1);
}

//8.Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number
// of characters then it should replace the missing second character of the final pair with an underscore ('_').

//Answer
function solution(str) {
  if (str.length === 0) return [];
  let newArr = str.match(/(..?)/g);
  const lastItem = newArr[newArr.length - 1];
  if (lastItem.length === 1) {
    let addedItem = lastItem + "_";
    newArr.splice(-1, 1, addedItem);
  }
  return newArr;
}

//otherways
// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }

//OR

//   var i = 0;
//   var result = new Array();
//   if (str.length % 2 !== 0) {
//     str = str + '_';
//   }
//   while (i < str.length) {
//       result.push(str[i] + str[i+1]);
//       i += 2;
//     }
//   return result;
// }


//9. You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//Answer
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array

 //best solution
//  function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }


//10. Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

//Answer 

function domainName(url){
  let domain = url.split(".")
   if ( domain[0].includes("www")) {
     domain = domain[1]
   } else {
  domain = domain[0]
     if (domain.includes("http")) {
      domain =  domain.split("/")
      domain = domain[2]
     }
     
   }
  
  return domain
  }
  
//best solution 
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };