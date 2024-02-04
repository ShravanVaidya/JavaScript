let score = "50a"

console.log(typeof score);
console.log(typeof(score));

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

/*

"33" -> 33
"123abc" -> NaN
true -> 1 , false -> 0
null -> 0
undefined -> NaN
"hello" -> NaN

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*

1 -> true, 0 -> false
"" -> false
"something" -> true

*/

let someNumber = 40

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);