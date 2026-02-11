
import re
import math

# Map for Conversation items
# Structure: ID -> { 'question': '...', 'answers': ['...', '...'] }
conversation_map = {
    # Airport
    1001: {
        'question': '值機櫃檯在哪兒？',
        'answers': [
            '那邊3號登機口前面。',
            '去D區就可以了。'
        ]
    },
    1002: {
        'question': '可以託運多少行李？',
        'answers': [
            '每人兩件23公斤的行李。',
            '經濟艙只能免費託運一件。'
        ]
    },
    # Taxi
    2001: {
        'question': '去市廳需要多長時間？',
        'answers': [
            '大約需要30分鐘。',
            '現在塞車，要花1個小時。'
        ]
    },
    2002: {
        'question': '可以用信用卡支付嗎？',
        'answers': [
            '是的，可以。',
            '抱歉，只收現金。'
        ]
    },
    # Bus
    3001: {
        'question': '這輛公車去江南站嗎？',
        'answers': [
            '不，您得去對面坐。',
            '去的，請上車。'
        ]
    },
    3002: {
        'question': '車費是多少？',
        'answers': [
            '1500韓元。請刷交通卡。',
            '現金是1600韓元。'
        ]
    },
    # Subway
    4001: {
        'question': '我應該從幾號出口出去？',
        'answers': [
            '走4號出口比較快。',
            '請跟著指示牌走。'
        ]
    },
    4002: {
        'question': '可以在這兒轉乘嗎？',
        'answers': [
            '可以，您可以轉乘2號線。',
            '不行，您得在下一站下車。'
        ]
    },
    # Restaurant
    5001: {
        'question': '您要點餐嗎？',
        'answers': [
            '是的，請給我一份拌飯。',
            '稍等，我再看一會兒菜單。'
        ]
    },
    5002: {
        'question': '洗手間在哪兒？',
        'answers': [
            '出去後右邊大樓的二樓。',
            '在櫃檯左端。'
        ]
    },
    # Hotel
    6001: {
        'question': '退房時間是幾點？',
        'answers': [
            '是上午11點。',
            '直到中午12點。'
        ]
    },
    6002: {
        'question': '包含早餐嗎？',
        'answers': [
            '是的，您可以在一樓餐廳用餐。',
            '不，您需要在現場單獨付費。'
        ]
    },
    # Tourist
    7001: {
        'question': '我可以試穿這個嗎？',
        'answers': [
            '可以，試衣間在那邊。',
            '抱歉。白色衣服不能試穿。'
        ]
    },
    7002: {
        'question': '這個多少錢？',
        'answers': [
            '一萬五千韓元。',
            '現在打折，一萬韓元。'
        ]
    },
    # Daily
    8001: {
        'question': '你叫什麼名字？',
        'answers': [
            '我叫金民秀。',
            '我叫李知恩。'
        ]
    },
    8002: {
        'question': '你的愛好是什麼？',
        'answers': [
            '我喜歡看電影。',
            '做飯是我的愛好。'
        ]
    },
    # Emergency
    9001: {
        'question': '救命！請叫警察。',
        'answers': [
            '發生什麼事了？請冷靜點。',
            '我去報警。請稍等。'
        ]
    },
    # Hospital
    10001: {
        'question': '哪裡不舒服？',
        'answers': [
            '肚子很疼，發燒了。',
            '好像扭傷了腳踝。'
        ]
    },
    10002: {
        'question': '請飯後30分鐘服藥。',
        'answers': [
            '好的，謝謝。',
            '可以空腹吃嗎？'
        ]
    }
}

file_path = '/Users/kimdongho/Desktop/hangle/src/data/conversation.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_id = None
in_question = False
in_answers = False
current_answer_index = -1

for i, line in enumerate(lines):
    # Detect ID
    id_match = re.search(r'id:\s*(\d+)', line)
    if id_match:
        current_id = int(id_match.group(1))
        in_question = False
        in_answers = False
        current_answer_index = -1
    
    # Detect sections
    if 'question:' in line:
        in_question = True
        in_answers = False
    elif 'answers:' in line:
        in_question = False
        in_answers = True
        current_answer_index = -1
    
    # If in answers array, track which answer object we are in
    if in_answers and '{' in line:
        current_answer_index += 1
    
    # Check for insertion points
    
    # 1. Insert into Question object
    if in_question and current_id in conversation_map:
        if 'hindi:' in line and 'traditional_chinese:' not in line:
            # Insert traditional_chinese after hindi
            # Assuming format: hindi: '...'
            # We want to add comma if missing, then newline + indent + traditional_chinese
            
            # Use regex to replace
            # pattern: (hindi:\s*'.*?')(\s*)$ or (\s*},)
            # Actually, simpliest is to append the new line after this line
            
            indent = line[:line.find('hindi')]
            tc_text = conversation_map[current_id]['question']
            new_line_content = f"{indent}traditional_chinese: '{tc_text}'"
            
            # Check if current line ends with comma
            stripped_line = line.rstrip()
            if not stripped_line.endswith(','):
                 line = stripped_line + ",\n"
            else:
                 # It ends with comma, keep it
                 pass
            
            new_lines.append(line)
            new_lines.append(new_line_content + (",\n" if not new_line_content.endswith(",") else "") ) # Add comma just in case, though usually last item might not need it, but TS allows trailing comma
            # Actually, standard JSON-like object in TS usually allows trailing comma.
            # Let's just make sure the previous line has a comma.
            
            # Wait, if I append a new line, I shouldn't duplicate 'line'
            # The logic above: append 'line' (modified to have comma), THEN append new line.
            
            continue

    # 2. Insert into Answer objects
    if in_answers and current_id in conversation_map:
        if 'hindi:' in line and 'traditional_chinese:' not in line:
            # We need to know which answer index we are at
            # current_answer_index tracks this.
            
            answers_list = conversation_map[current_id]['answers']
            if current_answer_index < len(answers_list):
                indent = line[:line.find('hindi')]
                tc_text = answers_list[current_answer_index]
                new_line_content = f"{indent}traditional_chinese: '{tc_text}'"
                
                stripped_line = line.rstrip()
                if not stripped_line.endswith(','):
                     line = stripped_line + ",\n"
                
                new_lines.append(line)
                new_lines.append(new_line_content + "\n")
                continue

    new_lines.append(line)

# Post-processing to fix potentially missing commas or bad formatting if needed
# But adhering to the pattern "hindi: ..." -> "hindi: ...," \n "traditional_chinese: ..." should work.

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
