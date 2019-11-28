function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNumbers = nums.filter(number => {
    return number < 1;
  })
  return smallNumbers;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const findName = names.filter(function (name) {
    if (name[0] === char) {
      return true;

    } else {
      return false
    }
  });
  return findName;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let theIntegers = [];
  nums.forEach(function (everyNums) {
    if (Number.isInteger(everyNums)) {
      theIntegers.push(everyNums)
    }
  })
  return theIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
