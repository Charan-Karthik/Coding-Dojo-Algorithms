# Flatten a 2D Array

arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

other = [
    [1,2,3,4,5,6],
    [2,7,4,1,5,5]
]

def flatten(arr2d):
    flattened = []

    for i in range(len(arr2d)):
        for j in range(len(arr2d[i])):
            flattened.append(arr2d[i][j])
    
    return flattened

# print(flatten((arr)))
# print(flatten((other)))

# Flip an array (assume square array)
def flip(arr2d):
    # print('before', arr2d)
    arr2d.reverse()
    # print('after', arr2d)

    for i in range(len(arr2d)):
        arr2d[i].reverse()
    
    return arr2d

# print(flip(arr))
# print(flip(other))

def flip_noBuiltIns(arr2d):
    start, end = 0, len(arr2d)-1

    while start < int(len(arr2d)/2):
        temp = arr2d[start]
        arr2d[start] = arr2d[end]
        arr2d[end] = temp
        start += 1
        end -= 1
    
    for i in range(len(arr2d)):
        # print(len(arr2d[i]))
        left, right = 0, len(arr2d[i])-1

        while left < int((len(arr2d[i])/2)):
            temp = arr2d[i][left]
            arr2d[i][left] = arr2d[i][right]
            arr2d[i][right] = temp
            left += 1
            right -= 1
    
    return arr2d


# print(flip_noBuiltIns(arr))
# print(flip_noBuiltIns(other))