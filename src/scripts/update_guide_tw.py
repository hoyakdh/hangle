
import json

# Traditional Chinese Data for Guide
guide_data_tw = {
    "zh-TW": {
        "pronunciation": [
            {
                "id": 1,
                "title": "收音 (받침)",
                "description": "當 ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ 出現在音節末尾時，都發 [t] (t 或 d) 的音。",
                "examples": [
                    { "word": "있다", "romanized": "itda", "pronunciation": "[it-tta]", "meaning": "有/在" },
                    { "word": "꽃", "romanized": "kkot", "pronunciation": "[kkot]", "meaning": "花" }
                ]
            },
            {
                "id": 2,
                "title": "連音現象 (연음 법칙)",
                "description": "當收音後面跟著以母音開頭的音節（以 'ㅇ' 開頭）時，收音會移到下一個音節發音。",
                "examples": [
                    { "word": "먹어요", "romanized": "meogeoyo", "pronunciation": "[머거요]", "meaning": "吃" },
                    { "word": "웃어요", "romanized": "useoyo", "pronunciation": "[우서요]", "meaning": "笑" },
                    { "word": "서울에", "romanized": "seoure", "pronunciation": "[서우레]", "meaning": "去首爾" }
                ]
            },
            {
                "id": 3,
                "title": "輔音同化 (자음 동화)",
                "description": "某些輔音組合變音以便於發音。例如，'ㅂ' 後面跟著 'ㄴ' 時變成 'ㅁ'。",
                "examples": [
                    { "word": "합니다", "romanized": "hamnida", "pronunciation": "[ham-ni-da]", "meaning": "做 (正式敬語)" },
                    { "word": "국립", "romanized": "gungnip", "pronunciation": "[궁닙]", "meaning": "國立" }
                ]
            },
            {
                "id": 4,
                "title": "送氣化 (격음화)",
                "description": "當 'ㅎ' 遇到 ㄱ, ㄷ, ㅂ, 或 ㅈ 時，它們合併成相應的送氣音 (ㅋ, ㅌ, ㅍ, ㅊ)。",
                "examples": [
                    { "word": "축하하다", "romanized": "chukahada", "pronunciation": "[추카하다]", "meaning": "祝賀" },
                    { "word": "좋다", "romanized": "jota", "pronunciation": "[조타]", "meaning": "好" }
                ]
            }
        ],
        "grammar": [
            { "id": 1, "expression": "이/가", "meaning": "[主格助詞]", "example": "이름이 뭐예요?" },
            { "id": 2, "expression": "은/는", "meaning": "[主題助詞]", "example": "날씨가 좋아요." },
            { "id": 3, "expression": "을/를", "meaning": "[賓格助詞]", "example": "저는 미국사람이에요." },
            { "id": 4, "expression": "와/과", "meaning": "和 / 跟", "example": "책을 읽어요." },
            { "id": 5, "expression": "(이)랑", "meaning": "和 / 跟", "example": "소설책과 교과서를 가져왔어요." },
            { "id": 6, "expression": "(이)랑", "meaning": "和...一起", "example": "친구랑 같이 왔어요." },
            { "id": 7, "expression": "하고", "meaning": "和 / 跟", "example": "양념 치킨하고 맥주 주세요." },
            { "id": 8, "expression": "도", "meaning": "也", "example": "내일도 오늘도 비가 와요." },
            { "id": 9, "expression": "에", "meaning": "在 / 去 (時間/地點)", "example": "남대문 시장에 가고 싶어요." },
            { "id": 10, "expression": "에서", "meaning": "從 / 在 (地點)", "example": "공항에서 지하철 타고 왔어요." },
            { "id": 11, "expression": "부터 ~까지", "meaning": "從...到...", "example": "점심시간은 12시부터 1시까지예요." },
            { "id": 12, "expression": "(으)로", "meaning": "往 / 用", "example": "오른쪽으로 가세요." },
            { "id": 13, "expression": "안", "meaning": "不 / 沒", "example": "저는 김치를 안 먹어요." },
            { "id": 14, "expression": "못", "meaning": "不能 / 不會", "example": "매운 음식을 못 먹어요." },
            { "id": 15, "expression": "았/었어", "meaning": "了 / 過 (過去式)", "example": "어제 친구를 만났어요." },
            { "id": 16, "expression": "(으)ㄹ 거예요", "meaning": "要 / 會 (未來式)", "example": "내일 한국에 갈 거예요." },
            { "id": 17, "expression": "(으)세요", "meaning": "請... (敬語)", "example": "여기에 앉으세요." },
            { "id": 18, "expression": "고 싶어요", "meaning": "想...", "example": "피자가 먹고 싶어요." },
            { "id": 19, "expression": "고 있어요", "meaning": "正在... (進行式)", "example": "지금 공부하고 있어요." },
            { "id": 20, "expression": "(으)ㄹ 수 있어요", "meaning": "能 / 會", "example": "한국어를 할 수 있어요." },
            { "id": 21, "expression": "(으)ㄹ 수 없어요", "meaning": "不能 / 不會", "example": "수영할 수 없어요." },
            { "id": 22, "expression": "고", "meaning": "並 / 然後 (連接詞)", "example": "밥을 먹고 커피를 마셔요." },
            { "id": 23, "expression": "지만", "meaning": "但是", "example": "한국어는 어렵지만 재미있어요." },
            { "id": 24, "expression": "아/어서", "meaning": "因為 / 所以", "example": "배가 아파서 병원에 갔어요." },
            { "id": 25, "expression": "(으)ㄹ게요", "meaning": "我來... (意願)", "example": "제가 할게요." },
            { "id": 26, "expression": "(으)ㄴ 적이 있어요", "meaning": "...過 (經驗)", "example": "제주도에 간 적이 있어요." },
            { "id": 27, "expression": "기로 했어요", "meaning": "決定...", "example": "내일 친구를 만나기로 했어요." },
            { "id": 28, "expression": "아/어도 돼요", "meaning": "可以...嗎？", "example": "여기 앉아도 돼요?" },
            { "id": 29, "expression": "(으)면 안 돼요", "meaning": "不可以...", "example": "여기서 담배를 피우면 안 돼요." },
            { "id": 30, "expression": "(으)ㄹ까요?", "meaning": "...嗎？ (提議/推測)", "example": "같이 영화 볼까요?" }
        ],
        "mistakes": [
            {
                "id": 1,
                "title": "混淆敬語 (높임말 vs 반말)",
                "description": "對陌生人說半語，或者對親密的朋友用過於正式的敬語。",
                "badExample": "밥 먹었어? (對陌生人)",
                "goodExample": "식사 하셨어요? (對陌生人)",
                "tip": "先掌握 ‘~yo’ (敬語) 結尾。不確定時，始終使用敬語。"
            },
            {
                "id": 2,
                "title": "過度使用'我' (저는/나는)",
                "description": "像英語一樣在每個句子裡都加'我'。",
                "badExample": "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                "goodExample": "김치를 좋아해요. 불고기도 좋아해요.",
                "tip": "如果語境清楚，省略主語。"
            },
            {
                "id": 3,
                "title": "使用中文語序 (SVO)",
                "description": "使用主語-動詞-賓語的順序，而不是韓語的主語-賓語-動詞順序。",
                "badExample": "I coffee drink. (直譯)",
                "goodExample": "저는 커피를 마셔요.",
                "tip": "韓語是SOV結構。動詞總是放在最後。"
            },
            {
                "id": 4,
                "title": "省略助詞 (조사 생략)",
                "description": "省略了 은/는, 이/가, 을/를 等重要助詞。",
                "badExample": "나 커피 좋아해.",
                "goodExample: ": "저는 커피를 좋아해요.",
                "tip": "助詞決定詞的作用。請用完整的句子練習。"
            },
            {
                "id": 5,
                "title": "混淆相似發音",
                "description": "無法區分 ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ。",
                "badExample": "비 (雨) vs 피 (血)",
                "goodExample": "送氣音 (ㅋ, ㅌ, ㅍ, ㅊ) 發音時要有爆破氣流。",
                "tip": "跟讀母語者的發音很有幫助。發音不同，意思完全不同。"
            },
            {
                "id": 6,
                "title": "不使用敬語動詞",
                "description": "對長輩使用普通動詞而不是敬語動詞。",
                "badExample": "할머니가 밥을 먹어요.",
                "goodExample": "할머니께서 진지를 드세요.",
                "tip": "記住長輩專用的詞彙: 먹다→드시다, 자다→주무시다."
            },
            {
                "id": 7,
                "title": "直譯",
                "description": "翻譯母語成語直接成韓語。",
                "badExample": "I'm tired because I worked a lot. (直譯)",
                "goodExample": "일하느라 힘들었어요.",
                "tip": "學習韓語片語，而不是逐字翻譯。"
            }
        ]
    }
}

file_path = '/Users/kimdongho/Desktop/hangle/src/data/guideData.ts'

# Helper to format dict as TS object string
def format_ts_object(data, indent_level=1):
    indent = "    " * indent_level
    lines = []
    lines.append("    'zh-TW': {")
    
    # Pronunciation
    lines.append(f"{indent}    pronunciation: [")
    for item in data['zh-TW']['pronunciation']:
        lines.append(f"{indent}        {{")
        lines.append(f"{indent}            id: {item['id']},")
        lines.append(f"{indent}            title: \"{item['title']}\",")
        lines.append(f"{indent}            description: \"{item['description']}\",")
        lines.append(f"{indent}            examples: [")
        for ex in item['examples']:
            # Minimal quoting for keys usually not needed in TS if distinct, but safe to do
            # But let's try to match existing style: { word: "...", ... }
            lines.append(f"{indent}                {{ word: \"{ex['word']}\", romanized: \"{ex['romanized']}\", pronunciation: \"{ex['pronunciation']}\", meaning: \"{ex['meaning']}\" }},")
        lines.append(f"{indent}            ]")
        lines.append(f"{indent}        }},")
    lines.append(f"{indent}    ],")

    # Grammar
    lines.append(f"{indent}    grammar: [")
    for item in data['zh-TW']['grammar']:
        lines.append(f"{indent}        {{ id: {item['id']}, expression: \"{item['expression']}\", meaning: \"{item['meaning']}\", example: \"{item['example']}\" }},")
    lines.append(f"{indent}    ],")

    # Mistakes
    lines.append(f"{indent}    mistakes: [")
    for item in data['zh-TW']['mistakes']:
        lines.append(f"{indent}        {{")
        lines.append(f"{indent}            id: {item['id']},")
        lines.append(f"{indent}            title: \"{item['title']}\",")
        lines.append(f"{indent}            description: \"{item['description']}\",")
        lines.append(f"{indent}            badExample: \"{item['badExample']}\",")
        lines.append(f"{indent}            goodExample: \"{item.get('goodExample', '')}\",") # Fixed key error in source dict if any
        lines.append(f"{indent}            tip: \"{item['tip']}\"")
        lines.append(f"{indent}        }},")
    lines.append(f"{indent}    ]")

    lines.append("    },") # End of zh-TW block. Note comma for safety if more follows
    return "\n".join(lines)


with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the position to insert.
# We want to insert after 'zh: { ... }'
# Locate 'zh: {'
zh_start_index = content.find('zh: {')
if zh_start_index == -1:
    print("Could not find zh section")
    exit(1)

# Find the closing brace for zh section.
branding_level = 0
zh_end_index = -1
for i in range(zh_start_index, len(content)):
    char = content[i]
    if char == '{':
        branding_level += 1
    elif char == '}':
        branding_level -= 1
        if branding_level == 0:
            zh_end_index = i
            break

if zh_end_index == -1:
    print("Could not find end of zh section")
    exit(1)

# Check if zh-TW already exists
if "'zh-TW':" in content or '"zh-TW":' in content:
    print("zh-TW already exists, skipping insertion")
    exit(0)

# Prepare content to insert
new_block = format_ts_object(guide_data_tw)

# Check what is after zh_end_index
# We need to ensure there is a comma after zh block if we are appending
# But we are inserting AFTER zh.
# If there is a comma after zh, we keep it, and insert after the comma.
# If there is NO comma, we insert a comma, then our block.

# Look ahead for comma
has_comma = False
insertion_index = zh_end_index + 1
while insertion_index < len(content) and content[insertion_index].isspace():
    insertion_index += 1

if insertion_index < len(content) and content[insertion_index] == ',':
    has_comma = True
    insertion_index += 1 # Move past comma

# Construct new content
# If existing had comma: ... zh: { ... }, <INSERT HERE> ...
# Our new block ends with comma. So ... zh: { ... }, <zh-TW: ...>, ...
# This logic holds if we insert strictly after the comma.
# If no comma: ... zh: { ... } <INSERT HERE> ...
# We need to add comma to zh block: ... zh: { ... }, <zh-TW: ...>, ...

prefix = content[:zh_end_index+1]
suffix = content[zh_end_index+1:]

if has_comma:
    # Prefix includes up to '}', suffix includes ',' + rest
    # Actually my pointer logic above for suffix start (insertion_index) skipped whitespace and comma
    # So suffix starts AFTER comma.
    # We want: ... }, \n <new_block> \n <suffix>
    prefix = content[:insertion_index] # Includes comma
    suffix = content[insertion_index:]
    final_content = prefix + "\n" + new_block + suffix
else:
    # No comma after zh block. We must add it.
    final_content = prefix + "," + "\n" + new_block + suffix

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Successfully inserted zh-TW data.")
