// Merge Sort


function mergeSort(arr) {
    
    if (arr.length === 1) {
        return arr;
    } else {
        let mid = Math.ceil(arr.length / 2);
        let arr1 = arr.slice(0, mid);
        let arr2 = arr.slice(mid);
    }

    let leftPortion = mergeSort(arr1);
    let rightPortion = mergeSort(arr2);

    return sortMerge(leftPortion, rightPortion);
}


function sortMerge(arr1, arr2) {
    let x = 0;
    let y = 0;
    let newArr = [];

    while (arr1[x] && arr2[y]) {
        if (arr1[x] < arr2[y]) {
            newArr.push(arr1[x]);
            x += 1;
        } else {
            newArr.push(arr2[y]);
            y += 1;
        }
    }

    while (arr1[x]) {
        newArr.push(arr1[x]);
        x += 1;
    }
    while (arr2[y]) {
        newArr.push(arr2[y]);
        y += 1;
    }

    return newArr;
}