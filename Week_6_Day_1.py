# RECURSION!!! (cue 'Hello darkness my old friend'...)

def sigma(num):
    # Base case to exit recursive loop!
    if num == 1:
        return 1

    return num + sigma(num-1)

print(sigma(4))