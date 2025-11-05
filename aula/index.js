let varA = 'a'
const newA = varA
let varB = 'b'
let varC = 'c'

varA = varB
varB = varC
varC = newA

console.log(varA, varB, varC)


