function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizeWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = vatRate / 100
  let newPrice = ( VAT * originalPrice) + originalPrice;
  return newPrice;

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = reduction / 100
  let discountedPrice = originalPrice - (discount * originalPrice);
  return discountedPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
    
    else if (str.length % 2 === 0) {
      let mid = str.length / 2
      return str.slice (mid - 1, mid + 1);
    } else {
      let newLength = str.length + 1;
      mid = newLength / 2;
    }
    return str.slice(mid - 1, mid)
      }
    


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  
  return word.split("").reverse().join("");
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArr = []
  words.forEach(function (word) {
    
    reversedWord = word.split("").reverse().join("");
  
    newArr.push(reversedWord);
  })
  return newArr;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let total = 0;
  users.forEach(function(user) {
    const machineType = user.type;
    if(machineType === "Linux") {
      total += 1;
    }
  });
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  scores.forEach(function(item) {
    total += item;
  })
  return Math.round((total/scores.length) * 100)/100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if  (n % 3 !== 0 && n % 5 !==0) {
    return n
  } else if ( n % 3 === 0) {
    return "fizz";
  } else if (n % 5 ===0) {
    return "buzz" }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
