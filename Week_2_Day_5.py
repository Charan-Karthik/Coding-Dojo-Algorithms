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

print(flatten((arr)))
print(flatten((other)))