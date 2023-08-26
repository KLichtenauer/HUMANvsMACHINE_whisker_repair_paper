import os
import pandas as pd

folder_path = '../repair-result'  # Replace with the actual folder path

# Initialize empty lists to store the last iteration values, last durations, .sb3 file names, and used configs
last_iterations = []
last_durations = []
sb3_file_names = []
used_configs = {}
durations_of_first_repairs = []
file_folders = [] 


# Function to extract the used config from the file name
def extract_config(file_name, test_file_name):
    if file_name is None:
        return "unknown"  # Return "unknown" if file_name is None
    elif "no-test" in file_name:
        return "no-test"
    elif "no-assertion" in file_name:
        return "no-assertion"
    elif "minimizie-false" in file_name:
        return "minimize-false"
    elif "mio.json" in file_name:
        return "minimize-true"
    elif "generated" in test_file_name:
        return "minimize-true-2er"
    else:
        return "manual-written"
    
def extract_duration(df):
    for idx, passing_value in enumerate(df['passing']):
        base_passing_tests = df['numPass'].iloc[0]  # Get the iteration value of the last row
        current_passing_tests = df['numPass'].iloc[idx]  # Get the iteration value of the last row
        

        if pd.notna(passing_value) & (base_passing_tests < current_passing_tests) & (idx!=0): 
            print("base_passing_tests:" + str(base_passing_tests) + "current_passing_tests: " + str(current_passing_tests) )
            print(idx)
            #print(df.iloc[:, -1].iloc[idx])
            return df.iloc[:, -1].iloc[idx]
    return None



    
# Iterate over each folder
for root, dirs, files in os.walk(folder_path):

    # Check if there's a file with "repair" in its name in the folder
    if not any("repair" in f for f in files):
        continue  # Skip the folder if no "repair" file exists



    # Check if there is at least one .sb3 file in the folder
    sb3_files = [f for f in files if f.endswith('.sb3')]
    if not sb3_files:
        continue  # Skip the folder if no .sb3 file exists
    
    # Get the first .sb3 file name in the folder
    sb3_file_name = sb3_files[0]
    
    test_files = [t for t in files if t.endswith('.js')]
    if not test_files:
        continue  # Skip the folder if no .sb3 file exists
    
    test_file_name = test_files[0]



    for file in files:
        if file.endswith('.csv'):
            file_path = os.path.join(root, file)
            if os.path.getsize(file_path) > 0:  # Check if file is not empty
                df = pd.read_csv(file_path, delimiter=';')  # Set delimiter to semicolon
                if 'iteration' in df.columns:  # Check if 'iteration' column exists
                    last_iteration = df['iteration'].iloc[-1]  # Get the iteration value of the last row
                    last_duration = df.iloc[:, -1].iloc[-1]  # Get the last_duration value of the last row
                    durations_of_first_repairs.append(extract_duration(df))  
                    last_iterations.append(last_iteration)
                    last_durations.append(last_duration)
                    sb3_file_names.append(sb3_file_name)
                    file_folders.append(os.path.basename(root))  # Add the folder name

                    used_configs[sb3_file_name] = extract_config(sb3_file_name, test_file_name)

# Merge the iteration, duration, .sb3 file name, and used config values into a single dataframe
merged_df = pd.DataFrame({'sb3_file_name': sb3_file_names,
                          'used_config': [used_configs[name] for name in sb3_file_names],
                          'iteration': last_iterations,
                          'last_duration': last_durations, 
                          'duration_of_first_repair': durations_of_first_repairs,
                          'file_folders': file_folders})

# Fill NaN or inf values in 'iteration' and 'duration_of_first_repair' with 0 (you can choose a different default value if desired)
merged_df['iteration'].fillna(0, inplace=True)
merged_df['duration_of_first_repair'].fillna(0, inplace=True)


# Convert 'iteration' and 'duration_of_first_repair' columns to integers
merged_df['iteration'] = merged_df['iteration'].astype(int)
merged_df['duration_of_first_repair'] = merged_df['duration_of_first_repair'].astype(int)

# Sort the DataFrame by 'sb3_file_name' in ascending order
merged_df.sort_values(by='duration_of_first_repair', inplace=True)


output_file = 'maximum-iteration-durations-and-configs-of-repaired-programs.csv'  # Replace with the desired output file path
merged_df.to_csv(output_file, index=False)

print(f"Output saved to {output_file}")

# Print the merged dataframe
print(merged_df)
