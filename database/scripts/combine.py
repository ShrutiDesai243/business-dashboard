import pandas as pd
import glob

files = glob.glob("scraped/*.csv")  # folder where files exist

df_list = [pd.read_csv(file) for file in files]
combined = pd.concat(df_list, ignore_index=True)

combined.to_csv("raw_data.csv", index=False)