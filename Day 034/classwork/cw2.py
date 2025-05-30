#Write a function that removes the spaces from the string, then return the resultant string.

def no_space(x):
    strr = ""
    for i in x:
        if i != " ":
            strr += i
    return strr