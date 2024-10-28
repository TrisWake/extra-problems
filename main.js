function isEvenlyDivisible(num1, num2) {
  if(num1 % num2 === 0){
    return true
  }else{
    return false
  }
}

function halfSquare(num) {
  return num * num / 2
}

function exclaim(str) {
  if(str.endsWith("!")){
    return str
  }if( str.endsWith("!!")){
  return str + "!"
}else{
  return str + "!"
}
}

function isLong() {
}

function countWords() {
}

function containsDigit() {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy(arr) {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
