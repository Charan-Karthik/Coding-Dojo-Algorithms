# NEED TO COMPLETE

# Create a function that returns a boolean whether the string is a strict palindrome. Assume input string does not contain any spaces.
# Do not ignore spaces, punctuation and capitalization

def isPalindrome(string):
    left, right = 0, len(string)-1

    while left < right:
        if string[left] != string[right]:
            return False
        
        left += 1
        right -= 1
    
    return True


# Longest Palindrome
# For this challenge, we will look not only at the entire string provided, but also at the substrings within it.
# Return the longest palindromic substring. 


print(isPalindrome('racecar'))
print(isPalindrome('tacodog'))