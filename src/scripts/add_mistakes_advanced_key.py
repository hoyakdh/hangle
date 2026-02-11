import re

file_path = 'src/data/translations.ts'

advanced_translations = {
    'en': "Advanced Tip",
    'es': "Consejo Avanzado",
    'ja': "上級編",
    'fr': "Conseil Avancé",
    'th': "เคล็ดลับขั้นสูง",
    'zh': "进阶提示",
    'zh-TW': "進階提示",
    'hi': "उन्नत सुझाव"
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content

# Strategy:
# 1. Find language block
# 2. Find guide.mistakes block inside it
# 3. Find 'tip:' key inside mistakes block
# 4. Insert 'advanced:' key after it

for lang, adv_text in advanced_translations.items():
    # Regex to find the tip line inside guide.mistakes for specific language
    # This is tricky because "tip" might appear elsewhere.
    # However, structure is:
    # lang: {
    #   ...
    #   guide: {
    #     ...
    #     mistakes: {
    #       ...
    #       tip: "..."
    #     }
    #   }
    # }
    
    # We can try to match the whole path locally or just find the language block first
    
    # Find start of language block
    lang_pattern = rf"^\s*(['\"]?){re.escape(lang)}\1:\s*\{{"
    lang_match = re.search(lang_pattern, new_content, re.MULTILINE)
    
    if not lang_match:
        print(f"Language {lang} not found")
        continue
        
    start_idx = lang_match.end()
    
    # Find end of language block (to limit search)
    brace_count = 1
    end_idx = -1
    for i in range(start_idx, len(new_content)):
        if new_content[i] == '{':
            brace_count += 1
        elif new_content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i
                break
    
    if end_idx == -1:
        print(f"End of block for {lang} not found")
        continue
        
    lang_block = new_content[start_idx:end_idx]
    
    # Inside lang_block, find guide -> mistakes -> tip
    # We can search for `mistakes: {` ... `tip: "..."`
    # Note: indentation is usually consistent
    
    # Regex for mistakes block start
    mistakes_pattern = r'mistakes:\s*\{'
    mistakes_match = re.search(mistakes_pattern, lang_block)
    
    if not mistakes_match:
        print(f"Mistakes block not found in {lang}")
        continue
        
    mistakes_start = mistakes_match.end()
    
    # Find 'tip:' after mistakes_start
    # tip: "Tip" or tip: "Consejo"
    tip_pattern = r'tip:\s*".*?"'
    tip_match = re.search(tip_pattern, lang_block[mistakes_start:])
    
    if not tip_match:
        print(f"Tip key not found in {lang} mistakes")
        continue
        
    # Valid tip location
    abs_tip_start = start_idx + mistakes_start + tip_match.start()
    abs_tip_end = start_idx + mistakes_start + tip_match.end()
    
    # Check if 'advanced' already exists after it
    # Look ahead a bit
    next_chunk = new_content[abs_tip_end:abs_tip_end+50]
    if 'advanced:' in next_chunk:
        print(f"Advanced key already exists in {lang}")
        continue
        
    # Insert
    # We assume 'tip: "..."' is followed by comma or newline?
    # Actually in the file it usually has a comma if not last, but last item might not.
    # We should add a comma to tip line if missing, and then add advanced.
    
    # Check if comma exists
    if new_content[abs_tip_end] == ',':
        insertion_point = abs_tip_end + 1
        prefix = "\n                " # Indent for new line (16 spaces?)
    else:
        # No comma, maybe newline directly?
        insertion_point = abs_tip_end
        prefix = ",\n                "
        
    insert_str = f'{prefix}advanced: "{adv_text}"'
    
    # We need to be careful about indices shifting if we modify content in loop.
    # But here we are modifying `new_content`.
    # To avoid index drift issues, we should process languages in reverse order?
    # OR simpler:
    # Just run regex replace on the WHOLE file if the pattern is unique enough.
    # `tip: "(.*?)"` inside `mistakes` block... hard to limit scope with just one regex.
    #
    # With the loop above, if we modify `new_content`, we must restart searches or offset indices.
    # The simplest way given the logic is to split `new_content` into strings and rejoin.
    # Text manipulation on `new_content` directly.
    
    new_content = new_content[:insertion_point] + insert_str + new_content[insertion_point:]
    
    print(f"Added advanced key for {lang}")

# Since we modified new_content in the loop, subsequent iterations will work on modified content.
# Because matches are found afresh in `new_content` each iteration, it should be fine as long as logic is robust.
# One catch: `for lang in ...` iterates over languages.
# If we insert text for 'en', the indices for 'es' (which is after 'en') shift.
# But we search `new_content` from scratch for each language.
# The search finds `es: {` correctly even if `en: {` grew larger.
# So this approach is SAFE.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Done updating translations.ts")
