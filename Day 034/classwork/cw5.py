#Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

def digitize(n):
    empty = []
    str_n = str(n)
    for i in range(1, len(str_n) + 1):
        empty.append(int(str_n[-i]))
    return empty