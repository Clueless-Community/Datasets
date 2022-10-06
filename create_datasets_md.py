'''
target: create a python script to automate the datasets.md file updation every time there is change in the data folder files.
'''
import os

data_path = os.path.join(".", "Data")

with open("DATASETS.md", "w") as mdFile:
    mdFile.write(f"# All Datasets")
    for root, folders, files in os.walk(data_path):
        baseName = os.path.basename(root)
        if len(files) > 0:
            mdFile.write(f"## {baseName.upper()}\n")
            for f in files:
                title = f.split(".")[0].upper()
                dirName = os.path.dirname(__name__)
                link = os.path.join(root, f)
                content = f"- [{title}]({link})"
                mdFile.write(content)
                mdFile.write("\n")
        mdFile.write("\n")

mdFile.close()