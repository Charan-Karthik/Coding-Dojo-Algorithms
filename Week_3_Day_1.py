# Compare strings without regard to capitals or lower cas
# Return true if they match, flase if they don't
# i.e. "ABC" should match with "AbC"

def string_compare_case_insensitive(str1, str2):
    # str1 = str1.lower()
    # str2 = str2.lower()

    # if str1 != str2:
    #     return False
    # else:
    #     return True

    # Can also do in one line
    return str1.lower() == str2.lower()

print(string_compare_case_insensitive("ABC", "abc"))
print(string_compare_case_insensitive("ABC", "abd"))
print(string_compare_case_insensitive("ABC", "bc"))


# Acronyms
# Create a function that, given a string, returns the string's acronym (first letter of each word capitalized)

def acronymize(string):
    words = string.split()

    acronym = ""
    for word in words:
        acronym += word[0].upper()
    
    return acronym

str1 = "object oriented programming" # "OOP" is the expected output
str2 = "abstraction polymorphism inheritance encapsulation" # "APIE" is expected output
str3 = "software development life cycle" # "SDLC" is expected output
str4 = "  global   information tracker    " # "GIT" is expected output

# print(acronymize(str1))
# print(acronymize(str2))
# print(acronymize(str3))
# print(acronymize(str4))

# try without using .split()
def acronymize_without_split(string):
    acronym = ""
    i=0
    
    while string[i] == " ":
        i += 1
    acronym += string[i].upper()

    if acronym != " ":
        i += 1
    
    while i < len(string)-1:
        if string[i-1] == " " and string[i+1] != " ":
            if string[i] != " ":
                acronym += string[i].upper()
        i += 1
    
    return acronym

print(acronymize_without_split(str1))
print(acronymize_without_split(str2))
print(acronymize_without_split(str3))
print(acronymize_without_split(str4))