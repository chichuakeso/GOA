#The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string

def check_exam(arr1,arr2):
    check_exam = 0
    for i in range(len(arr1)):
        if arr2[i] == arr1[i]:
            check_exam += 4
        elif arr2[i] == "":
            check_exam += 0
        elif arr2[i] != arr1[i]:
            check_exam -= 1
    if check_exam < 0:
        return 0
    else:
        return check_exam