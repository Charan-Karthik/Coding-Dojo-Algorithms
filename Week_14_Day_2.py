# Rehash an incorrectly hashed string by combining letter count occurrences and alphabetizing them.

def rehash(string):
    hashmap = {}
    numStr = ""
    lastLetter = None

    for char in string:
        if char.isalpha():
            if lastLetter in hashmap:
                hashmap[lastLetter] += int(numStr)
                numStr = ""
            if char in hashmap:
                lastLetter = char
                continue
            else:
                lastLetter = char
                hashmap[char] = 0
        else:
            numStr += char
    hashmap[lastLetter] += int(numStr)

    letters = []
    for key in hashmap:
        letters.append(key)
    letters.sort()

    resultStr = ""
    for letter in letters:
        resultStr += letter
        resultStr += str(hashmap[letter])

    return resultStr

string1 = "b70a164c32a20c10"
expected1 = "a184b70c42"

print(rehash(string1) == expected1)