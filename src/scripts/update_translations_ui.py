
import re

file_path = 'src/data/translations.ts'

# Translation data
conversations_data = {
    'en': {
        'back': "Back to Categories",
        'titleSuffix': "Conversation",
        'subtitle': "Practice common Questions & Answers",
        'noData': "No conversation data available for this category yet.",
        'question': "Question",
        'answer': "Answer",
        'option': "Option",
        'mainTitle': "Conversation Practice",
        'mainDesc': "Learn common Questions & Answers for various situations.",
        'start': "Start Practice"
    },
    'es': {
        'back': "Volver a Categorías",
        'titleSuffix': "Conversación",
        'subtitle': "Practica Preguntas y Respuestas comunes",
        'noData': "No hay datos de conversación disponibles para esta categoría aún.",
        'question': "Pregunta",
        'answer': "Respuesta",
        'option': "Opción",
        'mainTitle': "Práctica de Conversación",
        'mainDesc': "Aprende Preguntas y Respuestas comunes para varias situaciones.",
        'start': "Empezar Práctica"
    },
    'ja': {
        'back': "カテゴリーに戻る",
        'titleSuffix': "会話",
        'subtitle': "よくある質問と回答を練習",
        'noData': "このカテゴリーの会話データはまだありません。",
        'question': "質問",
        'answer': "回答",
        'option': "選択肢",
        'mainTitle': "会話練習",
        'mainDesc': "様々な状況でのよくある質問と回答を学びましょう。",
        'start': "練習開始"
    },
    'fr': {
        'back': "Retour aux Catégories",
        'titleSuffix': "Conversation",
        'subtitle': "Pratiquez les Questions & Réponses courantes",
        'noData': "Aucune donnée de conversation disponible pour cette catégorie pour le moment.",
        'question': "Question",
        'answer': "Réponse",
        'option': "Option",
        'mainTitle': "Pratique de la Conversation",
        'mainDesc': "Apprenez les Questions & Réponses courantes pour diverses situations.",
        'start': "Commencer la Pratique"
    },
    'th': {
        'back': "กลับไปที่หมวดหมู่",
        'titleSuffix': "บทสนทนา",
        'subtitle': "ฝึกฝนคำถามและคำตอบทั่วไป",
        'noData': "ยังไม่มีข้อมูลบทสนทนาสำหรับหมวดหมู่นี้",
        'question': "คำถาม",
        'answer': "คำตอบ",
        'option': "ตัวเลือก",
        'mainTitle': "ฝึกบทสนทนา",
        'mainDesc': "เรียนรู้คำถามและคำตอบทั่วไปสำหรับสถานการณ์ต่างๆ",
        'start': "เริ่มฝึกฝน"
    },
    'zh': {
        'back': "返回分类",
        'titleSuffix': "会话",
        'subtitle': "练习常见问答",
        'noData': "该类别暂无会话数据。",
        'question': "问题",
        'answer': "回答",
        'option': "选项",
        'mainTitle': "会话练习",
        'mainDesc': "学习各种情况下的常见问答。",
        'start': "开始练习"
    },
    'zh-TW': {
        'back': "返回分類",
        'titleSuffix': "會話",
        'subtitle': "練習常見問答",
        'noData': "該類別暫無會話數據。",
        'question': "問題",
        'answer': "回答",
        'option': "選項",
        'mainTitle': "會話練習",
        'mainDesc': "學習各種情況下的常見問答。",
        'start': "開始練習"
    },
    'hi': {
        'back': "श्रेणियों पर वापस जाएं",
        'titleSuffix': "बातचीत",
        'subtitle': "सामान्य प्रश्न और उत्तर का अभ्यास करें",
        'noData': "इस श्रेणी के लिए अभी तक कोई बातचीत डेटा उपलब्ध नहीं है।",
        'question': "प्रश्न",
        'answer': "उत्तर",
        'option': "विकल्प",
        'mainTitle': "बातचीत का अभ्यास",
        'mainDesc': "विभिन्न स्थितियों के लिए सामान्य प्रश्न और उत्तर सीखें।",
        'start': "अभ्यास शुरू करें"
    }
}

learning_tips_data = {
    'en': {
        'intro': "Select a topic below to begin your learning journey. Each category contains essential Korean vocabulary and phrases with native pronunciation.",
        'howToLearn': "How to Learn Effectively",
        'focusTitle': "Focus on One Topic",
        'focusDesc': "Instead of trying to learn random words, master one category at a time. If you are planning a trip, start with 'Airport' or 'Hotel'. If you love K-Drama, check out 'Daily Life' or 'Emotions'.",
        'speakTitle': "Practice Speaking",
        'speakDesc': "Don't just read the words. Use the microphone feature in the learning cards to check your pronunciation. Speaking aloud helps you memorize faster and builds muscle memory."
    },
    'es': {
        'intro': "Selecciona un tema a continuación para comenzar tu viaje de aprendizaje. Cada categoría contiene vocabulario y frases esenciales en coreano con pronunciación nativa.",
        'howToLearn': "Cómo aprender efectivamente",
        'focusTitle': "Enfócate en un tema",
        'focusDesc': "En lugar de intentar aprender palabras al azar, domina una categoría a la vez. Si estás planeando un viaje, comienza con 'Aeropuerto' u 'Hotel'. Si te gustan los K-Dramas, echa un vistazo a 'Vida Diaria' o 'Emociones'.",
        'speakTitle': "Practica hablar",
        'speakDesc': "No solo leas las palabras. Usa la función de micrófono en las tarjetas de aprendizaje para verificar tu pronunciación. Hablar en voz alta te ayuda a memorizar más rápido y desarrolla la memoria muscular."
    },
    'ja': {
        'intro': "以下のトピックを選択して、学習の旅を始めましょう。各カテゴリーには、ネイティブの発音付きの必須韓国語単語とフレーズが含まれています。",
        'howToLearn': "効果的な学習方法",
        'focusTitle': "一つのトピックに集中",
        'focusDesc': "ランダムに単語を学ぼうとするのではなく、一度に一つのカテゴリーをマスターしましょう。旅行を計画している場合は、「空港」や「ホテル」から始めてください。韓国ドラマが好きなら、「日常生活」や「感情」をチェックしてみてください。",
        'speakTitle': "話す練習をする",
        'speakDesc': "単語を読むだけでなく、学習カードのマイク機能を使って発音を確認してください。声に出して話すことで、より早く覚えられ、筋肉の記憶が構築されます。"
    },
    'fr': {
        'intro': "Sélectionnez un sujet ci-dessous pour commencer votre voyage d'apprentissage. Chaque catégorie contient du vocabulaire et des phrases essentiels en coréen avec une prononciation native.",
        'howToLearn': "Comment apprendre efficacement",
        'focusTitle': "Concentrez-vous sur un sujet",
        'focusDesc': "Au lieu d'essayer d'apprendre des mots au hasard, maîtrisez une catégorie à la fois. Si vous prévoyez un voyage, commencez par 'Aéroport' ou 'Hôtel'. Si vous aimez les K-Dramas, consultez 'Vie Quotidienne' ou 'Émotions'.",
        'speakTitle': "Pratiquez l'expression orale",
        'speakDesc': "Ne lisez pas seulement les mots. Utilisez la fonction microphone des cartes d'apprentissage pour vérifier votre prononciation. Parler à voix haute vous aide à mémoriser plus rapidement et renforce la mémoire musculaire."
    },
    'th': {
        'intro': "เลือกหัวข้อด้านล่างเพื่อเริ่มต้นการเรียนรู้ของคุณ แต่ละหมวดหมู่ประกอบด้วยคำศัพท์และวลีภาษาเกาหลีที่จำเป็นพร้อมการออกเสียงของเจ้าของภาษา",
        'howToLearn': "วิธีการเรียนรู้อย่างมีประสิทธิภาพ",
        'focusTitle': "โฟกัสไปที่หัวข้อเดียว",
        'focusDesc': "แทนที่จะพยายามเรียนรู้คำศัพท์แบบสุ่ม ให้เชี่ยวชาญทีละหมวดหมู่ หากคุณวางแผนจะไปเที่ยว ให้เริ่มที่ 'สนามบิน' หรือ 'โรงแรม' หากคุณชอบซีรีส์เกาหลี ลองดู 'ชีวิตประจำวัน' หรือ 'อารมณ์'",
        'speakTitle': "ฝึกพูด",
        'speakDesc': "อย่าแค่อ่านคำศัพท์ ใช้ฟีเจอร์ไมโครโฟนในการ์ดการเรียนรู้เพื่อตรวจสอบการออกเสียงของคุณ การพูดออกมาดังๆ ช่วยให้คุณจำได้เร็วขึ้นและสร้างความจำของกล้ามเนื้อ"
    },
    'zh': {
        'intro': "选择下面的主题开始您的学习之旅。每个类别都包含带有母语发音的必备韩语词汇和短语。",
        'howToLearn': "如何有效学习",
        'focusTitle': "专注于一个主题",
        'focusDesc': "与其尝试学习随机单词，不如一次掌握一个类别。如果您计划旅行，请从“机场”或“酒店”开始。如果您喜欢韩剧，请查看“日常生活”或“情感”。",
        'speakTitle': "练习口语",
        'speakDesc': "不要只读单词。使用学习卡中的麦克风功能检查您的发音。大声朗读有助于您更快记忆并建立肌肉记忆。"
    },
    'zh-TW': {
        'intro': "選擇下面的主題開始您的學習之旅。 每個類別都包含帶有母語發音的必備韓語詞彙和短語。",
        'howToLearn': "如何有效學習",
        'focusTitle': "專注於一個主題",
        'focusDesc': "與其嘗試學習隨機單詞，不如一次掌握一個類別。 如果您計劃旅行，請從「機場」或「飯店」開始。 如果您喜歡韓劇，請查看「日常生活」或「情感」。",
        'speakTitle': "練習口語",
        'speakDesc': "不要只讀單詞。 使用學習卡中的麥克風功能檢查您的發音。 大聲朗讀有助於您更快記憶並建立肌肉記憶。"
    },
    'hi': {
        'intro': "अपनी सीखने की यात्रा शुरू करने के लिए नीचे एक विषय चुनें। प्रत्येक श्रेणी में मूल उच्चारण के साथ आवश्यक कोरियाई शब्दावली और वाक्यांश शामिल हैं।",
        'howToLearn': "प्रभावी ढंग से कैसे सीखें",
        'focusTitle': "एक विषय पर ध्यान दें",
        'focusDesc': "यादृच्छिक शब्द सीखने की कोशिश करने के बजाय, एक समय में एक श्रेणी में महारत हासिल करें। यदि आप यात्रा की योजना बना रहे हैं, तो 'हवाई अड्डा' या 'होटल' से शुरू करें। यदि आप के-ड्रामा पसंद करते हैं, तो 'दैनिक जीवन' या 'भावनाएं' देखें।",
        'speakTitle': "बोलने का अभ्यास करें",
        'speakDesc': "सिर्फ शब्द न पढ़ें। अपने उच्चारण की जांच करने के लिए लर्निंग कार्ड में माइक्रोफ़ोन सुविधा का उपयोग करें। जोर से बोलने से आपको तेजी से याद रखने में मदद मिलती है और मांसपेशियों की स्मृति बनती है।"
    }
}

def format_ts_object(data, indent_level):
    lines = []
    indent = "    " * indent_level
    for key, value in data.items():
        if isinstance(value, dict):
            lines.append(f'{indent}{key}: {{')
            lines.append(format_ts_object(value, indent_level + 1))
            lines.append(f'{indent}}},')
        else:
            safe_value = value.replace('"', '\\"').replace('\n', '\\n')
            lines.append(f'{indent}{key}: "{safe_value}",')
    return "\n".join(lines).rstrip(',')

def update_translations():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    languages = ['en', 'es', 'ja', 'fr', 'th', 'zh', 'zh-TW', 'hi']
    
    new_content = content

    for lang in languages:
        # Find the language block
        pattern = re.compile(rf'({lang}:\s*\{{.*?)(^\s*\}},?\s*$)', re.DOTALL | re.MULTILINE)
        
        # Check if conversation already exists in this block (simple check)
        # We need to be careful not to match 'conversation' in other blocks
        # So we extract the block first
        
        # Actually simplified approach: Find the end of the language block contents and append.
        # The block ends with a curly brace indentation.
        # Let's find "    lang: {" ... "    },"
        
        # Regex to find the content inside the language block
        # It assumes standard indentation as seen in the file
        lang_start_pattern = f'    {lang}: {{'
        start_idx = new_content.find(lang_start_pattern)
        
        if start_idx == -1:
            print(f"Could not find start of {lang}")
            continue
            
        # Find the matching closing brace for this block
        # Since we know the indentation is 4 spaces for the language key, the closing brace should be "    }," or "    }"
        # But there are nested objects.
        # Simple stack approach to find matching brace
        
        current_idx = start_idx + len(lang_start_pattern)
        brace_count = 1
        insertion_point = -1
        
        while current_idx < len(new_content):
            if new_content[current_idx] == '{':
                brace_count += 1
            elif new_content[current_idx] == '}':
                brace_count -= 1
                if brace_count == 0:
                    insertion_point = current_idx
                    break
            current_idx += 1
            
        if insertion_point == -1:
            print(f"Could not find end of {lang} block")
            continue
            
        # Extract the block content to check for existence
        block_content = new_content[start_idx:insertion_point]
        
        section_to_insert = ""
        
        # Add conversation if missing
        if 'conversation: {' not in block_content:
            conv_str = format_ts_object(conversations_data[lang], 3)
            section_to_insert += f',\n        conversation: {{\n{conv_str}\n        }}'

        # Add learning tips if missing (we'll add these to 'categories' section if possible, or new section 'tips')
        # The user's code in Categories.tsx accesses `translations[targetLanguage].categories`.
        # So it's best to add 'intro' and 'howToLearn' etc to `categories`.
        
        # Let's find the `categories: {` section within this block and append to it.
        # If it's too hard to parse, we can just add a new `categories_extra` or just modify the `categories` block search.
        
        # Actually, let's look for `categories: {` inside the block
        cat_start_rel = block_content.find('categories: {')
        if cat_start_rel != -1:
             # Find the end of categories block
            cat_start_abs = start_idx + cat_start_rel
            
            # Find end of categories block
            cat_idx = cat_start_abs + len('categories: {')
            cat_brace_count = 1
            cat_end_point = -1
            
            while cat_idx < len(new_content):
                if new_content[cat_idx] == '{':
                    cat_brace_count += 1
                elif new_content[cat_idx] == '}':
                    cat_brace_count -= 1
                    if cat_brace_count == 0:
                        cat_end_point = cat_idx
                        break
                cat_idx += 1
            
            if cat_end_point != -1:
                # Insert the new categorical fields into the existing categories block
                # We need to splice the string.
                # Note: modifying new_content in place invalidates indices for subsequent steps if we aren't careful.
                # But since we go lang by lang, and lang order in file is en, es, ja... 
                # actually we should be careful.
                # Better to store all replacements and apply them in reverse order or use a robust method.
                # However, since languages are sequential, if we process them in reverse order (bottom up), we are safe?
                # The languages list above: ['en', 'es', 'ja', 'fr', 'th', 'zh', 'zh-TW', 'hi'] seems to match file order roughly?
                # "en" is first. "hi" is last.
                # If we modify "hi" first, "en" indices won't change.
                pass

    # Let's restart the loop and process in reverse order to preserve indices
    languages.reverse()
    
    for lang in languages:
        # Find the language block start using regex for robustness
        # Matches: indent, optional quote, lang, matching optional quote, colon, whitespace, opening brace
        pattern_str = rf"^\s*(['\"]?){re.escape(lang)}\1:\s*\{{"
        match = re.search(pattern_str, new_content, re.MULTILINE)
        
        if not match:
             print(f"Skipping {lang} - not found with regex")
             continue
             
        # Start counting braces from after the opening brace
        start_idx = match.start()
        current_idx = match.end()

        # Find the matching closing brace
        brace_count = 1
        lang_end_idx = -1
        
        while current_idx < len(new_content):
            if new_content[current_idx] == '{':
                brace_count += 1
            elif new_content[current_idx] == '}':
                brace_count -= 1
                if brace_count == 0:
                    lang_end_idx = current_idx
                    break
            current_idx += 1
            
        if lang_end_idx == -1:
             print(f"Skipping {lang} - end not found")
             continue

        # Now work completely within this range [start_idx, lang_end_idx]
        # BUT since we are iterating in reverse order of languages (if file matches list),
        # modifying this block is safe for previous languages.
        
        # 1. Update Categories
        # Find `categories: {` inside this block
        cat_search_start = start_idx
        cat_marker = 'categories: {'
        cat_start_idx = new_content.find(cat_marker, cat_search_start, lang_end_idx)
        
        if cat_start_idx != -1:
             # Find end of categories block
             c_idx = cat_start_idx + len(cat_marker)
             c_brace = 1
             cat_end_idx = -1
             while c_idx < lang_end_idx:
                 if new_content[c_idx] == '{':
                     c_brace += 1
                 elif new_content[c_idx] == '}':
                     c_brace -= 1
                     if c_brace == 0:
                         cat_end_idx = c_idx
                         break
                 c_idx += 1
             
             if cat_end_idx != -1:
                 # Generate data to insert
                 tips = learning_tips_data[lang]
                 formatted_tips = format_ts_object(tips, 3)
                 
                 # Insert before the closing brace of categories
                 # Check if we need a comma
                 insert_str = ",\n" + formatted_tips
                 
                 # Apply change to categories
                 new_content = new_content[:cat_end_idx] + insert_str + new_content[cat_end_idx:]
                 
                 # Adjust lang_end_idx because we added content
                 lang_end_idx += len(insert_str)

        # 2. Add Conversation Block (at the end of language block)
        # We perform this AFTER categories update, so lang_end_idx is still valid-ish (updated above)
        
        conv_str = format_ts_object(conversations_data[lang], 2)
        # We want to insert it before the closing brace of the language block
        # Indent lever 2 for the key
        conv_block = f',\n        conversation: {{\n{conv_str}\n        }}'
        
        new_content = new_content[:lang_end_idx] + conv_block + new_content[lang_end_idx:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Successfully updated translations.")

if __name__ == "__main__":
    update_translations()
