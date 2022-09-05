// Insertion Sort Algorithm

// Best: O(n) (if given a sorted array)
// Average: O(n^2)
// Worst: O(n^2)

// One possible solution:


function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while(temp < arr[j]){ // in javascript comparing undefined to an integer will return false
            arr[j+1] = arr[j];
            j -= 1;
        }
        arr[j+1] = temp;
    }

    return arr;
}

const myArr = [3, 2, 9, 5, 1, 4, 8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

console.log(insertionSort(myArr))
console.log(insertionSort(arrTest))