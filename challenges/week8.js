const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let found = nums.find(function (element) {
    return element === n;
  });
  if (found === undefined) {
    return null
  }
  if (nums.indexOf(found) === nums.length - 1) {
    return null
  } else {
    let relevantIndex = nums.indexOf(found) + 1
    return nums[relevantIndex]
  }

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count0s = 0;
  let count1s = 0;
  stringed = str.split('');
  stringed.forEach((number) => {
    if (Number(number) === 0) {
      count0s = count0s + 1
    } else if (Number(number) === 1) {
      count1s = count1s + 1
    }
  })
  return { 1: count1s, 0: count0s }

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split("").reverse().join(""))
};


const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.forEach((array) => {
    array.forEach((number) => {
      total = total + number
    })
  })
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
