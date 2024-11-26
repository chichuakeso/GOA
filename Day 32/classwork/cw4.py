#You get an array of numbers, return the sum of all of the positives ones

def positive_sum(arr):
    sum = 0
    for element in arr:
        if element > 0:
            sum += element
    return sum