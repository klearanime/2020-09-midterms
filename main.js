// Your code below.

const isValidPassword = function(str) {
  for (const check of str) {
    if (str.includes(' ') || str.includes('.') || str.length < 12) {
      return false
    } else {
      return true
    }
  }
}

const onlyCs = function (nums) { 
  let Cs = [] 
  for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= 70 && nums[i] <= 79) {
    Cs.push(nums[i])
    }
  }
  return Cs
}

const countBs = function (letterB) {
  let bees = 0
  for (let i = 0; i < letterB.length; i++) {
    if (letterB[i] >= 80 && letterB[i] <= 89) {
      bees = bees + 1
    }
  } 
  return bees
}

const lastIndexOfPunctuation = function (str) {
  let exclaim = str.lastIndexOf('!')
  let period = str.lastIndexOf('.')
  let question = str.lastIndexOf('?')
  for (const marks of str) {
      if (str.includes('!')) {
        return exclaim
      } else if (str.includes('?')) {
        return question
      } else if (str.includes('.')) {
        return period
    } else {
      return -1
    }
  }
}

const deleteMiddleLetters = function(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
  if (str.length % 2 === 1) {
    result = result + str[i] / 2
  } else if (str[i].length / 2  && str[i].length / 2 -1) {
      result = result + str[i]
  }
  }
return result
}

const getCenturies = function () {

}




// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
