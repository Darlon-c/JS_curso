const numbers = [1, 2, 3, 4, 5, 6]

for (let number of numbers) {

    if(number === 4) {
        console.log("Pulei o número 4")
        continue
    }

    if(number === 5) {
        console.log(`achei o número ${number}`)
        break
    }
    console.log(number)
}







