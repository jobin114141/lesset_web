import glob
import re

for filepath in glob.glob('f:/joeKuttan_web/*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    links = re.findall(r'href="([^"]+\.html)"', content)
    if links:
        print(f'{filepath}: {set(links)}')
