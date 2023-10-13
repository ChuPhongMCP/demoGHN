const convertPrice = (number) => {
  // Convert the number to a string
  let numStr = number.toString();
  let result = '';

  // Iterate through the string from the end
  for (let i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    // Add a period after every third digit
    if (j > 0 && j % 3 === 0) {
      result = '.' + result;
    }
    result = numStr[i] + result;
  }

  return result;
}

export {
  convertPrice
}