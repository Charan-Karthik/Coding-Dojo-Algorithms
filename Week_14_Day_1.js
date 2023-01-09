// Write a function that takes in two inputs. The first is an array, and the second is a callback function.
// This function should remove every element in the array (starting with index 0) until the callback function returns true.
// The callback function takes in the iterated element of the array.
// Return an empty array if the callback function never returns true.

function dropIt(arr, callback) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            break
        }
    }

    if (i === arr.length) {
        return res;
    } else {
        for (let j = i; j < arr.length; j++) {
            res.push(arr[j]);
        }
    }

    return res;
}