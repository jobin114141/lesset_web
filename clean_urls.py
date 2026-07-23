import glob
import re

for filepath in glob.glob('f:/joeKuttan_web/*.html'):
    if 'old_index.html' in filepath:
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    # Replace index.html with ./
    new_content = re.sub(r'href="index\.html"', 'href="./"', new_content)
    # Replace other html files with just the name
    new_content = re.sub(r'href="([^"]+)\.html"', r'href="\1"', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')
