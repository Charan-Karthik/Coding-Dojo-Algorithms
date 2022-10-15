# Check if an array is a palindrome

def isPalindrome(arr):
    left = 0
    right = len(arr) -1

    while left < len(arr)/2:
        if arr[left] != arr[right]:
            return False
        else:
            left += 1
            right -= 1

    return True

print(isPalindrome([0, 1, 1, 0]))
print(isPalindrome([0, 1, 2, 1, 0]))
print(isPalindrome([1]))
print(isPalindrome([]))
print(isPalindrome([0, 1, 2, 3, 1, 0]))