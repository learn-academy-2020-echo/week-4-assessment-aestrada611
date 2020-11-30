// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]



//I couldnt get this one finished up



const arrayDeleter = (array) => {
  let arrayDeleter = array.shift()

  return arrayDeleter
}

console.log(arrayDeleter(collections));




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//must build out function that takes in array
//the fucntion must be summed up and then cubbed
const sumCubed = (array) => {
  let reducer = array.reduce((a, b) => a + b, 0)
  let cuber = reducer ** 3
  return cuber
}



console.log(sumCubed(cubeAndSum1));
console.log(sumCubed(cubeAndSum2));

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//function takes in array
const minMax = (array) => {
  //let newArray = []
  //have to sort in order to put in order
  let arraySorter = array.sort(function(a,b){return a-b})
  //must filter to only include the vlaues at the extremes
  let arrayFilter = arraySorter.filter((value, index) => {
    return index === 0 || index == arraySorter.length - 1
  })
return arrayFilter
  //return arraySorter
}



//wanted to take another crack at it using an empty array and pushing into it.
const minMax2 = (array) => {
  let finalArray = []
  let arraySorter2 = array.sort(function(a,b){return a-b})
  let popper = arraySorter2.pop()
  let pusher = finalArray.push(popper)
  let shifter = arraySorter2.shift()
  let unshifter = finalArray.unshift(shifter)
  return finalArray

}
//need to push values from one array to the new array.
//numbers are in order just need to know how to extract the two extrems
//two possible ways are pop and shift but maybe use of index can help reutrn proper values





console.log(minMax(nums1));
console.log(minMax(nums2));


console.log(minMax2(nums1));
console.log(minMax2(nums2));

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


//The function must take in strings

const capitalized = (string) => {
  //have to split the string into array
  let stringSplitter = string.split("")
  //map through array and return odd index values capitlaized
  let mappedArray = stringSplitter.map((value,index) => {
    if(index % 2 == 0){
      return value
    } else {
      return value.toUpperCase()
    }
  })
  //must join array
  return mappedArray.join("")
}
//conditional statement looking at odd and even index numbers to return the capital letters
//must break string down into an array in order to interact with each elment of the array

console.log(capitalized(testString1));
console.log(capitalized(testString2));


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]




//make one long array using concat
//this will help with all the manipulation happening in one array. need to find method that gets rid of duplicate values
//have to set value

const noDuplicates = (array1, array2) => {
 let concatArray = array1.concat(array2)
 //I knew it was going to most likley be a filter because it would have to be a shorter array or iterate thorught some other way but had hard time finding a way to only return first occurance of an element
 let timesChecker = concatArray.filter((value, index) => {
   return concatArray.indexOf(value) === index
 })
 return timesChecker
}


//This solution betllow is really cool but i dont really know why it worked. I found the solution online when trying to find out how to remove duplicates from an array.


const noDuplicates2 = (array1, array2) => {
 let concat2 = array1.concat(array2)
 let noDup= [...new Set(concat2)]
return noDup
}




// const noDuplicates = (array1, array2) => {
//  let noDuplicatesArray = []
//
// }

console.log(noDuplicates(arr1, arr2));
console.log(noDuplicates2(arr1, arr2));
