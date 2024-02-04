const accountId = 12345
let accountEmail = "shravan@gmail.com"
var accountPassword = "12345678"
accountCity = "Bengaluru"

let accountState

// accountId = 2   Not allowed

accountEmail = "abc@gmail.com"
accountPassword = "blablabla"
accountCity = "Tumkur"

/*
Prefer not to use var
because of issues in functional scope and block scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])