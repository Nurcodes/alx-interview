#!/usr/bin/python3
""" Task 0-minoperations"""


def minOperations(n):
    """
    minOperations
    the fewest number of operations needed for n H characters
    """

    if (n < 2):
        return 0
    operations = 0
    root = 2
    while root <= n:
        # if is even
        if n % root == 0:
            operations += root
            # set n to the remainder
            n /= root
            root = root - 1
        root += 1
    return operations
