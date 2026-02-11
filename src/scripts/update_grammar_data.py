import re
import os

file_path = '/Users/kimdongho/Desktop/hangle/src/data/guideData.ts'

# ID -> (Expression, Meaning(EN), Example)
new_data = {
    1: ("이/가", "Subject particle", "이름**이** 뭐예요?"),
    2: ("은/는", "Topic particle", "저**는** 미국 사람이에요."),
    3: ("을/를", "Object particle", "책**을** 읽어요."),
    4: ("와/과", "And (Noun connector)", "소설책**과** 교과서를 가져왔어요."),
    5: ("(이)랑", "And (Informal)", "빵**이랑** 우유를 먹어요."),
    6: ("(이)랑", "With", "친구**랑** 같이 왔어요."),
    7: ("하고", "And", "양념 치킨**하고** 맥주 주세요."),
    8: ("도", "Also / As well", "내일**도** 오늘도 비가 와요."),
    9: ("에", "To / At (Direction/Time)", "남대문 시장**에** 가고 싶어요."),
    10: ("에서", "From / At (Location of action)", "공항**에서** 지하철 타고 왔어요."),
    11: ("부터 ~까지", "From ... Until", "점심시간은 12시**부터** 1시**까지**예요."),
    12: ("(으)로", "Towards / By (Means)", "오른쪽**으로** 가세요."),
    13: ("안", "Not (Simple negation)", "저는 김치를 **안** 먹어요."),
    14: ("못", "Cannot (Lack of ability)", "매운 음식을 **못** 먹어요."),
    15: ("았/었어", "Past tense", "어제 친구를 만**났어요**."),
    16: ("(으)ㄹ 거예요", "Future tense", "내일 한국에 **갈 거예요**."),
    17: ("(으)세요", "Please (Polite request)", "여기에 **앉으세요**."),
    18: ("고 싶어요", "Want to", "피자가 먹**고 싶어요**."),
    19: ("고 있어요", "-ing (Continuing action)", "지금 공부하**고 있어요**."),
    20: ("(으)ㄹ 수 있어요", "Can (Ability/Possibility)", "한국어를 할 **수 있어요**."),
    21: ("(으)ㄹ 수 없어요", "Cannot", "수영할 **수 없어요**."),
    22: ("고", "And (Sentence connector)", "밥을 먹**고** 커피를 마셔요."),
    23: ("지만", "But", "한국어는 어렵**지만** 재미있어요."),
    24: ("아/어서", "Because / So", "배가 아파**서** 병원에 갔어요."),
    25: ("(으)ㄹ게요", "I will (Volition/Promise)", "제가 할**게요**."),
    26: ("(으)ㄴ 적이 있어요", "Have done (Experience)", "제주도에 간 **적이 있어요**."),
    27: ("기로 했어요", "Decided to", "내일 친구를 만나**기로 했어요**."),
    28: ("아/어도 돼요", "Is it okay to... (Permission)", "여기 앉**아도 돼요**?"),
    29: ("(으)면 안 돼요", "You should not (Prohibition)", "여기서 담배를 피우**면 안 돼요**."),
    30: ("(으)ㄹ까요?", "Shall we...? (Suggestion)", "같이 영화 볼**까요**?")
}

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_lang = 'unknown'
in_grammar = False

for line in lines:
    stripped = line.strip()
    
    # Detect language block start
    lang_match = re.match(r'^\s*(en|es|ja|fr|th|zh): \{$', line)
    if lang_match:
        current_lang = lang_match.group(1)
        new_lines.append(line)
        continue
        
    # Detect grammar array start
    if 'grammar: [' in line:
        in_grammar = True
        new_lines.append(line)
        continue
        
    # Detect grammar array end
    if in_grammar and stripped.startswith('],'):
        in_grammar = False
        new_lines.append(line)
        continue

    # Process grammar items
    if in_grammar:
        # Match the line: { id: 1, expression: "...", meaning: "...", example: "..." },
        # Regex needs to be robust to handle varying spacing
        match = re.match(r'^(\s*)\{\s*id:\s*(\d+),\s*expression:\s*"(.*?)",\s*meaning:\s*"(.*?)",\s*example:\s*"(.*?)"\s*\},?', line)
        if match:
            indent = match.group(1)
            item_id = int(match.group(2))
            current_expression = match.group(3)
            current_meaning = match.group(4)
            current_example = match.group(5)
            
            comma = ',' if line.strip().endswith(',') else ''
            
            if item_id in new_data:
                new_expression, new_meaning_en, new_example_marked = new_data[item_id]
                
                final_expression = new_expression
                final_example = new_example_marked
                
                # Check if current_meaning matches English meaning roughly to decide if we keep it or replace it?
                # No, we rely on language 'en'.
                
                if current_lang == 'en':
                    final_meaning = new_meaning_en
                else:
                    final_meaning = current_meaning
                
                new_line = f'{indent}{{ id: {item_id}, expression: "{final_expression}", meaning: "{final_meaning}", example: "{final_example}" }}{comma}\n'
                new_lines.append(new_line)
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated guideData.ts successfully.")
