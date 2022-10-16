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

print(flip(arr))
print(flip(other))