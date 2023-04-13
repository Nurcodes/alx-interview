#!/usr/bin/python3

import sys


def print_msg(dict_status, file_size):
    """
    Args:
        dict_status: dictionary of status codes
        file_size: size of file
    Returns:
        Empty
    """

    print("File size: {}".format(file_size))
    for k, v in sorted(dict_status.items()):
        if v != 0:
            print("{}: {}".format(k, v))


file_size = 0
status = 0
length = 0
dict_status = {"200": 0, "301": 0, "400": 0, "401": 0,
               "403": 0, "404": 0, "405": 0, "500": 0}

try:
    for line in sys.stdin:
        parsed_line = line.split()  # ✄ trimming
        parsed_line = parsed_line[::-1]  # inverting

        if len(parsed_line) > 2:
            length += 1

            if length <= 10:
                file_size += int(parsed_line[0])  # file size
                status = parsed_line[1]  # status status

                if (status in dict_status.keys()):
                    dict_status[status] += 1

            if (length == 10):
                print_msg(dict_status, file_size)
                length = 0

finally:
    print_msg(dict_status, file_size)
