"use server";

/**
 *
 * @param str string value from the input
 * @returns true if the input value has 9 characters and only numbers
 */
const digitCount = (str: string): boolean => {
  if (str.length === 9 && !isNaN(Number(str))) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param str 9 number string from the input
 * @returns an array in which the value of each odd number is doubled
 */
const doubleEverySecondDigit = (str: string): string => {
  return str
    .split("")
    .map((num, ind) => {
      if (ind % 2 !== 0) {
        const value = Number(num) * 2;
        return `${value}`;
      } else {
        return num;
      }
    })
    .join("");
};

/**
 *
 * @param str 9 number string with
 * @returns true if the sum of all numbers is a multiple of 10
 */

const checkSumValidation = (str: string) => {
  const sum = str.split("").reduce((accum, curr) => {
    return accum + Number(curr);
  }, 0);

  return sum % 10 === 0;
};

export default async function validateSin(value: string) {
  const isNineDigits = digitCount(value);

  if (!isNineDigits) {
    return false;
  }

  const doubledDigits = doubleEverySecondDigit(value);

  const checkSumValidated = checkSumValidation(doubledDigits);

  return checkSumValidated;
}
