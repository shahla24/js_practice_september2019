function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squareNums = nums.map
  (num => num * num);
  return squareNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundFoodItem = false;
  menu.forEach(function(menuItem) {
  menuItem.ingredients.forEach(function(menuItemIngredient) {
  if (menuItemIngredient === ingredient) {
    foundFoodItem = true;
  }
});
  })
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
