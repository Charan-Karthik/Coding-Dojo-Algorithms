# Implement Binary Search

def binarySearch(array, target):
    left, right = 0, len(array)-1

    while left <= right:
        middle = (left+right)//2

        if array[middle] > target:
            right = middle - 1
        elif array[middle] < target:
            left = middle + 1
        else:
            return True

    return False



print(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110))
print(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 175))