#Given an array of integers your solution should find the smallest integer


def find_smallest_int(arr):
    num = arr[0]
    for element in arr:
        if element < num:
            num = element
    return num