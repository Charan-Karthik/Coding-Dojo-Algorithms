// Flatten a 2D Array

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var other = [
    [1,2,3,4,5,6],
    [2,7,4,1,5,5]
]

function flatten(arr2d){
    var flat = [];

    for(var i=0; i<arr2d.length; i++){
        for(var j=0; j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

// console.log(flatten(arr))
// console.log(flatten(other))

// Flip a 2D Array (flip values 180 degrees, meaning the bottom right should become the top left, etc.)
// Assume square array
function flip(arr2d){
    var reversed = arr2d.reverse()

    for(var i=0; i<reversed.length; i++){
        reversed[i].reverse();
    }
    return reversed;
}
console.log(flip(arr))