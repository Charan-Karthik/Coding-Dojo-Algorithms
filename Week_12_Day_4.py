# TwoSum Python

def twoSumSlow(nums, target):
    for i in range(len(nums)):
        j = i + 1 

        while j < len(nums):
            if nums[i] + nums[j] == target:
                return [i, j]
            else:
                j += 1

print(twoSumSlow([2, 11, 7, 15], 9)) # [0,2]
print(twoSumSlow([3, 2, 4], 6)) # [1,2]
print(twoSumSlow([3, 3], 6)) # [0,1]