# Given an array of numbers, find the mode.

def mode(array):
    if len(array) < 1:
        return None
    elif len(array) == 1:
        return array[0]

    frequencyTable = {}

    for item in array:
        frequencyTable[item] = frequencyTable.get(item, 0) + 1
    
    mode = ""
    largestOccurrences = 0

    for potentialMode in frequencyTable:
        if frequencyTable[potentialMode] > largestOccurrences:
            largestOccurrences = frequencyTable[potentialMode]
            mode = potentialMode
    
    return mode

print(mode([]))
print(mode([43]))
print(mode([1, 2, 3, 4, 4, 6, 2, 2, 2, 3, 3, 3, 4, 3, 2, 3, 3, 3, 3, 7]))