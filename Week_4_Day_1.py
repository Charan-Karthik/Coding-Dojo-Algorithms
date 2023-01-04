# Given an array of strings
# return the number of times each string occurs (a frequency / hash table)

def make_frequency_table(some_list):
    frequency_table = {}

    for item in some_list:
        # if item not in frequency_table:
        #     frequency_table[item] = 1
        # else:
        #     frequency_table[item] += 1
        frequency_table[item] = frequency_table.get(item, 0) + 1
    
    return frequency_table

arr1 = ["a", "a", "a"]
print(make_frequency_table(arr1))

arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
print(make_frequency_table(arr2))

arr3 = []
print(make_frequency_table(arr3))

arr4 = ["r","r","a","q","h","a","h","a","h","a","1"," ","r"]
print(make_frequency_table(arr4))

# Given a non-empty array of odd length containing ints where every int but one
# has a matching pair (another int that is the same)
# return the only int that has no matching pair.

def find_loner(arr):
    new_hashmap = make_frequency_table(arr)

    for key in new_hashmap:
        if new_hashmap[key] % 2 != 0:
            return key

nums1 = [1]
print(find_loner(nums1))

nums2 = [5, 4, 5]
print(find_loner(nums2))

nums3 = [5, 4, 3, 4, 3, 4, 5]
print(find_loner(nums3))

nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2]
print(find_loner(nums4))
