/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Convert the strings to lowercase to ensure case-insensitive comparison
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  // Check if the lengths of the strings are the same
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to store character frequencies for both strings
  const charFrequency1 = {};
  const charFrequency2 = {};

  // Count the frequency of characters in str1
  for (const char of str1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }

  // Count the frequency of characters in str2
  for (const char of str2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

  // Compare the character frequencies of both strings
  for (const char in charFrequency1) {
    if (charFrequency1[char] !== charFrequency2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
