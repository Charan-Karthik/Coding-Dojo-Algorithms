# Given two numbers, find the LCM

def lcm(num1, num2):

    if num1 > num2:
        bigger = num1
        smaller = num2
    elif num1 < num2:
        bigger = num2
        smaller = num1
    else:
        return num1

    for i in range(1, smaller+1):
        if (bigger*i) % smaller == 0:
            return bigger*i


print(lcm(3, 5))
print(lcm(9, 4))