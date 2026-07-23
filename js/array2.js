//  Make an array
const myArray = ['1', '2', '3']
console.log(myArray)

// Create empty array
const yourArray = []
console.log(yourArray)

// Adding data to array using index
yourArray[0] = 'Hi'
yourArray[1] = 'Hello'

console.log(yourArray)

// Another way to create an array
const theirArray = new Array()
theirArray[0]= 'Jakarta'

// Adding data by skipping indexes
theirArray[3] = 'Bogor'

// Picking data from array by index
console.log(theirArray[3])

// Picking an undefined array data
console.log(theirArray[1])

const numArray = ['1', '2', '3', '4', '5']

// Checking a data is include in array, return true if included, return false if not
console.log(numArray.includes('2'))
console.log(numArray.includes('6'))

// Checking a data by index
console.log(numArray.indexOf('3'))

// Using a variable
const target = '6'
const indexArray = numArray.indexOf(target)
const includesArray = numArray.includes(target)

// Boolean conversion
const status = includesArray ? 'in' : 'not in'

// Conditional checking
if (includesArray) {
    console.log(`The number is ${status} index position ${indexArray}`)
} else {
    console.log("That number isn't in array")
}