#Write a function that given a floor in the american system returns the floor in the european system.

def get_real_floor(n):
    if n <= 0:
        return n
    elif n < 13:
        return n - 1
    else:
        return n - 2