// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function consecutiveSum(arr, target) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        let j = i + 1;
        let sum = arr[i];
        if (sum > target) {
            continue;
        }
        tempArr.push(arr[i]);
        if (sum === target) {
            newArr.push([...tempArr]);
        }
        while (j < arr.length) {
            sum += arr[j];
            if (sum > target) {
                break;
            }
            tempArr.push(arr[j]);
            if (sum === target) {
                newArr.push([...tempArr]);
            }
            j++
        }
    }
    return newArr;
}

console.log(consecutiveSum([2, 5, 3, 6, 7, 0, 0, 23, 16], 16))
console.log(consecutiveSum([0, 0, 0, 16], 16))
console.log(consecutiveSum([0, 16, 0, 16], 16))

console.log(consecutiveSum([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));