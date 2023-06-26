// ------------------------------------------------------------------------------------------------ isOdd
const number = 16;
const isOdd = (number) => {
  return number % 2 === 0;
};

console.log(isOdd(number));

// ------------------------------------------------------------------------------------------------ reverseString

const stringg = "Azerbaijan";
const reverseString = (stringg) => {
  return stringg.split("").reverse().join("");
};

console.log(reverseString(stringg));

// ------------------------------------------------------------------------------------------------ sumArray

const numbers = [1, 2, 3, 4, 5];

const sumArray = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(sumArray(numbers)); // Output: 15

// ------------------------------------------------------------------------------------------------ isPalindrome
const word = "radar";
const isPalindrome = (word) => word === word.split("").reverse().join("");

console.log(isPalindrome(word));

// ------------------------------------------------------------------------------------------------ avarageArray

const avarageNumbers = [1, 2, 3, 4, 5];

const averageArray = (numbers) => {
  let avarage = 0;
  for (let i = 0; i < avarageNumbers.length; i++) {
    avarage += avarageNumbers[i];
  }
  return avarage / numbers.length;
};

console.log(averageArray(avarageNumbers));
