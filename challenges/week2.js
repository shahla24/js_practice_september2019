function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
const numOfBuses = people / 40;
const isInteger = Number.isInteger(numOfBuses);
if (isInteger) {
  return numOfBuses;
} else {
  return Math.ceil(numOfBuses);
}
}
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheep = 0;
  for (let key in arr) {
    if(arr[key] === "sheep") {
      sheep++;
    }
  }
  return sheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
const firstLetter =person.address.postCode[0];
const secondLetter =person.address.postCode[1];
const isAlphabeticCharacter = isNaN(Number(secondLetter));
return firstLetter === "M" && !isAlphabeticCharacter;
}

// let personCity = person.address.city;
// let personPostCode = person.address.postCode;
// return personCity === "Manchester" && personPostCode.slice(0,1) === "M";


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
