# Book Index
# Given a list of sorted ints representing page numbers return a string with the page numbers formatted as page ranges when the nums span a consecutive range.

def book_index(nums):
    res = []

    i = 0
    while i < len(nums):
        j = i + 1

        if j < len(nums) and nums[i]+1 == nums[j]:
            while j < len(nums)-1 and nums[j]+1 == nums[j+1]:
                j += 1
            res.append(str(nums[i])+"-"+str(nums[j]))
            i = j+1
        else:
            res.append(str(nums[i]))
            i += 1
        

    return ', '.join(res)

nums1 = [1, 13, 14, 15, 37, 38, 70] # expected1 = "1, 13-15, 37-38, 70"
nums2 = [5, 6, 7, 8, 9] # expected2 = "5-9"
nums3 = [1, 2, 3, 7, 9, 15, 16, 17] # expected3 = "1-3, 7, 9, 15-17"

print(book_index(nums1))
print(book_index(nums2))
print(book_index(nums3))