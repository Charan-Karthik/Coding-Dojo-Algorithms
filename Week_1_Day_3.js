// Check if an array is a palindrome

function isPalindrome(arr) {
    for(var left=0; left < arr.length/2; left++) {
        var right = arr.length - 1 - left;
        if(arr[right] !== arr[left]){
            return "Not a palindrome";
        }
    }
    return "Pal-indrome!"
}

var result1 = isPalindrome( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPalindrome( [3, 2, 1, 1, 2, 3] );
console.log(result2)