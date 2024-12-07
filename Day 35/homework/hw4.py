#Your task is to write a function which returns the time since midnight in milliseconds.

def past(h, m, s):
    return (h * 3600 + m * 60 + s) * 1000