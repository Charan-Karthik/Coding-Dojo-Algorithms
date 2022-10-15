# reverse an array in place

def reverse(arr):
    if len(arr) < 1:
        return []
    if len(arr) == 1:
        return arr

    for i in range(int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-1-i]
        arr[len(arr)-1-i] = temp
    
    return arr

print(reverse(["a", "b", "c", "d", "e"]))