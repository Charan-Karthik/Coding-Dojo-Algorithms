// mergeDedupe Algorithm
// actually meant to be Week_12_Day_1, but Monday was Labor Day (so we did two algos on Day 2 - Tuesday)

// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let res = new Set();
    let i = 0;
    let j = 0;

    while (arr1[i] !== undefined && arr2[j] !== undefined) {
        if (arr1[i] < arr2[j]) {
            if (!res.has(arr1[i])) {
                res.add(arr1[i]);
            }
            i += 1;
        } else if (arr1[i] > arr2[j]) {
            if (!res.has(arr2[j])) {
                res.add(arr2[j]);
            }
            j += 1;
        } else { // meaning arr1[i] === arr2[j]
            if (!res.has(arr1[i])) {
                res.add(arr1[i]);
            }
            i += 1;
            j += 1;
        }
    }

    while (i < arr1.length) {
        if (!res.has(arr1[i])) {
            res.add(arr1[i]);
        }
        i += 1;
    }
    while (j < arr2.length) {
        if (!res.has(arr2[j])) {
            res.add(arr2[j]);
        }
        j += 1;
    }

    return Array.from(res);

}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a -> 
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]