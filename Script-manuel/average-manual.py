import os
import pandas as pd
import numpy as np

root_directory = r"C:\Users\Kilian\Documents\Seminar\Script-manuel"
file_pattern = "*.csv"

test_values = []
coverage_values = []
test_suite_size_values = []

for folder_name, _, file_names in os.walk(root_directory):
    for file_name in file_names:
        if file_name.endswith(file_pattern):
            file_path = os.path.join(folder_name, file_name)
            df = pd.read_csv(file_path)

            # Summing up the values in "failed," "passed," "error," and "skip" columns
            test_values.append(df["failed"].sum() + df["passed"].sum() + df["error"].sum() + df["skip"].sum())

            column_values = df["assertions"].values
            valid_values = column_values[~np.isnan(column_values)]
            test_suite_size_values.extend(valid_values)

            coverage_column = df["coverage"].values
            valid_coverage_values = coverage_column[~np.isnan(coverage_column)]
            coverage_values.extend(valid_coverage_values)


test_average = np.mean(test_values)
coverage_average = np.mean(coverage_values)
test_suite_size_average = np.mean(test_suite_size_values)

print("Average test:", test_average)
print("Average bestCoverage:", coverage_average)
print("Average Assertion:", test_suite_size_average)
