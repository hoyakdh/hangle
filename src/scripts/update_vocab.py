
import re

vocab_map = {
    # Taxi (201-220)
    201: '這輛計程車空嗎？',
    202: '您要去哪兒？',
    203: '請去首爾站。',
    204: '大概需要多長時間？',
    205: '請在這裡停車。',
    206: '請開快點。',
    207: '請開慢點。',
    208: '請打開後車廂。',
    209: '可以刷卡嗎？',
    210: '請給我收據。',
    211: '不用找零了。',
    212: '請去這個地址。',
    213: '請右轉。',
    214: '請左轉。',
    215: '請直走。',
    216: '請稍等。',
    217: '路上很塞。',
    218: '請在這裡停。',
    219: '有附加費嗎？',
    220: '謝謝司機。',

    # Bus (301-320)
    301: '這輛公車去市廳嗎？',
    302: '我應該坐幾號公車？',
    303: '車費是多少？',
    304: '在哪兒上車？',
    305: '我在下一站下車。',
    306: '請按鈴。',
    307: '請刷卡。',
    308: '有座位嗎？',
    309: '我坐錯車了。',
    310: '需要等多久？',
    311: '末班車是什麼時候？',
    312: '首班車是什麼時候？',
    313: '轉乘。',
    314: '下車門在後面。',
    315: '請往裡面走。',
    316: '路線圖在哪兒？',
    317: '這一站是弘大。',
    318: '公車擠滿了。',
    319: '我沒有零錢。',
    320: '請問司機。',

    # Subway (401-420)
    401: '捷運站在哪兒？',
    402: '在哪兒買票？',
    403: '這是2號線嗎？',
    404: '去江南站嗎？',
    405: '在哪兒轉乘？',
    406: '從幾號出口出來？',
    407: '方向反了。',
    408: '請給交通卡加值。',
    409: '洗手間在閘門內。',
    410: '月台門即將開啟。',
    411: '小心腳下。',
    412: '下一站是哪兒？',
    413: '這是博愛座。',
    414: '這是孕婦專座。',
    415: '右邊車門即將開啟。',
    416: '左邊車門即將開啟。',
    417: '這是急行列車嗎？',
    418: '我錯過了末班車。',
    419: '請領取押金退款。',
    420: '出口在哪邊？',

    # Restaurant (501-520)
    501: '幾位？',
    502: '兩位。',
    503: '請給我菜單。',
    504: '我要點菜。',
    505: '這個辣嗎？',
    506: '請再給我點水。',
    507: '請推薦一下。',
    508: '請不要放香菜。',
    509: '很好吃。',
    510: '我吃飽了。',
    511: '洗手間在哪兒？',
    512: '請結帳。',
    513: '分開付。',
    514: '請再給點泡菜。',
    515: '這個菜是什麼？',
    516: '請給我拿雙筷子。',
    517: '請給我拿個勺子。',
    518: '請給我餐巾紙。',
    519: '請再給我一些小菜。',
    520: '我沒點這個。',

    # Hotel (601-620)
    601: '我要辦理入住。',
    602: '我要辦理退房。',
    603: '請給我房卡。',
    604: '有空房嗎？',
    605: '早餐幾點開始？',
    606: '請叫醒我。',
    607: '請打掃房間。',
    608: '請換毛巾。',
    609: 'Wi-Fi密碼是多少？',
    610: '能不能寄存行李？',
    611: '請幫我叫輛計程車。',
    612: '房間裡沒有熱水。',
    613: '空調壞了。',
    614: '請給我加床被子。',
    615: '請藉我個吹風機。',
    616: '房間太冷了。',
    617: '房間太熱了。',
    618: '有洗衣服務嗎？',
    619: '房卡丟了。',
    620: '請給我地圖。',

    # Tourist (701-720)
    701: '票在售票處買。',
    702: '這附近有什麼好玩的？',
    703: '可以拍照嗎？',
    704: '可以幫我們拍張照嗎？',
    705: '這裡可以退稅嗎？',
    706: '有折扣嗎？',
    707: '營業時間是什麼時候？',
    708: '這是免費的嗎？',
    709: '有中文導遊嗎？',
    710: '入口在哪兒？',
    711: '出口在哪兒？',
    712: '能不能給我一本小冊子？',
    713: '可以試穿嗎？',
    714: '這個多少錢？',
    715: '太貴了。',
    716: '能不能便宜點？',
    717: '有別的顏色嗎？',
    718: '有沒有大一點的？',
    719: '有沒有小一點的？',
    720: '我要買這個。',

    # Daily (801-820)
    801: '你好。',
    802: '謝謝。',
    803: '對不起。',
    804: '沒關係。',
    805: '再見。',
    806: '是。',
    807: '不是。',
    808: '不知道。',
    809: '知道了。',
    810: '請問...',
    811: '這是什麼？',
    812: '我聽不懂韓語。',
    813: '請說慢一點。',
    814: '這是我朋友。',
    815: '很高興見到你。',
    816: '辛苦了。',
    817: '請幫個忙。',
    818: '最近怎麼樣？',
    819: '一會兒見。',
    820: '祝你有美好的一天。',

    # Emergency (901-920)
    901: '救命！',
    902: '請幫幫我。',
    903: '請叫救護車。',
    904: '請叫警察。',
    905: '著火了！',
    906: '有小偷！',
    907: '我迷路了。',
    908: '我的錢包被偷了。',
    909: '我不舒服。',
    910: '受傷了。',
    911: '請聯繫大使館。',
    912: '我的手機丟了。',
    913: '這裡發生了事故。',
    914: '請幫我聯繫家人。',
    915: '我需要醫生。',
    916: '請去最近的醫院。',
    917: '我沒有做那件事。',
    918: '請找一個會說中文的人。',
    919: '我的信用卡丟了。',
    920: '非常緊急。',

    # Hospital (1001-1020)
    1001: '頭痛。',
    1002: '發燒了。',
    1003: '肚子疼。',
    1004: '感冒了。',
    1005: '嗓子疼。',
    1006: '這裡疼。',
    1007: '拉肚子。',
    1008: '消化不良。',
    1009: '沒胃口。',
    1010: '全身酸痛。',
    1011: '需要住院嗎？',
    1012: '這是什麼藥？',
    1013: '怎麼吃藥？',
    1014: '飯後30分鐘吃。',
    1015: '一天吃三次。',
    1016: '請給我開處方。',
    1017: '有過敏反應嗎？',
    1018: '我是孕婦。',
    1019: '請幫我消毒。',
    1020: '請給我止痛藥。',
}

file_path = '/Users/kimdongho/Desktop/hangle/src/data/vocab.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Match lines that have an 'id' and 'hindi' but check if 'traditional_chinese' is already there to avoid duplicates if re-run
    # However, 'hindi' is the last field before closing brace usually.
    # Regex to find id: { id: (\d+),
    match_id = re.search(r'id:\s*(\d+)', line)
    
    if match_id:
        vocab_id = int(match_id.group(1))
        if vocab_id in vocab_map:
            # Check if traditional_chinese already exists
            if 'traditional_chinese:' not in line:
                # Find the position to insert. We can insert after 'hindi: <val>,' or just before '},'
                # Let's insert before '},'
                # Be careful with the comma.
                # Assuming the line ends with '},' or '} ,'
                insert_text = f", traditional_chinese: '{vocab_map[vocab_id]}'"
                
                # Replace the last occurrence of '}' with '... }'
                # Actually, simpler: rstrip the newline and '},', append our text and '},'
                # But some lines might be formatted differently?
                # Based on view_file, they all seem to end with '},' or just '}'
                
                # Let's use regex sub to safe insertion
                # pattern: matches '}' at the end of the object def, allowing for trailing comma or spaces
                # We want to insert before the closing brace of the object
                
                # Check if 'hindi' is present, just to be sure we are in the data object part
                if 'hindi:' in line:
                   # Replace '}' with ', traditional_chinese: ... }'
                   # But need to handle if there is already a comma before }
                   # Usually it looks like: ... hindi: '...'},
                   # We want: ... hindi: '...', traditional_chinese: '...'},
                   
                   # Let's replace '},' with 'TEMP_MARKER' then replace 'TEMP_MARKER'
                   # Actually, just replace '}' with our text + '}'
                   # We need to be careful not to replace inner braces if any (unlikely in this file structure)
                   
                   # Find the LAST '}' in the line
                   last_brace_index = line.rfind('}')
                   if last_brace_index != -1:
                        # Construct new line
                        new_line = line[:last_brace_index] + insert_text + line[last_brace_index:]
                        new_lines.append(new_line)
                        continue
    
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
