# Given an array of strings
# return the number of times each string occurs (a frequency / hash table)

def make_frequency_table(some_list):
    frequency_table = {}

    for item in some_list:
        if item not in frequency_table:
            frequency_table[item] = 1
        else:
            frequency_table[item] += 1
    
    return frequency_table

arr1 = ["a", "a", "a"]
print(make_frequency_table(arr1))

arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
print(make_frequency_table(arr2))

arr3 = []
print(make_frequency_table(arr3))

arr4 = ["r","r","a","q","h","a","h","a","h","a","1"," ","r"]
print(make_frequency_table(arr4))