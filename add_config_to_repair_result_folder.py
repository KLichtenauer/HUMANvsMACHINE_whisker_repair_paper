import os
import re

def contains_substring(file_list, substring):
    for file in file_list:
        if substring in file:
            return True
    return False

def basic_folders(directory):
    for folder_name in os.listdir(directory):
        old_path = os.path.join(directory, folder_name)

        if os.path.isdir(old_path):
            new_folder_name = folder_name.split('-')[0]
            new_path = os.path.join(directory, new_folder_name)

            os.rename(old_path, new_path)


def rename_folders(directory):
    for folder_name in os.listdir(directory):
        folder_path = os.path.join(directory, folder_name)

    
        if os.path.isdir(folder_path):
            file_list = os.listdir(folder_path)

            if contains_substring(file_list, "manual"):
                folder_name += "-manual"
            if contains_substring(file_list, "mio.json"):
                folder_name += "-mio.json"
            if contains_substring(file_list, "generated"):
                folder_name += "-mio.json"
            if contains_substring(file_list, "minimizie-false"):
                folder_name += "-minimize-false"
            if contains_substring(file_list, "no-test"):
                folder_name += "-no-test"
            if contains_substring(file_list, "no-assertion"):
                folder_name += "-no-assertion"


            new_folder_path = os.path.join(directory, folder_name)
            os.rename(folder_path, new_folder_path)

if __name__ == "__main__":
    repair_result_folder = "../repair-result"  # Replace with the actual path to the repair-result folder
    basic_folders(repair_result_folder)
    rename_folders(repair_result_folder)

    
