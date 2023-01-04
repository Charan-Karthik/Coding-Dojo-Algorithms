# RECURSION!!! (cue 'Hello darkness my old friend'...)

def sigma(num):
    # Base case to exit recursive loop!
    if num == 1:
        return 1

    return num + sigma(num-1)

print(sigma(4))



def fib(num):
    # Base cases since the first two terms in the Fibonacci sequence are always 0, 1.
    if num == 1:
        return 0
    elif num == 2:
        return 1

    return fib(num-1) + fib(num-2)

print(fib(6))