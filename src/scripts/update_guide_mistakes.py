import re

file_path = '/Users/kimdongho/Desktop/hangle/src/data/guideData.ts'

# Data for 8 languages: en, es, ja, fr, th, zh, zh-TW, hi

mistakes_en = [
    {
        "id": 1,
        "title": "Honorifics vs. Casual (높임말 vs 반말)",
        "description": "It's not just about changing endings, but adjusting 'distance' based on context.",
        "badExample": "밥 먹었어? (to a stranger)",
        "goodExample": "식사 하셨어요? (to a stranger)",
        "tip": "If the listener is older or higher status, use '-(으)시-' like '가셨어요?' instead of '갔어요?'.",
        "advanced": "Level 1: 'Haeyo-che' (-yo) for polite daily conversation.\\nLevel 2: 'Hasipseio-che' (-nida) for formal settings or first meetings."
    },
    {
        "id": 2,
        "title": "Overusing 'I' (저/나)",
        "description": "Korean is a high-context language. If the subject is clear, drop it.",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "Defining 'I' in every sentence makes you sound self-centered or unnatural.",
        "advanced": "Use 'Eun/Neun' (Topic) to introduce yourself ('Jeo-neun...'). Use 'I/Ga' (Subject) to emphasize that *I* did it ('Je-ga...')."
    },
    {
        "id": 3,
        "title": "Word Order (SOV)",
        "description": "The verb must always come at the end.",
        "badExample": "저는 마셔요 커피를 (I drink coffee).",
        "goodExample": "저는 커피를 마셔요 (I coffee drink).",
        "tip": "Think of the verb as the 'period' of the sentence.",
        "advanced": "Korean word order is flexible due to particles, but the verb position is strict. 'Coffee I drink' is okay, but 'Drink I coffee' is very awkward."
    },
    {
        "id": 4,
        "title": "Particles (조사)",
        "description": "Particles are the skeleton of the sentence. Mastering 'Eun/Neun' vs 'I/Ga' is key.",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "In spoken Korean, 'Eul/Reul' (Object) is often dropped, but keep Subject/Topic particles for clarity.",
        "advanced": "'Eun/Neun' often implies contrast. 'Sa-gwa-neun jo-a-hae-yo' implies 'I like apples (but maybe not other fruits)'."
    },
    {
        "id": 5,
        "title": "Similar Sounds (Plain/Tense/Aspirated)",
        "description": "Distinguishing ㄱ-ㄲ-ㅋ is distinct by air flow and tension.",
        "badExample": "비 (Rain) vs 피 (Blood)",
        "goodExample": "Pronounce aspirated sounds (ㅋ, ㅌ, ㅍ, ㅊ) with a burst of air.",
        "tip": "Put your hand before your mouth. You should feel air only with ㅋ, ㅌ, ㅍ, ㅊ.",
        "advanced": "Plain (ㅂ): Relaxed sound (Fire - Bul).\\nTense (ㅃ): Tense throat, sharp sound (Horn - Ppul).\\nAspirated (ㅍ): Strong burst of air (Grass - Pul)."
    },
    {
        "id": 6,
        "title": "Honorific Verbs (특수 높임 어휘)",
        "description": "Upgrade the words themselves when speaking to elders.",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "Add '-(으)시-' to verbs to honor the subject (e.g., Ga-da -> Ga-si-da).",
        "advanced": "Particles change too: 'I/Ga' -> 'Kke-seo', 'E-ge' -> 'Kke'.\\nVocabulary: Eat (Meok-da) -> Deu-si-da, Sleep (Ja-da) -> Ju-mu-si-da."
    },
    {
        "id": 7,
        "title": "Direct Translation (직역의 함정)",
        "description": "Directly translating English idioms sounds unnatural.",
        "badExample": "저는 피곤해요 왜냐하면... (I am tired because...)",
        "goodExample": "일을 많이 해서 피곤해요 (Because I worked a lot, I am tired).",
        "tip": "Avoid starting sentences with 'Because'. Use connection endings like '-a/eo-seo' inside the sentence.",
        "advanced": "Korean structure is 'Cause -> Effect' in one sentence. 'Manna-seo ban-ga-wo-yo' (Met you + so + happy)."
    },
    {
        "id": 8,
        "title": "Negative Questions (부정 의문문)",
        "description": "Yes/No answers are opposite to English logic.",
        "badExample": "안 매워요? -> No, it's not spicy. (English logic)",
        "goodExample": "네, 안 매워요. (Yes, you are right, it is not spicy).",
        "tip": "If confused, always add the full sentence after Yes/No.",
        "advanced": "Korean 'Yes/No' agrees/disagrees with the *speaker's statement*, not the fact.\\nQ: 'Can't you eat kimchi?'\\nA: 'Yes' (You are right, I can't).\\nA: 'No' (Your premise is wrong, I can)."
    }
]

mistakes_es = [
    {
        "id": 1,
        "title": "Honoríficos vs. Informal (높임말 vs 반말)",
        "description": "No es solo cambiar las terminaciones, sino ajustar la 'distancia' según el contexto.",
        "badExample": "밥 먹었어? (a un extraño)",
        "goodExample": "식사 하셨어요? (a un extraño)",
        "tip": "Si el oyente es mayor o de mayor rango, usa '-(으)시-' como '가셨어요?' en lugar de '갔어요?'.",
        "advanced": "Nivel 1: 'Haeyo-che' (-yo) para conversación diaria cortés.\\nNivel 2: 'Hasipseio-che' (-nida) para situaciones formales o primeras reuniones."
    },
    {
        "id": 2,
        "title": "Uso excesivo de 'Yo' (저/나)",
        "description": "El coreano es un idioma de alto contexto. Si el sujeto es claro, omítelo.",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "Usar 'Yo' en cada frase te hace sonar egocéntrico o poco natural.",
        "advanced": "Usa 'Eun/Neun' (Tema) para presentarte ('Jeo-neun...'). Usa 'I/Ga' (Sujeto) para enfatizar que *TÚ* lo hiciste ('Je-ga...')."
    },
    {
        "id": 3,
        "title": "Orden de las palabras (SOV)",
        "description": "El verbo siempre debe ir al final.",
        "badExample": "저는 마셔요 커피를 (Yo bebo café).",
        "goodExample": "저는 커피를 마셔요 (Yo café bebo).",
        "tip": "Piensa en el verbo como el 'punto final' de la oración.",
        "advanced": "El orden de las palabras es flexible gracias a las partículas, pero la posición del verbo es estricta. 'Café yo bebo' está bien, pero 'Bebo yo café' suena muy raro."
    },
    {
        "id": 4,
        "title": "Partículas (조사)",
        "description": "Las partículas son el esqueleto de la oración. Dominar 'Eun/Neun' vs 'I/Ga' es clave.",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "En coreano hablado, 'Eul/Reul' (Objeto) a menudo se omite, pero mantén las partículas de Sujeto/Tema para mayor claridad.",
        "advanced": "'Eun/Neun' a menudo implica contraste. 'Sa-gwa-neun jo-a-hae-yo' implica 'Me gustan las manzanas (pero tal vez no otras frutas)'."
    },
    {
        "id": 5,
        "title": "Sonidos similares (Plano/Tenso/Aspirado)",
        "description": "Distinguir ㄱ-ㄲ-ㅋ se basa en el flujo de aire y la tensión.",
        "badExample": "비 (Lluvia) vs 피 (Sangre)",
        "goodExample": "Pronuncia los sonidos aspirados (ㅋ, ㅌ, ㅍ, ㅊ) con una expulsión de aire.",
        "tip": "Pon tu mano frente a tu boca. Solo deberías sentir aire con ㅋ, ㅌ, ㅍ, ㅊ.",
        "advanced": "Plano (ㅂ): Sonido relajado (Fuego - Bul).\\nTenso (ㅃ): Garganta tensa, sonido agudo (Cuerno - Ppul).\\nAspirado (ㅍ): Fuerte expulsión de aire (Hierba - Pul)."
    },
    {
        "id": 6,
        "title": "Verbos honoríficos (특수 높임 어휘)",
        "description": "Mejora las palabras mismas al hablar con mayores.",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "Añade '-(으)시-' a los verbos para honrar al sujeto (ej. Ga-da -> Ga-si-da).",
        "advanced": "Las partículas también cambian: 'I/Ga' -> 'Kke-seo', 'E-ge' -> 'Kke'.\\nVocabulario: Comer (Meok-da) -> Deu-si-da, Dormir (Ja-da) -> Ju-mu-si-da."
    },
    {
        "id": 7,
        "title": "Traducción directa (직역의 함정)",
        "description": "Traducir modismos en inglés/español directamente suena poco natural.",
        "badExample": "저는 피곤해요 왜냐하면... (Estoy cansado porque...)",
        "goodExample": "일을 많이 해서 피곤해요 (Porque trabajé mucho, estoy cansado).",
        "tip": "Evita comenzar oraciones con 'Porque'. Usa terminaciones de conexión como '-a/eo-seo' dentro de la oración.",
        "advanced": "La estructura coreana es 'Causa -> Efecto' en una oración. 'Manna-seo ban-ga-wo-yo' (Te conocí + así que + feliz)."
    },
    {
        "id": 8,
        "title": "Preguntas negativas (부정 의문문)",
        "description": "Las respuestas Sí/No siguen una lógica opuesta al español/inglés.",
        "badExample": "¿No pica? -> No, no pica. (Lógica española)",
        "goodExample": "네, 안 매워요. (Sí, tienes razón, no pica).",
        "tip": "Si estás confundido, siempre añade la oración completa después de Sí/No.",
        "advanced": "El 'Sí/No' coreano está de acuerdo/en desacuerdo con la *declaración del hablante*, no con el hecho.\\nP: '¿No puedes comer kimchi?'\\nR: 'Sí' (Tienes razón, no puedo).\\nR: 'No' (Tu premisa es incorrecta, sí puedo)."
    }
]

mistakes_ja = [
    {
        "id": 1,
        "title": "敬語 vs タメ口 (높임말 vs 반말)",
        "description": "単に語尾を変えるだけでなく、状況に応じた「距離感」を調整することが核心です。",
        "badExample": "밥 먹었어? (初対面の人に)",
        "goodExample": "식사 하셨어요? (初対面の人に)",
        "tip": "目上の人には「～했어요?」よりも「～하셨어요?」のように「시」を入れて主体を高めるのが自然です。",
        "advanced": "敬語にも2つの層があります。\\n・ヘヨ体 (~요): 親しみのある丁寧語。カフェ、食堂、同僚など。\\n・ハシプシオ体 (~습니다): 公的な場、発表、軍隊、初対面のビジネス相手。"
    },
    {
        "id": 2,
        "title": "「私」の使いすぎ (저/나)",
        "description": "韓国語は文脈依存度が高い言語です。誰が話しているか分かれば主語は思い切って省きましょう。",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "文ごとに「私は」を入れると、自己主張が強すぎるように聞こえることがあります。",
        "advanced": "あえて主語を使うなら「은/는(主題)」と「이/가(焦点)」の違いを知る必要があります。\\n・저는: (主題提示) 私はですね、\\n・제가: (強調/選択) 他の人ではなく「まさに私が」"
    },
    {
        "id": 3,
        "title": "語順 (SOV)",
        "description": "動詞は常に文の「ピリオド（最後）」の役割を果たします。",
        "badExample": "저는 마셔요 커피を (私は飲みます コーヒーを)",
        "goodExample": "저는 커피를 마셔요 (私はコーヒーを飲みます)",
        "tip": "動詞を一番最後に置くことを意識してください。",
        "advanced": "助詞のおかげで語順は比較的自由ですが、動詞だけは必ず最後に来なければなりません。\\n「コーヒーを私が飲みます」(O - 強調)\\n「飲みます 私が コーヒーを」(X - 非常に不自然)"
    },
    {
        "id": 4,
        "title": "助詞の省略と誤用 (조사)",
        "description": "助詞は文の骨組みです。特に「은/는」と「이/가」の使い分けが重要です。",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "話し言葉では「를/을」(目的格)はよく省略されますが、主格助詞や主題助詞は意味を伝えるために残す練習をしましょう。",
        "advanced": "「은/는」は対照を表すことが多いです。「사과는 좋아해요」は「リンゴは好きです（が、ブドウは好きじゃないかもしれません）」というニュアンスを含みます。"
    },
    {
        "id": 5,
        "title": "似た音の区別 (平音/濃音/激音)",
        "description": "ㄱ-ㄲ-ㅋ の発音は、空気の量と喉の緊張度で区別します。",
        "badExample": "비 (雨) vs 피 (血)",
        "goodExample": "激音 (ㅋ, ㅌ, ㅍ, ㅊ) は強く息を出して発音します。",
        "tip": "口の前に手を当ててみてください。ㅋ, ㅌ, ㅍ, ㅊ の時だけ強い風を感じるはずです。",
        "advanced": "・平音 (ㅂ): リラックスした音 (火 - 불)\\n・濃音 (ㅃ): 喉に力を入れた硬い音 (角 - 뿔)\\n・激音 (ㅍ): 強い息を伴う音 (草 - 풀)"
    },
    {
        "id": 6,
        "title": "特殊敬語 (특수 높임 어휘)",
        "description": "目上の方には、単語自体を「アップグレード」して使う必要があります。",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "主語を高めるときは、動詞の語幹に「-시-」をつける習慣をつけましょう (例: 가다 → 가시다)。",
        "advanced": "助詞も変わります：「이/가」→「께서」、「에게」→「께」\\n語彙：食べる(먹다)→드시다、寝る(자다)→주무시다、名前(이름)→성함、家(집)→댁"
    },
    {
        "id": 7,
        "title": "直訳の罠 (직역의 함정)",
        "description": "母国語の表現をそのまま直訳すると不自然になります。",
        "badExample": "저는 피곤해요 왜냐하면... (I am tired because...)",
        "goodExample": "일을 많이 해서 피곤해요 (仕事をしすぎて疲れました)",
        "tip": "「なぜなら(왜냐하면)」で文を始めず、文中の連結語尾 (~아서/어서, ~기 때문에) を活用しましょう。",
        "advanced": "韓国語は「原因→結果」の順序で一つの文にします。「만나서 반가워요」 (会えて＋嬉しいです)"
    },
    {
        "id": 8,
        "title": "否定疑問文 (부정 의문문)",
        "description": "Yes/Noの基準が英語・日本語とは異なります。",
        "badExample": "안 매워요? (辛くないですか？) -> いいえ、辛くないです。(日本語の感覚)",
        "goodExample": "네, 안 매워요. (はい、[あなたの言う通り] 辛くないです)",
        "tip": "混乱する場合は、ネ/アニヨの後ろに必ずフルセンテンスを付け加えましょう。",
        "advanced": "韓国語の「ネ/アニヨ」は、相手の質問内容（前提）に同意するかどうかを答えるものです。\\nQ: 「キムチ食べられないですか？」\\nA: 「はい（あなたの言う通り、食べられません）」\\nA: 「いいえ（あなたの言う事とは違って、食べられます）」"
    }
]

mistakes_fr = [
    {
        "id": 1,
        "title": "Honorifiques vs. Informel (높임말 vs 반말)",
        "description": "Il ne s'agit pas seulement de changer les terminaisons, mais d'ajuster la 'distance' selon le contexte.",
        "badExample": "밥 먹었어? (à un inconnu)",
        "goodExample": "식사 하셨어요? (à un inconnu)",
        "tip": "Si l'interlocuteur est plus âgé ou d'un rang supérieur, utilisez '-(으)시-' comme '가셨어요?' au lieu de '갔어요?'.",
        "advanced": "Niveau 1: 'Haeyo-che' (-yo) pour la conversation quotidienne polie.\\nNiveau 2: 'Hasipseio-che' (-nida) pour les situations formelles."
    },
    {
        "id": 2,
        "title": "Surutilisation de 'Je' (저/나)",
        "description": "Le coréen est une langue à fort contexte. Si le sujet est clair, omettez-le.",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "Utiliser 'Je' dans chaque phrase vous fait paraître égocentrique ou peu naturel.",
        "advanced": "Utilisez 'Eun/Neun' (Thème) pour vous présenter ('Jeo-neun...'). Utilisez 'I/Ga' (Sujet) pour souligner que c'est *MOI* qui l'ai fait ('Je-ga...')."
    },
    {
        "id": 3,
        "title": "Ordre des mots (SOV)",
        "description": "Le verbe doit toujours être à la fin.",
        "badExample": "저는 마셔요 커피를 (Je bois du café).",
        "goodExample": "저는 커피를 마셔요 (Je café bois).",
        "tip": "Pensez au verbe comme au 'point final' de la phrase.",
        "advanced": "L'ordre des mots est flexible grâce aux particules, mais la position du verbe est stricte. 'Café je bois' est acceptable (emphase), mais 'Bois je café' est très maladroit."
    },
    {
        "id": 4,
        "title": "Particules (조사)",
        "description": "Les particules sont le squelette de la phrase. Maîtriser 'Eun/Neun' vs 'I/Ga' est la clé.",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "À l'oral, 'Eul/Reul' (Objet) est souvent omis, mais gardez les particules de Sujet/Thème pour la clarté.",
        "advanced": "'Eun/Neun' implique souvent un contraste. 'Sa-gwa-neun jo-a-hae-yo' implique 'J'aime les pommes (mais peut-être pas les autres fruits)'."
    },
    {
        "id": 5,
        "title": "Sons similaires (Simple/Tendu/Aspiré)",
        "description": "La distinction ㄱ-ㄲ-ㅋ se fait par le flux d'air et la tension de la gorge.",
        "badExample": "비 (Pluie) vs 피 (Sang)",
        "goodExample": "Prononcez les sons aspirés (ㅋ, ㅌ, ㅍ, ㅊ) avec une explosion d'air.",
        "tip": "Mettez votre main devant votre bouche. Vous ne devriez sentir de l'air qu'avec ㅋ, ㅌ, ㅍ, ㅊ.",
        "advanced": "Simple (ㅂ): Son détendu (Feu - Bul).\\nTendu (ㅃ): Gorge tendue, son sec (Corne - Ppul).\\nAspiré (ㅍ): Forte explosion d'air (Herbe - Pul)."
    },
    {
        "id": 6,
        "title": "Verbes honorifiques (특수 높임 어휘)",
        "description": "Améliorez les mots eux-mêmes lorsque vous parlez aux aînés.",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "Ajoutez '-(으)시-' aux verbes pour honorer le sujet (ex. Ga-da -> Ga-si-da).",
        "advanced": "Les particules changent aussi : 'I/Ga' -> 'Kke-seo', 'E-ge' -> 'Kke'.\\nVocabulaire : Manger (Meok-da) -> Deu-si-da, Dormir (Ja-da) -> Ju-mu-si-da."
    },
    {
        "id": 7,
        "title": "Traduction littérale (직역의 함정)",
        "description": "Traduire directement des expressions françaises semble peu naturel.",
        "badExample": "저는 피곤해요 왜냐하면... (Je suis fatigué parce que...)",
        "goodExample": "일을 많이 해서 피곤해요 (Parce que j'ai beaucoup travaillé, je suis fatigué).",
        "tip": "Évitez de commencer les phrases par 'Parce que'. Utilisez des terminaisons de connexion comme '-a/eo-seo' dans la phrase.",
        "advanced": "La structure coréenne est 'Cause -> Effet' en une seule phrase. 'Manna-seo ban-ga-wo-yo' (Rencontré + donc + heureux)."
    },
    {
        "id": 8,
        "title": "Questions négatives (부정 의문문)",
        "description": "Les réponses Oui/Non suivent une logique opposée au français.",
        "badExample": "Ce n'est pas épicé ? -> Non, ce n'est pas épicé. (Logique française)",
        "goodExample": "네, 안 매워요. (Oui, vous avez raison, ce n'est pas épicé).",
        "tip": "En cas de doute, ajoutez toujours la phrase complète après Oui/Non.",
        "advanced": "Le 'Oui/Non' coréen est d'accord/pas d'accord avec l'*affirmation du locuteur*, pas avec le fait.\\nQ : 'Tu ne peux pas manger de kimchi ?'\\nR : 'Oui' (Tu as raison, je ne peux pas).\\nR : 'Non' (Ta prémisse est fausse, je peux)."
    }
]

mistakes_th = [
    {
        "id": 1,
        "title": "คำสุภาพ vs กันเอง (높임말 vs 반말)",
        "description": "ไม่ใช่แค่เปลี่ยนคำลงท้าย แต่ต้องปรับ 'ระยะห่าง' ตามสถานการณ์",
        "badExample": "밥 먹었어? (กับคนแปลกหน้า)",
        "goodExample": "식사 하셨어요? (กับคนแปลกหน้า)",
        "tip": "ถ้าผู้ฟังอายุมากกว่าหรือตำแหน่งสูงกว่า ให้ใช้ '-(으)시-' เช่น '가셨어요?' แทน '갔어요?'",
        "advanced": "ระดับ 1: 'แฮโย-เช' (~요) สำหรับบทสนทนาทั่วไปที่สุภาพ\\nระดับ 2: 'ฮาชิพชิโอ-เช' (~습니다) สำหรับที่เป็นทางการหรือเจอกันครั้งแรก"
    },
    {
        "id": 2,
        "title": "ใช้ 'ฉัน/ผม' มากไป (저/나)",
        "description": "ภาษาเกาหลีดูบริบทเป็นหลัก ถ้าประธานชัดเจนอยู่แล้ว ให้ละไว้",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "ใส่ 'ฉัน' ทุกประโยคจะฟังดูเหมือนเน้นตัวเองมากเกินไปหรือไม่เป็นธรรมชาติ",
        "advanced": "ใช้ 'Eun/Neun' (หัวข้อ) เพื่อแนะนำตัว ('Jeo-neun...'). ใช้ 'I/Ga' (ประธาน) เพื่อเน้นว่า *ฉัน* เป็นคนทำ ('Je-ga...')"
    },
    {
        "id": 3,
        "title": "ลำดับคำ (SOV)",
        "description": "คำกริยาต้องอยู่ท้ายประโยคเสมอ",
        "badExample": "저는 마셔요 커피를 (ฉันดื่มกาแฟ)",
        "goodExample": "저는 커피를 마셔요 (ฉันกาแฟดื่ม)",
        "tip": "ให้คิดว่าคำกริยาคือ 'จุด full stop' ของประโยค",
        "advanced": "ลำดับคำในภาษาเกาหลียืดหยุ่นเพราะมีคำช่วย แต่ตำแหน่งกริยาต้องเป๊ะ 'กาแฟฉันดื่ม' โอเค แต่ 'ดื่มฉันกาแฟ' แปลกมาก"
    },
    {
        "id": 4,
        "title": "คำช่วย (조사)",
        "description": "คำช่วยคือโครงกระดูกของประโยค การแยกแยะ 'Eun/Neun' กับ 'I/Ga' คือกุญแจสำคัญ",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "ในภาษาพูด 'Eul/Reul' (กรรม) มักถูกละไว้ แต่ควรคงคำช่วยประธาน/หัวข้อไว้เพื่อความชัดเจน",
        "advanced": "'Eun/Neun' มักแฝงนัยของการเปรียบเทียบ 'Sa-gwa-neun jo-a-hae-yo' หมายถึง 'แอปเปิ้ลน่ะชอบนะ (แต่อย่างอื่นอาจไม่)'"
    },
    {
        "id": 5,
        "title": "เสียงที่คล้ายกัน (ธรรมดา/หนัก/พ่นลม)",
        "description": "แยกแยะ ㄱ-ㄲ-ㅋ ด้วยปริมาณลมและความเกร็งของคอ",
        "badExample": "비 (ฝน) vs 피 (เลือด)",
        "goodExample": "ออกเสียงพยัญชนะพ่นลม (ㅋ, ㅌ, ㅍ, ㅊ) ด้วยการพ่นลมออกมาแรงๆ",
        "tip": "เอามือป้องปาก คุณควรรู้สึกถึงลมเฉพาะตอนออกเสียง ㅋ, ㅌ, ㅍ, ㅊ เท่านั้น",
        "advanced": "ธรรมดา (ㅂ): เสียงผ่อนคลาย (ไฟ - Bul)\\nหนัก (ㅃ): เกร็งคอ เสียงแหลม (เขา - Ppul)\\nพ่นลม (ㅍ): พ่นลมแรง (หญ้า - Pul)"
    },
    {
        "id": 6,
        "title": "คำกริยารูปยกย่อง (특수 높임 어휘)",
        "description": "ใช้คำศัพท์ระดับสูงเมื่อพูดกับผู้ใหญ่",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "เติม '-(으)시-' ท้ายกริยาเพื่อยกย่องประธาน (เช่น Ga-da -> Ga-si-da)",
        "advanced": "คำช่วยก็เปลี่ยนด้วย: 'I/Ga' -> 'Kke-seo', 'E-ge' -> 'Kke'\\nคำศัพท์: กิน (Meok-da) -> Deu-si-da, นอน (Ja-da) -> Ju-mu-si-da"
    },
    {
        "id": 7,
        "title": "แปลตรงตัว (직역의 함정)",
        "description": "การแปลสำนวนภาษาอังกฤษตรงๆ จะฟังดูไม่เป็นธรรมชาติ",
        "badExample": "저는 피곤해요 왜냐하면... (ฉันเหนื่อยเพราะว่า...)",
        "goodExample": "일을 많이 해서 피곤해요 (ทำงานหนักเลยเหนื่อย)",
        "tip": "เลี่ยงการขึ้นต้นด้วย 'เพราะว่า' ให้ใช้คำเชื่อมอย่าง '-a/eo-seo' ในประโยคแทน",
        "advanced": "โครงสร้างเกาหลีคือ 'เหตุ -> ผล' ในประโยคเดียว 'Manna-seo ban-ga-wo-yo' (เจอกัน + เลย + ยินดี)"
    },
    {
        "id": 8,
        "title": "คำถามปฏิเสธ (부정 의문문)",
        "description": "การตอบ ใช่/ไม่ใช่ มีตรรกะตรงข้ามกับภาษาอังกฤษ/ไทย",
        "badExample": "ไม่เผ็ดเหรอ? -> ไม่, ไม่เผ็ด (ตรรกะไทย)",
        "goodExample": "네, 안 매워요. (ใช่, คุณพูดถูก, มันไม่เผ็ด)",
        "tip": "ถ้างง ให้ทวนประโยคเต็มๆ หลังคำว่า ใช่/ไม่ใช่ เสมอ",
        "advanced": "'ใช่/ไม่ใช่' ในภาษาเกาหลีคือการ เห็นด้วย/ไม่เห็นด้วย กับ *คำพูดของผู้ถาม* ไม่ใช่ข้อเท็จจริง\\nQ: 'กินกิมจิไม่ได้เหรอ?'\\nA: 'ใช่' (คุณพูดถูก ฉันกินไม่ได้)\\nA: 'ไม่' (คุณพูดผิด ฉันกินได้)"
    }
]

mistakes_zh = [
    {
        "id": 1,
        "title": "敬语 vs. 半语 (높임말 vs 반말)",
        "description": "核心不仅仅是改变词尾，而是根据情况调整‘距离感’。",
        "badExample": "밥 먹었어? (对初次见面的人)",
        "goodExample": "식사 하셨어요? (对初次见面的人)",
        "tip": "如果听者年长或地位较高，请使用‘-(으)시-’，如‘가셨어요?’而不是‘갔어요?’。",
        "advanced": "Level 1: ‘Haeyo-che’ (~요) 用于礼貌的日常对话。\\nLevel 2: ‘Hasipseio-che’ (~습니다) 用于正式场合或初次见面。"
    },
    {
        "id": 2,
        "title": "滥用‘我’ (저/나)",
        "description": "韩语是一种高语境语言。如果主语清楚，就省略它。",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "在每个句子里都加‘我’会让你听起来以自我为中心或不自然。",
        "advanced": "使用‘Eun/Neun’ (主题) 来介绍自己 (‘Jeo-neun...’)。使用‘I/Ga’ (主语) 来强调是*我*做的 (‘Je-ga...’)。"
    },
    {
        "id": 3,
        "title": "语序 (SOV)",
        "description": "动词必须始终位于句尾。",
        "badExample": "저는 마셔요 커피を (我喝咖啡)。",
        "goodExample": "저는 커피를 마셔요 (我咖啡喝)。",
        "tip": "把动词想象成句子的‘句号’。",
        "advanced": "由于有助词，韩语语序相对灵活，但动词位置是严格的。‘咖啡我喝’是可以的，但‘喝我咖啡’非常别扭。"
    },
    {
        "id": 4,
        "title": "助词 (조사)",
        "description": "助词是句子的骨架。掌握 ‘Eun/Neun’ vs ‘I/Ga’ 是关键。",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "在口语中，‘Eul/Reul’ (宾语) 常被省略，但为了清晰起见，请保留主语/主题助词。",
        "advanced": "‘Eun/Neun’ 通常带有对比的含义。‘Sa-gwa-neun jo-a-hae-yo’ 暗示‘我喜欢苹果（但可能不喜欢其他水果）’。"
    },
    {
        "id": 5,
        "title": "相似发音 (平音/紧音/送气音)",
        "description": "区分 ㄱ-ㄲ-ㅋ 靠的是气流和喉咙的紧张度。",
        "badExample": "비 (雨) vs 피 (血)",
        "goodExample": "发送气音 (ㅋ, ㅌ, ㅍ, ㅊ) 时要伴随强烈的气流。",
        "tip": "把手放在嘴前。你应该只在发 ㅋ, ㅌ, ㅍ, ㅊ 时感觉到气流。",
        "advanced": "平音 (ㅂ): 放松的声音 (火 - Bul)。\\n紧音 (ㅃ): 喉咙紧张，尖锐的声音 (角 - Ppul)。\\n送气音 (ㅍ): 强烈的爆破气流 (草 - Pul)。"
    },
    {
        "id": 6,
        "title": "敬语动词 (특수 높임 어휘)",
        "description": "对长辈说话时，请升级词汇本身。",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "在动词后加 ‘-(으)시-’ 以尊敬主语 (例如 Ga-da -> Ga-si-da)。",
        "advanced": "助词也会改变：‘I/Ga’ -> ‘Kke-seo’，‘E-ge’ -> ‘Kke’。\\n词汇：吃 (Meok-da) -> Deu-si-da，睡 (Ja-da) -> Ju-mu-si-da。"
    },
    {
        "id": 7,
        "title": "直译 (직역의 함정)",
        "description": "直接翻译英语习惯用语听起来不自然。",
        "badExample": "저는 피곤해요 왜냐하면... (我很累因为...)",
        "goodExample": "일을 많이 해서 피곤해요 (因为工作多所以累)。",
        "tip": "避免以‘因为’开头。在句子中使用连接词尾，如 ‘-a/eo-seo’。",
        "advanced": "韩语结构是‘原因 -> 结果’在一个句子里。‘Manna-seo ban-ga-wo-yo’ (见到你 + 所以 + 高兴)。"
    },
    {
        "id": 8,
        "title": "否定疑问句 (부정 의문문)",
        "description": "是/否的回答逻辑与英语相反。",
        "badExample": "不辣吗？ -> 不，不辣。(英语/中文逻辑)",
        "goodExample": "네, 안 매워요. (是的，你说得对，不辣)。",
        "tip": "如果困惑，总是在是/否之后加上完整的句子。",
        "advanced": "韩语的‘是/否’是对*说话者的陈述*表示同意/不同意，而不是对事实。\\n问：‘你不能吃泡菜吗？’\\n答：‘是’ (你说得对，我不能)。\\n答：‘不’ (你的前提错了，我能)。"
    }
]

mistakes_zh_tw = [
    {
        "id": 1,
        "title": "敬語 vs. 半語 (높임말 vs 반말)",
        "description": "核心不僅是改變詞尾，而是根據情況調整‘距離感’。",
        "badExample": "밥 먹었어? (對初次見面的人)",
        "goodExample": "식사 하셨어요? (對初次見面的人)",
        "tip": "如果聽者年長或地位較高，請使用‘-(으)시-’，如‘가셨어요?’而不是‘갔어요?’。",
        "advanced": "Level 1: ‘Haeyo-che’ (~요) 用於禮貌的日常對話。\\nLevel 2: ‘Hasipseio-che’ (~습니다) 用於正式場合或初次見面。"
    },
    {
        "id": 2,
        "title": "濫用‘我’ (저/나)",
        "description": "韓語是一種高語境語言。如果主語清楚，就省略它。",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "在每個句子裡都加‘我’會讓你聽起來以自我為中心或不自然。",
        "advanced": "使用‘Eun/Neun’ (主題) 來介紹自己 (‘Jeo-neun...’)。使用‘I/Ga’ (主語) 來強調是*我*做的 (‘Je-ga...’)。"
    },
    {
        "id": 3,
        "title": "語序 (SOV)",
        "description": "動詞必須始終位於句尾。",
        "badExample": "저는 마셔요 커피를 (我喝咖啡)。",
        "goodExample": "저는 커피를 마셔요 (我咖啡喝)。",
        "tip": "把動詞想像成句子的‘句號’。",
        "advanced": "由於有助詞，韓語語序相對靈活，但動詞位置是嚴格的。‘咖啡我喝’是可以的，但‘喝我咖啡’非常彆扭。"
    },
    {
        "id": 4,
        "title": "助詞 (조사)",
        "description": "助詞是句子的骨架。掌握 ‘Eun/Neun’ vs ‘I/Ga’ 是關鍵。",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "在口語中，‘Eul/Reul’ (賓語) 常被省略，但為了清晰起見，請保留主語/主題助詞。",
        "advanced": "‘Eun/Neun’ 通常帶有對比的含義。‘Sa-gwa-neun jo-a-hae-yo’ 暗示‘我喜歡蘋果（但可能不喜歡其他水果）’。"
    },
    {
        "id": 5,
        "title": "相似發音 (平音/緊音/送氣音)",
        "description": "區分 ㄱ-ㄲ-ㅋ 靠的是氣流和喉嚨的緊張度。",
        "badExample": "비 (雨) vs 피 (血)",
        "goodExample": "發送氣音 (ㅋ, ㅌ, ㅍ, ㅊ) 時要伴隨強烈的氣流。",
        "tip": "把手放在嘴前。你應該只在發 ㅋ, ㅌ, ㅍ, ㅊ 時感覺到氣流。",
        "advanced": "平音 (ㅂ): 放鬆的聲音 (火 - Bul)。\\n緊音 (ㅃ): 喉嚨緊張，尖銳的聲音 (角 - Ppul)。\\n送氣音 (ㅍ): 強烈的爆破氣流 (草 - Pul)。"
    },
    {
        "id": 6,
        "title": "敬語動詞 (특수 높임 어휘)",
        "description": "對長輩說話時，請升級詞彙本身。",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "在動詞後加 ‘-(으)시-’ 以尊敬主語 (例如 Ga-da -> Ga-si-da)。",
        "advanced": "助詞也會改變：‘I/Ga’ -> ‘Kke-seo’，‘E-ge’ -> ‘Kke’。\\n詞彙：吃 (Meok-da) -> Deu-si-da，睡 (Ja-da) -> Ju-mu-si-da。"
    },
    {
        "id": 7,
        "title": "直譯 (직역의 함정)",
        "description": "直接翻譯英語習慣用語聽起來不自然。",
        "badExample": "저는 피곤해요 왜냐하면... (我很累因為...)",
        "goodExample": "일을 많이 해서 피곤해요 (因為工作多所以累)。",
        "tip": "避免以‘因為’開頭。在句子中使用連接詞尾，如 ‘-a/eo-seo’。",
        "advanced": "韓語結構是‘原因 -> 結果’在一個句子裡。‘Manna-seo ban-ga-wo-yo’ (見到你 + 所以 + 高興)。"
    },
    {
        "id": 8,
        "title": "否定疑問句 (부정 의문문)",
        "description": "是/否的回答邏輯與英語相反。",
        "badExample": "不辣嗎？ -> 不，不辣。(英語/中文邏輯)",
        "goodExample": "네, 안 매워요. (是的，你說得對，不辣)。",
        "tip": "如果困惑，總是在是/否之後加上完整的句子。",
        "advanced": "韓語的‘是/否’是對*說話者的陳述*表示同意/不同意，而不是對事實。\\n問：‘你不能吃泡菜嗎？’\\n答：‘是’ (你說得對，我不能)。\\n答：‘不’ (你的前提錯了，我能)。"
    }
]

mistakes_hi = [
    {
        "id": 1,
        "title": "Honorifics vs. अनौपचारिक (높임말 vs 반말)",
        "description": "यह केवल अंत बदलने के बारे में नहीं है, बल्कि संदर्भ के आधार पर 'दूरी' को समायोजित करने के बारे में है।",
        "badExample": "밥 먹었어? (अजनबी से)",
        "goodExample": "식사 하셨어요? (अजनबी से)",
        "tip": "यदि श्रोता बड़ा है या उच्च पद पर है, तो '갔어요?' के बजाय '가셨어요?' जैसे '-(으)시-' का उपयोग करें।",
        "advanced": "स्तर 1: विनम्र दैनिक बातचीत के लिए 'Haeyo-che' (~요)।\\nस्तर 2: औपचारिक सेटिंग्स या पहली मुलाकातों के लिए 'Hasipseio-che' (~습니다)।"
    },
    {
        "id": 2,
        "title": "'मैं' का अति प्रयोग (저/나)",
        "description": "कोरियाई एक उच्च-संदर्भ भाषा है। यदि विषय स्पष्ट है, तो इसे छोड़ दें।",
        "badExample": "저는 학교에 가요. 저는 공부해요.",
        "goodExample": "학교에 가요. 그리고 공부해요.",
        "tip": "हर वाक्य में 'मैं' को परिभाषित करना आपको आत्मकेंद्रित या अप्राकृतिक बनाता है।",
        "advanced": "अपना परिचय देने के लिए 'Eun/Neun' (विषय) का प्रयोग करें ('Jeo-neun...')। यह जोर देने के लिए 'I/Ga' (कर्ता) का उपयोग करें कि *मैंने* यह किया ('Je-ga...')।"
    },
    {
        "id": 3,
        "title": "शब्द क्रम (SOV)",
        "description": "क्रिया हमेशा अंत में आनी चाहिए।",
        "badExample": "저는 마셔요 커피를 (मैं कॉफी पीता हूँ)।",
        "goodExample": "저는 커피를 마셔요 (मैं कॉफी पीता हूँ - क्रिया अंत में)।",
        "tip": "क्रिया को वाक्य के 'पूर्ण विराम' के रूप में सोचें।",
        "advanced": "कणों के कारण कोरियाई शब्द क्रम लचीला है, लेकिन क्रिया की स्थिति सख्त है। 'कॉफी मैं पीता हूँ' ठीक है, लेकिन 'पीता हूँ मैं कॉफी' बहुत अजीब है।"
    },
    {
        "id": 4,
        "title": "कण (조사)",
        "description": "कण वाक्य का ढांचा हैं। 'Eun/Neun' बनाम 'I/Ga' में महारत हासिल करना महत्वपूर्ण है।",
        "badExample": "나 커피 좋아해.",
        "goodExample": "저는 커피를 좋아해요.",
        "tip": "बोली जाने वाली कोरियाई में, 'Eul/Reul' (वस्तु) अक्सर छोड़ दिया जाता है, लेकिन स्पष्टता के लिए कर्ता/विषय कणों को रखें।",
        "advanced": "'Eun/Neun' अक्सर विरोध का अर्थ देता है। 'Sa-gwa-neun jo-a-hae-yo' का अर्थ है 'मुझे सेब पसंद हैं (लेकिन शायद अन्य फल नहीं)'।"
    },
    {
        "id": 5,
        "title": "समान ध्वनियाँ (सादा/तनावपूर्ण/एस्पिरेटेड)",
        "description": "ㄱ-ㄲ-ㅋ को अलग करना वायु प्रवाह और तनाव द्वारा अलग है।",
        "badExample": "비 (बारिश) vs 피 (खून)",
        "goodExample": "हवा के झोंके के साथ एस्पिरेटेड ध्वनियों (ㅋ, ㅌ, ㅍ, ㅊ) का उच्चारण करें।",
        "tip": "अपना हाथ अपने मुंह के सामने रखें। आपको केवल ㅋ, ㅌ, ㅍ, ㅊ के साथ हवा महसूस करनी चाहिए।",
        "advanced": "सादा (ㅂ): आराम की ध्वनि (आग - Bul)।\\nतनावपूर्ण (ㅃ): तनावपूर्ण गला, तेज ध्वनि (सींग - Ppul)।\\nएस्पिरेटेड (ㅍ): हवा का तेज झोंका (घास - Pul)।"
    },
    {
        "id": 6,
        "title": "सम्मानजनक क्रियाएं (특수 높임 어휘)",
        "description": "बड़ों से बात करते समय शब्दों को खुद अपग्रेड करें।",
        "badExample": "할머니가 밥을 먹어요.",
        "goodExample": "할머니께서 진지를 드세요.",
        "tip": "विषय को सम्मानित करने के लिए क्रियाओं में '-(으)시-' जोड़ें (जैसे, Ga-da -> Ga-si-da)।",
        "advanced": "कण भी बदलते हैं: 'I/Ga' -> 'Kke-seo', 'E-ge' -> 'Kke'।\\nशब्दावली: खाना (Meok-da) -> Deu-si-da, सोना (Ja-da) -> Ju-mu-si-da।"
    },
    {
        "id": 7,
        "title": "सीधा अनुवाद (직역 का 함정)",
        "description": "अंग्रेजी मुहावरों का सीधे अनुवाद करना अप्राकृतिक लगता है।",
        "badExample": "저는 피곤해요 왜냐하면... (मैं थक गया हूँ क्योंकि...)",
        "goodExample": "일을 많이 해서 피곤해요 (क्योंकि मैंने बहुत काम किया, मैं थक गया हूँ)।",
        "tip": "'क्योंकि' के साथ वाक्य शुरू करने से बचें। वाक्य के अंदर '-a/eo-seo' जैसे कनेक्शन अंत का उपयोग करें।",
        "advanced": "कोरियाई संरचना एक वाक्य में 'कारण -> प्रभाव' है। 'Manna-seo ban-ga-wo-yo' (आपसे मिला + इसलिए + खुश)।"
    },
    {
        "id": 8,
        "title": "नकारात्मक प्रश्न (부정 의문문)",
        "description": "हाँ/नहीं के उत्तर अंग्रेजी तर्क के विपरीत हैं।",
        "badExample": "क्या यह तीखा नहीं है? -> नहीं, यह तीखा नहीं है। (अंग्रेजी तर्क)",
        "goodExample": "네, 안 매워요. (हाँ, आप सही कह रहे हैं, यह तीखा नहीं है)।",
        "tip": "यदि भ्रमित हैं, तो हमेशा हाँ/नहीं के बाद पूरा वाक्य जोड़ें।",
        "advanced": "कोरियाई 'हाँ/नहीं' *वक्ता के कथन* से सहमत/असहमत है, तथ्य से नहीं।\\nप्रश्न: 'क्या आप किमची नहीं खा सकते?'\\nउत्तर: 'हाँ' (आप सही कह रहे हैं, मैं नहीं खा सकता)।\\nउत्तर: 'नहीं' (आपका आधार गलत है, मैं खा सकता हूँ)।"
    }
]

languages_map = {
    'en': mistakes_en,
    'es': mistakes_es,
    'ja': mistakes_ja,
    'fr': mistakes_fr,
    'th': mistakes_th,
    'zh': mistakes_zh,
    'zh-TW': mistakes_zh_tw,
    'hi': mistakes_hi
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def ensure_zhtw_exists(content):
    if 'zh-TW' in content:
        return content
    
    # Find zh block
    zh_pattern = r'^\s*zh: \{'
    match = re.search(zh_pattern, content, re.MULTILINE)
    if not match:
        print("zh block not found, cannot copy for zh-TW")
        return content
        
    start_zh = match.start()
    
    # Find end of zh block
    brace_count = 1
    end_zh = -1
    for i in range(match.end(), len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_zh = i + 1
                break
                
    if end_zh == -1:
        return content
        
    zh_block = content[start_zh:end_zh]
    # Replace key
    zhtw_block = zh_block.replace('zh: {', '"zh-TW": {', 1)
    
    # Insert after zh block
    insert_str = ",\n" + zhtw_block
    
    return content[:end_zh] + insert_str + content[end_zh:]

# Ensure zh-TW exists
content = ensure_zhtw_exists(content)

new_content = content

def replace_mistakes(full_text, lang, new_mistakes):
    # Construct proper JS object string for new mistakes
    mistakes_str = "        mistakes: [\n"
    for item in new_mistakes:
        mistakes_str += "            {\n"
        mistakes_str += f'                id: {item["id"]},\n'
        mistakes_str += f'                title: "{item["title"]}",\n'
        mistakes_str += f'                description: "{item["description"]}",\n'
        mistakes_str += f'                badExample: "{item["badExample"]}",\n'
        mistakes_str += f'                goodExample: "{item["goodExample"]}",\n'
        mistakes_str += f'                tip: "{item["tip"]}",\n'
        if "advanced" in item:
            mistakes_str += f'                advanced: "{item["advanced"]}"\n'
        mistakes_str += "            },\n"
    mistakes_str = mistakes_str.rstrip(",\n") + "\n"
    mistakes_str += "        ]"

    # Use regex to find block
    # Check for quoted or unquoted key
    pattern_key = rf"^\s*(['\"]?){re.escape(lang)}\1:\s*\{{"
    lang_match = re.search(pattern_key, full_text, re.MULTILINE)
    
    if not lang_match:
        print(f"Language {lang} not found")
        return full_text
        
    lang_start = lang_match.end()
    
    # Restrict search to reasonable downstream
    # Search for mistakes
    mistakes_pattern = r'mistakes:\s*\['
    m_match = re.search(mistakes_pattern, full_text[lang_start:])
    
    if not m_match:
        print(f"Mistakes block not found for {lang}")
        return full_text
        
    start_mistakes = lang_start + m_match.start()
    
    # Find end of mistakes array
    brace_count = 0
    end_mistakes = -1
    
    for i in range(start_mistakes, len(full_text)):
        if full_text[i] == '[':
            brace_count += 1
        elif full_text[i] == ']':
            brace_count -= 1
            if brace_count == 0:
                end_mistakes = i + 1
                break
                
    if end_mistakes != -1:
        return full_text[:start_mistakes] + mistakes_str + full_text[end_mistakes:]
    
    return full_text

for lang in ['en', 'es', 'ja', 'fr', 'th', 'zh', 'zh-TW', 'hi']:
    print(f"Updating {lang}...")
    new_content = replace_mistakes(new_content, lang, languages_map[lang])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Updated guideData.ts mistakes")
