
import re

file_path = '/Users/kimdongho/Desktop/hangle/src/data/vocab.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in lines:
    match_id = re.search(r'id:\s*(\d+)', line)
    match_korean = re.search(r"korean:\s*'([^']+)'", line)
    match_tc = re.search(r"traditional_chinese:\s*'([^']+)'", line)
    
    if match_id and match_korean:
        tc_val = match_tc.group(1) if match_tc else "MISSING"
        print(f"ID: {match_id.group(1)}, Korean: {match_korean.group(1)}, TC: {tc_val}")
