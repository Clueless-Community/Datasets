'''
target: create a python script to automate the datasets.md file updation every time there is change in the data folder files.
This folder should not be changes unless the related changes are updated in this script.
Avoid spaces while naming the file/folder
# '''


import os

data_path = os.path.join(".", "Data") # ./Data

with open("DATASETS.md", 'w') as mdFile:
    mdFile.write("## All DATASETS.\n")
    for root, folders, files in os.walk(data_path):
        if len(files)> 0:
            baseName = os.path.basename(root)
            mdFile.write(f"### {baseName.upper()}\n")
            for f in files:
                title = f.split(".")[0].upper()
                link = os.path.join(root, f)
                while "\\" in link:
                    link = link.replace("\\", "/")
                content = f"[{title}]({link})\n\n"
                mdFile.write(content)
                mdFile.write("\n")
            mdFile.write("\n")

mdFile.close()
        