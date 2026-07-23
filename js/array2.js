//  Make an array
const myArray = ["1", "2", "3"];
console.log(myArray);

// Create empty array
const yourArray = [];
console.log(yourArray);

// Adding data to array using index
yourArray[0] = "Hi";
yourArray[1] = "Hello";

console.log(yourArray);

// Another way to create an array
const theirArray = new Array();
theirArray[0] = "Jakarta";

// Adding data by skipping indexes
theirArray[3] = "Bogor";

// Picking data from array by index
console.log(theirArray[3]);

// Picking an undefined array data
console.log(theirArray[1]);

const numArray = ["1", "2", "3", "4", "5"];

// Checking a data is include in array, return true if included, return false if not
console.log(numArray.includes("2"));
console.log(numArray.includes("6"));

// Checking a data by index
console.log(numArray.indexOf("3"));

// Using a variable
const target = "4";
const includesArray = numArray.includes(target);

// Boolean conversion
const status = includesArray ? "in" : "not in";

// Conditional checking
if (includesArray) {
  const indexArray = numArray.indexOf(target);

  // Checking data before and after the index

  // Creating a logic for checking the index
  const beforeIndex = indexArray - 1;
  const afterIndex = indexArray + 1;

  // Declare a variable to stores before and after index
  const before = numArray[beforeIndex];
  const after = numArray[afterIndex];

  console.log(`The number before ${target} is ${before} and after is ${after}`);
  console.log(`The number is ${status} index position ${indexArray}`);
} else {
  console.log("That number isn't in array");
}

// Picking first and last data from array
const firstArray = numArray.shift();
const lastArray = numArray.pop();
console.log(
  `The first data of the array is ${firstArray} and the last is ${lastArray}`,
);

// Changing keys of an array
const fruitArray = [];
fruitArray["Apple"] = "Apple";
fruitArray["Mango"] = "Mango";

// The length is 0 because the index is string not an ordered number
console.log(fruitArray);

// Copying an array (safe way)
const originalArray = ["A", "B", "C", "D", "E"];

copyArray = [...originalArray]; // Or using originalArray.slice(); Array.from(originalArray); JSON.parse(JSON.stringfy(originalArray))
copyArray[0] = "F";

console.log(originalArray);
console.log(copyArray);

// Multidimensional Array
const multiArray = [
  ["Dhia", "Arfa"],
  ["Fire", "Fly"],
  ["Yuki", "Setsuna"],
];

console.log(multiArray[1][0]);

// Function Array
const funcArray = [
  {
    hello: function () {
      console.log("Hello World");
    },
  },
  {
    hi: function () {
      console.log("Hi!");
    },
  }
];

console.log(funcArray[1].hi)
funcArray[1].hi()

// Merging Array
const abcArray = ['Ayu', 'Budi', 'Cahyo']
const defArray = ['Dhia', 'Eko', 'Fitri']

const mergeArray = abcArray.concat(defArray)
console.log(mergeArray)

// Break into single piece of data from array
for (list of mergeArray) console.log(list) // In data (string, int, etc)
for (list in mergeArray) console.log(list) // In index

// Mapping
mergeArray.map((value, index) => console.log(value, index))

// Mapping Using Object
const data = [
    {
        name: 'Jhony',
        age: 18,
        major: 'Cyber Security',
    },
    {
        name: 'Dhia',
        age: 21,
        major: 'Software Development',
    },
    {
        name: 'Ulwan',
        age: 20,
        major: 'Machine Learning',
    },
    {
        name: 'Imad',
        age: 19,
        major: 'Data Analyst',
    },
]

// Showing a values (using values.name if just want the name)
data.map((values, index) => {
    console.log(values)
})

// Sorting
data.sort ((a, b) => a.age - b.age).map((values) => console.log(values))

// Filtering
data.filter((x) => x.age >= 20).map((values) => console.log(values))