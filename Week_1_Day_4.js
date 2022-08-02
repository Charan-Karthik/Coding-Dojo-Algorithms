// Reverse an array without creating a new array.

function reverse(arr){
    for(var i=0; i < arr.length/2; i++){
        var original = arr[i];
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = original
    }
    return arr
}

console.log(reverse(["a", "b", "c", "d", "e"]))