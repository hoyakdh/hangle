export interface PronunciationRule {
    id: number;
    title: string;
    description: string;
    examples: { word: string; romanized: string; pronunciation: string; meaning?: string }[];
}

export interface GrammarItem {
    id: number;
    expression: string;
    meaning: string;
    example: string;
}

export interface MistakeItem {
    id: number;
    title: string;
    description: string;
    badExample: string;
    goodExample: string;
    tip: string;
}

export const guideData = {
    en: {
        pronunciation: [
            {
                id: 1,
                title: "Final Consonants (받침)",
                description: "When ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ appear at the end of a syllable, they are all pronounced as [t] (t or d).",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "to have/be" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "flower" }
                ]
            },
            {
                id: 2,
                title: "Liaison (연음 법칙)",
                description: "When a final consonant is followed by a vowel (starts with 'ㅇ'), the consonant sound moves to the next syllable.",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "eat" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "laugh" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "to Seoul" }
                ]
            },
            {
                id: 3,
                title: "Consonant Assimilation (자음 동화)",
                description: "Certain consonant combinations change their sound for easier pronunciation. For example, 'ㅂ' followed by 'ㄴ' becomes 'ㅁ'.",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "do (formal)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "national" }
                ]
            },
            {
                id: 4,
                title: "Aspiration (격음화)",
                description: "When 'ㅎ' meets ㄱ, ㄷ, ㅂ, or ㅈ, they merge into their aspirated forms (ㅋ, ㅌ, ㅍ, ㅊ).",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "congratulate" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "good" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "Subject particle", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "Topic particle", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "Object particle", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "And (Noun connector)", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "And (Informal)", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "With", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "And", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "Also / As well", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "To / At (Direction/Time)", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "From / At (Location of action)", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "From ... Until", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "Towards / By (Means)", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "Not (Simple negation)", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "Cannot (Lack of ability)", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "Past tense", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "Future tense", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "Please (Polite request)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "Want to", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "-ing (Continuing action)", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "Can (Ability/Possibility)", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "Cannot", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "And (Sentence connector)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "But", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "Because / So", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "I will (Volition/Promise)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "Have done (Experience)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "Decided to", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "Is it okay to... (Permission)", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "You should not (Prohibition)", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "Shall we...? (Suggestion)", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "Confusing Honorifics (높임말 vs 반말)",
                description: "Using casual speech (banmal) to strangers or overly formal speech to close friends.",
                badExample: "밥 먹었어? (to a stranger)",
                goodExample: "식사 하셨어요? (to a stranger)",
                tip: "Master the ‘~yo’ (polite) ending first. When in doubt, always use polite language."
            },
            {
                id: 2,
                title: "Overusing 'I' (저는/나는)",
                description: "Adding 'I' in every sentence like in English.",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "If the subject is clear from context, omit it."
            },
            {
                id: 3,
                title: "Using English Word Order (SVO)",
                description: "Speaking in Subject-Verb-Object order instead of Korean's Subject-Object-Verb.",
                badExample: "I coffee drink.",
                goodExample: "저는 커피를 마셔요.",
                tip: "Korean is SOV. The verb always comes at the end."
            },
            {
                id: 4,
                title: "Omitting Particles (조사 생략)",
                description: "Dropping essential particles like 은/는, 이/가, 을/를.",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "Particles define the role of the word. Practice with full sentences."
            },
            {
                id: 5,
                title: "Confusing Similar Sounds",
                description: "Unable to distinguish between ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ.",
                badExample: "비 (Rain) vs 피 (Blood)",
                goodExample: "Pronounce aspirated sounds (ㅋ, ㅌ, ㅍ, ㅊ) with a burst of air.",
                tip: "Shadowing native speakers helps. Pronunciation changes the meaning entirely."
            },
            {
                id: 6,
                title: "Not Using Honorific Verbs",
                description: "Using basic verbs for elders instead of honorific ones.",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "Use special vocabulary for elders: 먹다→드시다, 자다→주무시다, 있다→계시다."
            },
            {
                id: 7,
                title: "Direct Translation",
                description: "Translating English idioms directly into Korean.",
                badExample: "I'm tired because I worked a lot.",
                goodExample: "일하느라 힘들었어요.",
                tip: "Learn Korean phrases as whole chunks rather than translating word for word."
            }
        ]
    },
    es: {
        pronunciation: [
            {
                id: 1,
                title: "Consonantes Finales (받침)",
                description: "Cuando ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ aparecen al final de una sílaba, todas se pronuncian como [t] (t o d).",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "tener/estar" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "flor" }
                ]
            },
            {
                id: 2,
                title: "Enlace (연음 법칙)",
                description: "Cuando una consonante final es seguida por una vocal (comienza con 'ㅇ'), el sonido de la consonante se mueve a la siguiente sílaba.",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "comer" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "reír" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "a Seúl" }
                ]
            },
            {
                id: 3,
                title: "Asimilación de Consonantes (자음 동화)",
                description: "Ciertas combinaciones de consonantes cambian su sonido. Por ejemplo, 'ㅂ' seguido de 'ㄴ' se convierte en 'ㅁ'.",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "hacer (formal)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "nacional" }
                ]
            },
            {
                id: 4,
                title: "Aspiración (격음화)",
                description: "Cuando 'ㅎ' se encuentra con ㄱ, ㄷ, ㅂ, o ㅈ, se fusionan en sus formas aspiradas (ㅋ, ㅌ, ㅍ, ㅊ).",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "felicitar" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "bueno" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "es [partícula de sujeto]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "es / soy [partícula de tema]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[partícula de objeto]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "y", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "y", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "con", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "y", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "también", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "a/en", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "de/en", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "desde ... hasta", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "hacia / por", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "no", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "no poder", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "pasado", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "futuro", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "por favor (petición)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "querer", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "estar ...-ando/-iendo", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "poder", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "no poder", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "y (conector)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "pero", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "porque / así que", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "Lo haré (voluntad)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "haber hecho (experiencia)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "decidir", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "¿Se puede...?", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "No se debe", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "¿Deberíamos...?", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "Confundir Honoríficos (높임말 vs 반말)",
                description: "Usar lenguaje informal (banmal) con extraños o demasiado formal con amigos cercanos.",
                badExample: "밥 먹었어? (a un extraño)",
                goodExample: "식사 하셨어요? (a un extraño)",
                tip: "Domina primero la terminación ‘~yo’ (cortés). Ante la duda, usa siempre lenguaje cortés."
            },
            {
                id: 2,
                title: "Usar demasiado 'Yo' (저는/나는)",
                description: "Añadir 'Yo' en cada frase como en español/inglés.",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "Si el sujeto está claro por el contexto, omítelo."
            },
            {
                id: 3,
                title: "Usar Orden de Palabras Inglés/Español (SVO)",
                description: "Hablar en orden Sujeto-Verbo-Objeto en lugar del Sujeto-Objeto-Verbo del coreano.",
                badExample: "Yo café bebo. (SVO directo)",
                goodExample: "저는 커피를 마셔요.",
                tip: "El coreano es SOV. El verbo siempre va al final."
            },
            {
                id: 4,
                title: "Omitir Partículas (조사 생략)",
                description: "Omitir partículas esenciales como 은/는, 이/가, 을/를.",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "Las partículas definen el rol de la palabra. Practica con oraciones completas."
            },
            {
                id: 5,
                title: "Confundir Sonidos Similares",
                description: "No distinguir entre ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ.",
                badExample: "비 (Lluvia) vs 피 (Sangre)",
                goodExample: "Pronuncia los sonidos aspirados con una explosión de aire.",
                tip: "El shadowing ayuda. La pronunciación cambia el significado totalmente."
            },
            {
                id: 6,
                title: "No Usar Verbos Honoríficos",
                description: "Usar verbos básicos para mayores en lugar de honoríficos.",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "Usa vocabulario especial para mayores: 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "Traducción Directa",
                description: "Traducir modismos directamente al coreano.",
                badExample: "Estoy cansado porque trabajé mucho (traducido literal).",
                goodExample: "일하느라 힘들었어요.",
                tip: "Aprende frases coreanas como bloques completos."
            }
        ]
    },
    ja: {
        pronunciation: [
            {
                id: 1,
                title: "パッチムの発音 (받침)",
                description: "ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎが音節の最後に来るときは、すべて [t] (tまたはd) の音になります。",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "ある/いる" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "花" }
                ]
            },
            {
                id: 2,
                title: "連音化 (연음 법칙)",
                description: "パッチムの後ろに母音が来る（'ㅇ'で始まる）場合、パッチムの音が次の音節に移ります。",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "食べます" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "笑います" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "ソウルへ" }
                ]
            },
            {
                id: 3,
                title: "鼻音化 (자음 동화)",
                description: "特定の子音の組み合わせで音が変わります。例えば、'ㅂ' の後ろに 'ㄴ' が来ると 'ㅁ' になります。",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "します" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "国立" }
                ]
            },
            {
                id: 4,
                title: "激音化 (격음화)",
                description: "‘ㅎ’ が ㄱ, ㄷ, ㅂ, ㅈ と出会うと、激音 (ㅋ, ㅌ, ㅍ, ㅊ) に変わります。",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "祝う" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "良い" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "〜が [主格助詞]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "〜は [主題助詞]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "〜を [目的格助詞]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "〜と", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "〜と", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "〜と (一緒に)", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "〜と", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "〜も", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "〜に/〜へ", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "〜で/〜から", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "〜から 〜まで", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "〜へ / 〜で", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "〜ない (否定)", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "〜できない (不可能)", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "〜ました (過去形)", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "〜するつもりです (未来)", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "〜してください", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "〜したいです", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "〜しています (進行形)", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "〜できます (可能)", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "〜できません (不可能)", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "〜て (連結)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "〜ですが (逆接)", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "〜ので / 〜して", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "〜します (意志)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "〜したことがあります (経験)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "〜することにしました", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "〜してもいいですか", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "〜してはいけません", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "〜しましょうか？", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "敬語とタメ口の混同 (높임말 vs 반말)",
                description: "初対面の人にタメ口を使ったり、親しい友人に過度に丁寧な言葉を使うこと。",
                badExample: "밥 먹었어? (初対面の人に)",
                goodExample: "식사 하셨어요? (初対面の人に)",
                tip: "まずは‘~요’（です・ます）体をマスターしましょう。迷ったら敬語を使うのが無難です。"
            },
            {
                id: 2,
                title: "「私」の使いすぎ (저는/나는)",
                description: "英語のように文ごとに主語を入れること。",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "文脈で主語が明らかな場合は省略します。"
            },
            {
                id: 3,
                title: "語順の間違い (SVO)",
                description: "韓国語のSOV（主語-目的語-動詞）ではなく、英語のSVO（主語-動詞-目的語）の順で話すこと。",
                badExample: "I coffee drink. (直訳)",
                goodExample: "저는 커피를 마셔요. (私はコーヒーを飲みます)",
                tip: "韓国語は動詞が最後に来ます。"
            },
            {
                id: 4,
                title: "助詞の省略 (조사 생략)",
                description: "은/는, 이/가, 을/를 などの重要な助詞を省略すること。",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "助詞は単語の役割を決めます。完全な文で練習しましょう。"
            },
            {
                id: 5,
                title: "似た音の混同",
                description: "ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ の区別ができないこと。",
                badExample: "비 (雨) vs 피 (血)",
                goodExample: "激音 (ㅋ, ㅌ, ㅍ, ㅊ) は強く息を出して発音します。",
                tip: "ネイティブの音声をシャドーイングしましょう。発音で意味が完全に変わります。"
            },
            {
                id: 6,
                title: "尊敬語動詞の不使用",
                description: "目上の人に基本的な動詞を使ってしまうこと。",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "目上の人には特別な語彙を使います: 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "直訳",
                description: "母国語の慣用句をそのまま韓国語に直訳すること。",
                badExample: "I'm tired because I worked a lot.の直訳",
                goodExample: "일하느라 힘들었어요.",
                tip: "単語ごとではなく、韓国語のフレーズ全体を覚えましょう。"
            }
        ]
    },
    fr: {
        pronunciation: [
            {
                id: 1,
                title: "Consonnes Finales (받침)",
                description: "Lorsque ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ apparaissent à la fin d'une syllabe, elles se prononcent toutes comme [t] (t ou d).",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "avoir/être" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "fleur" }
                ]
            },
            {
                id: 2,
                title: "Liaison (연음 법칙)",
                description: "Lorsqu'une consonne finale est suivie d'une voyelle (commence par 'ㅇ'), le son de la consonne se déplace vers la syllabe suivante.",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "manger" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "rire" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "à Séoul" }
                ]
            },
            {
                id: 3,
                title: "Assimilation des Consonnes (자음 동화)",
                description: "Certaines combinaisons de consonnes changent de son pour faciliter la prononciation. Par exemple, 'ㅂ' suivi de 'ㄴ' devient 'ㅁ'.",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "faire (formel)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "national" }
                ]
            },
            {
                id: 4,
                title: "Aspiration (격음화)",
                description: "Lorsque 'ㅎ' rencontre ㄱ, ㄷ, ㅂ ou ㅈ, elles fusionnent en leurs formes aspirées (ㅋ, ㅌ, ㅍ, ㅊ).",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "féliciter" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "bon" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "est [particule sujet]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "est / suis [particule de thème]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[particule d'objet]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "et", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "et", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "avec", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "et", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "aussi", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "à/en", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "de/à", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "de ... à", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "vers / par", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "ne ... pas", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "ne pas pouvoir", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "passé", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "futur", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "s'il vous plaît (demande polie)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "vouloir", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "être en train de", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "pouvoir", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "ne pas pouvoir", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "et (connecteur)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "mais", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "parce que / donc", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "je vais (volonté)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "avoir fait (expérience)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "avoir décidé de", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "Est-ce que je peux...", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "Vous ne devriez pas", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "On ... ?", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "Confondre les Honorifiques (높임말 vs 반말)",
                description: "Utiliser un langage informel (banmal) avec des inconnus ou trop formel avec des amis proches.",
                badExample: "밥 먹었어? (à un inconnu)",
                goodExample: "식사 하셨어요? (à un inconnu)",
                tip: "Maîtrisez d'abord la terminaison ‘~yo’ (polie). En cas de doute, utilisez toujours le langage poli."
            },
            {
                id: 2,
                title: "Surutilisation de 'Je' (저는/나는)",
                description: "Ajouter 'Je' dans chaque phrase comme en français/anglais.",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "Si le sujet est clair d'après le contexte, omettez-le."
            },
            {
                id: 3,
                title: "Utiliser l'Ordre des Mots Français (SVO)",
                description: "Parler dans l'ordre Sujet-Verbe-Objet au lieu de Sujet-Objet-Verbe du coréen.",
                badExample: "Je café bois. (SVO direct)",
                goodExample: "저는 커피를 마셔요.",
                tip: "Le coréen est SOV. Le verbe vient toujours à la fin."
            },
            {
                id: 4,
                title: "Omettre les Particules (조사 생략)",
                description: "Omettre des particules essentielles comme 은/는, 이/가, 을/를.",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "Les particules définissent le rôle du mot. Entraînez-vous avec des phrases complètes."
            },
            {
                id: 5,
                title: "Confondre des Sons Similaires",
                description: "Incapable de distinguer entre ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ.",
                badExample: "비 (Pluie) vs 피 (Sang)",
                goodExample: "Prononcez les sons aspirés (ㅋ, ㅌ, ㅍ, ㅊ) avec une explosion d'air.",
                tip: "Le shadowing (répétition) aide. La prononciation change complètement le sens."
            },
            {
                id: 6,
                title: "Ne pas Utiliser de Verbes Honorifiques",
                description: "Utiliser des verbes basiques pour les aînés au lieu des honorifiques.",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "Utilisez un vocabulaire spécial pour les aînés : 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "Traduction Littérale",
                description: "Traduire des expressions idiomatiques directement en coréen.",
                badExample: "Je suis fatigué parce que j'ai beaucoup travaillé (traduction littérale).",
                goodExample: "일하느라 힘들었어요.",
                tip: "Apprenez les phrases coréennes comme des blocs entiers."
            }
        ]
    },
    th: {
        pronunciation: [
            {
                id: 1,
                title: "ตัวสะกด (받침)",
                description: "เมื่อ ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ ปรากฏที่ท้ายพยางค์ ทั้งหมดจะออกเสียงเป็น [t] (แม่กด).",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "มี/อยู่" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "ดอกไม้" }
                ]
            },
            {
                id: 2,
                title: "การโยงเสียง (연음 법칙)",
                description: "เมื่อตัวสะกดตามด้วยสระ (ขึ้นต้นด้วย 'ㅇ') เสียงตัวสะกดจะย้ายไปพยางค์ถัดไป",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "กิน" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "หัวเราะ" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "ไปโซล" }
                ]
            },
            {
                id: 3,
                title: "การกลมกลืนเสียง (자음 동화)",
                description: "พยัญชนะบางคู่จะเปลี่ยนเสียงเพื่อให้ลิ้นออกเสียงง่ายขึ้น เช่น 'ㅂ' ตามด้วย 'ㄴ' จะกลายเป็น 'ㅁ'",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "ทำ (ทางการ)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "แห่งชาติ" }
                ]
            },
            {
                id: 4,
                title: "เสียงพ่นลม (격음화)",
                description: "เมื่อ 'ㅎ' เจอกับ ㄱ, ㄷ, ㅂ, หรือ ㅈ จะรวมกันกลายเป็นเสียงพ่นลม (ㅋ, ㅌ, ㅍ, ㅊ)",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "แสดงความยินดี" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "ดี" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "เป็น [คำชี้ประธาน]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "เป็น / คือ [คำชี้หัวข้อ]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[คำชี้กรรม]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "และ / กับ", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "และ / กับ", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "กับ", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "และ / กับ", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "ด้วย / ก็", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "ที่ / ไปยัง", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "จาก / ที่", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "ตั้งแต่ ... ถึง", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "ไปทาง / โดย", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "ไม่", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "ไม่สามารถ / ไม่ได้", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "อดีตกาล", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "อนาคตกาล", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "กรุณา (ขอร้องแบบสุภาพ)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "อยาก", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "กำลัง...อยู่", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "สามารถ...ได้", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "ไม่สามารถ...ได้", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "และ / แล้วก็ (คำเชื่อม)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "แต่", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "เพราะว่า / ดังนั้น", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "จะ (ความตั้งใจ)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "เคย (ประสบการณ์)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "ตัดสินใจว่าจะ", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "...ได้ไหม? (ขออนุญาต)", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "ห้าม / ไม่ควร", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "...กันไหม?", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "สับสนเรื่องระดับภาษา (สูง/ต่ำ)",
                description: "ใช้คำพูดแบบเป็นกันเอง (พันมัล) กับคนแปลกหน้า หรือทางการเกินไปกับเพื่อนสนิท",
                badExample: "밥 먹었어? (กับคนแปลกหน้า)",
                goodExample: "식사 하셨어요? (กับคนแปลกหน้า)",
                tip: "ฝึกใช้คำลงท้าย ‘~โย’ (สุภาพ) ให้คล่องก่อน ถ้าไม่แน่ใจให้ใช้ภาษาสุภาพไว้ก่อน"
            },
            {
                id: 2,
                title: "ใช้คำว่า 'ฉัน/ผม' มากเกินไป (저는/나는)",
                description: "ใส่คำสรรพนามทุกประโยคเหมือนในภาษาไทยหรืออังกฤษ",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "ถ้าบริบทชัดเจนอยู่แล้ว ไม่ต้องใส่ประธาน"
            },
            {
                id: 3,
                title: "เรียงประโยคผิด (SVO)",
                description: "พูดเรียงแบบ ประธาน-กริยา-กรรม แทนที่จะเป็น ประธาน-กรรม-กริยา แบบเกาหลี",
                badExample: "I coffee drink. (แปลตรงตัว)",
                goodExample: "저는 커피를 마셔요.",
                tip: "ภาษาเกาหลี วางกริยาไว้ท้ายประโยคเสมอ"
            },
            {
                id: 4,
                title: "ละเลยคำช่วย (조사 생략)",
                description: "ตัดคำช่วยสำคัญๆ เช่น 은/는, 이/가, 을/를 ออก",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "คำช่วยบอกหน้าที่ของคำ ฝึกพูดเป็นประโยคเต็มๆ"
            },
            {
                id: 5,
                title: "สับสนเสียงที่คล้ายกัน",
                description: "แยกแยะไม่ออกระหว่าง ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ",
                badExample: "비 (ฝน) vs 피 (เลือด)",
                goodExample: "ออกเสียงพยัญชนะเสียงหนัก (ㅋ, ㅌ, ㅍ, ㅊ) โดยพ่นลมออกมา",
                tip: "ฝึกพูดตามเจ้าของภาษา (Shadowing) ช่วยได้มาก การออกเสียงผิดความหมายเปลี่ยนทันที"
            },
            {
                id: 6,
                title: "ไม่ใช้คำกริยารูปยกย่อง",
                description: "ใช้คำกริยาธรรมดากับผู้ใหญ่แทนที่จะใช้คำราชาศัพท์/ยกย่อง",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "ท่องคำศัพท์พิเศษสำหรับผู้ใหญ่: 먹다→드시다, 자다→주무시다"
            },
            {
                id: 7,
                title: "แปลตรงตัว",
                description: "แปลสำนวนภาษาแม่ตรงๆ เป็นภาษาเกาหลี",
                badExample: "ฉันเหนื่อยเพราะทำงานหนัก (แปลทีละคำ)",
                goodExample: "일하느라 힘들었어요.",
                tip: "เรียนรู้วลีภาษาเกาหลีเป็นชุดคำ (Chunks) แทนที่จะแปลทีละคำ"
            }
        ]
    },
    zh: {
        pronunciation: [
            {
                id: 1,
                title: "收音 (받침)",
                description: "当 ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ 出现在音节末尾时，都发 [t] (t 或 d) 的音。",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "有/在" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "花" }
                ]
            },
            {
                id: 2,
                title: "连音现象 (연음 법칙)",
                description: "当收音后面跟着以元音开头的音节（以 'ㅇ' 开头）时，收音会移到下一个音节发音。",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "吃" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "笑" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "去首尔" }
                ]
            },
            {
                id: 3,
                title: "辅音同化 (자음 동화)",
                description: "某些辅音组合变音以便于发音。例如，'ㅂ' 后面跟着 'ㄴ' 时变成 'ㅁ'。",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "做 (正式敬语)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "国立" }
                ]
            },
            {
                id: 4,
                title: "送气化 (격음화)",
                description: "当 'ㅎ' 遇到 ㄱ, ㄷ, ㅂ, 或 ㅈ 时，它们合并成相应的送气音 (ㅋ, ㅌ, ㅍ, ㅊ)。",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "祝贺" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "好" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "[主格助词]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "[主题助词]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[宾格助词]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "和 / 跟", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "和 / 跟", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "和...一起", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "和 / 跟", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "也", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "在 / 去 (时间/地点)", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "从 / 在 (地点)", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "从...到...", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "往 / 用", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "不 / 没", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "不能 / 不会", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "了 / 过 (过去时)", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "要 / 会 (将来时)", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "请... (敬语)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "想...", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "正在... (进行时)", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "能 / 会", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "不能 / 不会", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "并 / 然后 (连接词)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "但是", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "因为 / 所以", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "我来... (意愿)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "...过 (经验)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "决定...", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "可以...吗？", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "不可以...", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "...吗？ (提议/推测)", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "混淆敬语 (높임말 vs 반말)",
                description: "对陌生人说半语，或者对亲密的朋友用过于正式的敬语。",
                badExample: "밥 먹었어? (对陌生人)",
                goodExample: "식사 하셨어요? (对陌生人)",
                tip: "先掌握 ‘~yo’ (敬语) 结尾。不确定时，始终使用敬语。"
            },
            {
                id: 2,
                title: "过度使用'我' (저는/나는)",
                description: "像英语一样在每个句子里都加'我'。",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "如果语境清楚，省略主语。"
            },
            {
                id: 3,
                title: "使用中文语序 (SVO)",
                description: "使用主语-动词-宾语的顺序，而不是韩语的主语-宾语-动词顺序。",
                badExample: "I coffee drink. (直译)",
                goodExample: "저는 커피를 마셔요.",
                tip: "韩语是SOV结构。动词总是放在最后。"
            },
            {
                id: 4,
                title: "省略助词 (조사 생략)",
                description: "省略了 은/는, 이/가, 을/를 等重要助词。",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "助词决定词的作用。请用完整的句子练习。"
            },
            {
                id: 5,
                title: "混淆相似发音",
                description: "无法区分 ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ。",
                badExample: "비 (雨) vs 피 (血)",
                goodExample: "送气音 (ㅋ, ㅌ, ㅍ, ㅊ) 发音时要有爆破气流。",
                tip: "跟读母语者的发音很有帮助。发音不同，意思完全不同。"
            },
            {
                id: 6,
                title: "不使用敬语动词",
                description: "对长辈使用普通动词而不是敬语动词。",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "记住长辈专用的词汇: 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "直译",
                description: "直接将母语习语翻译成韩语。",
                badExample: "为了工作很累 (直译)。",
                goodExample: "일하느라 힘들었어요.",
                tip: "学习韩语短语块，而不是逐字翻译。"
            }
        ]
    },
    'zh-TW': {
        pronunciation: [
            {
                id: 1,
                title: "收音 (받침)",
                description: "當 ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ 出現在音節末尾時，都發 [t] (t 或 d) 的音。",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "有/在" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "花" },
                ]
            },
            {
                id: 2,
                title: "連音現象 (연음 법칙)",
                description: "當收音後面跟著以母音開頭的音節（以 'ㅇ' 開頭）時，收音會移到下一個音節發音。",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "吃" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "笑" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "去首爾" },
                ]
            },
            {
                id: 3,
                title: "輔音同化 (자음 동화)",
                description: "某些輔音組合變音以便於發音。例如，'ㅂ' 後面跟著 'ㄴ' 時變成 'ㅁ'。",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "做 (正式敬語)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "國立" },
                ]
            },
            {
                id: 4,
                title: "送氣化 (격음화)",
                description: "當 'ㅎ' 遇到 ㄱ, ㄷ, ㅂ, 或 ㅈ 時，它們合併成相應的送氣音 (ㅋ, ㅌ, ㅍ, ㅊ)。",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "祝賀" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "好" },
                ]
            },
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "[主格助詞]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "[主題助詞]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[賓格助詞]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "和 / 跟", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "和 / 跟", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "和...一起", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "和 / 跟", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "也", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "在 / 去 (時間/地點)", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "從 / 在 (地點)", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "從...到...", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "往 / 用", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "不 / 沒", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "不能 / 不會", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "了 / 過 (過去式)", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "要 / 會 (未來式)", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "請... (敬語)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "想...", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "正在... (進行式)", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "能 / 會", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "不能 / 不會", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "並 / 然後 (連接詞)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "但是", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "因為 / 所以", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "我來... (意願)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "...過 (經驗)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "決定...", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "可以...嗎？", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "不可以...", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "...嗎？ (提議/推測)", example: "같이 영화 볼**까요**?" },
        ],
        mistakes: [
            {
                id: 1,
                title: "混淆敬語 (높임말 vs 반말)",
                description: "對陌生人說半語，或者對親密的朋友用過於正式的敬語。",
                badExample: "밥 먹었어? (對陌生人)",
                goodExample: "식사 하셨어요? (對陌生人)",
                tip: "先掌握 ‘~yo’ (敬語) 結尾。不確定時，始終使用敬語。"
            },
            {
                id: 2,
                title: "過度使用'我' (저는/나는)",
                description: "像英語一樣在每個句子裡都加'我'。",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "如果語境清楚，省略主語。"
            },
            {
                id: 3,
                title: "使用中文語序 (SVO)",
                description: "使用主語-動詞-賓語的順序，而不是韓語的主語-賓語-動詞順序。",
                badExample: "I coffee drink. (直譯)",
                goodExample: "저는 커피를 마셔요.",
                tip: "韓語是SOV結構。動詞總是放在最後。"
            },
            {
                id: 4,
                title: "省略助詞 (조사 생략)",
                description: "省略了 은/는, 이/가, 을/를 等重要助詞。",
                badExample: "나 커피 좋아해.",
                goodExample: "",
                tip: "助詞決定詞的作用。請用完整的句子練習。"
            },
            {
                id: 5,
                title: "混淆相似發音",
                description: "無法區分 ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ。",
                badExample: "비 (雨) vs 피 (血)",
                goodExample: "送氣音 (ㅋ, ㅌ, ㅍ, ㅊ) 發音時要有爆破氣流。",
                tip: "跟讀母語者的發音很有幫助。發音不同，意思完全不同。"
            },
            {
                id: 6,
                title: "不使用敬語動詞",
                description: "對長輩使用普通動詞而不是敬語動詞。",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "記住長輩專用的詞彙: 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "直譯",
                description: "翻譯母語成語直接成韓語。",
                badExample: "I'm tired because I worked a lot. (直譯)",
                goodExample: "일하느라 힘들었어요.",
                tip: "學習韓語片語，而不是逐字翻譯。"
            },
        ]
    },
    hi: {
        pronunciation: [
            {
                id: 1,
                title: "अंतिम व्यंजन (받침)",
                description: "जब ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ किसी शब्दांश के अंत में आते हैं, तो उन सभी का उच्चारण [t] (t या d) के रूप में किया जाता है।",
                examples: [
                    { word: "있다", romanized: "itda", pronunciation: "[it-tta]", meaning: "होना" },
                    { word: "꽃", romanized: "kkot", pronunciation: "[kkot]", meaning: "फूल" }
                ]
            },
            {
                id: 2,
                title: "संपर्क (연음 법칙)",
                description: "जब एक अंतिम व्यंजन के बाद एक स्वर आता है ('ㅇ' से शुरू होता है), तो व्यंजन ध्वनि अगले शब्दांश में चली जाती है।",
                examples: [
                    { word: "먹어요", romanized: "meogeoyo", pronunciation: "[머거요]", meaning: "खाओ" },
                    { word: "웃어요", romanized: "useoyo", pronunciation: "[우서요]", meaning: "हंसो" },
                    { word: "서울에", romanized: "seoure", pronunciation: "[서우레]", meaning: "सियोल को" }
                ]
            },
            {
                id: 3,
                title: "व्यंजन आत्मसात (자음 동화)",
                description: "कुछ व्यंजन संयोजन आसान उच्चारण के लिए अपनी ध्वनि बदलते हैं। उदाहरण के लिए, 'ㅂ' के बाद 'ㄴ' आने पर 'ㅁ' बन जाता है।",
                examples: [
                    { word: "합니다", romanized: "hamnida", pronunciation: "[ham-ni-da]", meaning: "करना (औपचारिक)" },
                    { word: "국립", romanized: "gungnip", pronunciation: "[궁닙]", meaning: "राष्ट्रीय" }
                ]
            },
            {
                id: 4,
                title: "महाप्राणता (격음화)",
                description: "जब 'ㅎ', ㄱ, ㄷ, ㅂ, या ㅈ से मिलता है, तो वे अपने महाप्राण रूपों (ㅋ, ㅌ, ㅍ, ㅊ) में विलीन हो जाते हैं।",
                examples: [
                    { word: "축하하다", romanized: "chukahada", pronunciation: "[추카하다]", meaning: "बधाई देना" },
                    { word: "좋다", romanized: "jota", pronunciation: "[조타]", meaning: "अच्छा" }
                ]
            }
        ],
        grammar: [
            { id: 1, expression: "이/가", meaning: "है [विषय कण]", example: "이름**이** 뭐예요?" },
            { id: 2, expression: "은/는", meaning: "है / हूँ [विषय कण]", example: "저**는** 미국 사람이에요." },
            { id: 3, expression: "을/를", meaning: "[वस्तु कण]", example: "책**을** 읽어요." },
            { id: 4, expression: "와/과", meaning: "और", example: "소설책**과** 교과서를 가져왔어요." },
            { id: 5, expression: "(이)랑", meaning: "और", example: "빵**이랑** 우유를 먹어요." },
            { id: 6, expression: "(이)랑", meaning: "साथ", example: "친구**랑** 같이 왔어요." },
            { id: 7, expression: "하고", meaning: "और", example: "양념 치킨**하고** 맥주 주세요." },
            { id: 8, expression: "도", meaning: "भी", example: "내일**도** 오늘도 비가 와요." },
            { id: 9, expression: "에", meaning: "को / पर", example: "남대문 시장**에** 가고 싶어요." },
            { id: 10, expression: "에서", meaning: "से / में", example: "공항**에서** 지하철 타고 왔어요." },
            { id: 11, expression: "부터 ~까지", meaning: "से ... तक", example: "점심시간은 12시**부터** 1시**까지**예요." },
            { id: 12, expression: "(으)로", meaning: "की ओर / द्वारा", example: "오른쪽**으로** 가세요." },
            { id: 13, expression: "안", meaning: "नहीं", example: "저는 김치를 **안** 먹어요." },
            { id: 14, expression: "못", meaning: "नहीं सकता", example: "매운 음식을 **못** 먹어요." },
            { id: 15, expression: "았/었어", meaning: "भूतकाल", example: "어제 친구를 만**났어요**." },
            { id: 16, expression: "(으)ㄹ 거예요", meaning: "भविष्य काल", example: "내일 한국에 **갈 거예요**." },
            { id: 17, expression: "(으)세요", meaning: "कृपया (विनम्र अनुरोध)", example: "여기에 **앉으세요**." },
            { id: 18, expression: "고 싶어요", meaning: "चाहना", example: "피자가 먹**고 싶어요**." },
            { id: 19, expression: "고 있어요", meaning: "-ing (निरंतर क्रिया)", example: "지금 공부하**고 있어요**." },
            { id: 20, expression: "(으)ㄹ 수 있어요", meaning: "सकना", example: "한국어를 할 **수 있어요**." },
            { id: 21, expression: "(으)ㄹ 수 없어요", meaning: "नहीं सकना", example: "수영할 **수 없어요**." },
            { id: 22, expression: "고", meaning: "और (योजक)", example: "밥을 먹**고** 커피를 마셔요." },
            { id: 23, expression: "지만", meaning: "लेकिन", example: "한국어는 어렵**지만** 재미있어요." },
            { id: 24, expression: "아/어서", meaning: "क्योंकि / इसलिए", example: "배가 아파**서** 병원에 갔어요." },
            { id: 25, expression: "(으)ㄹ게요", meaning: "मैं करूँगा (इच्छा)", example: "제가 할**게요**." },
            { id: 26, expression: "(으)ㄴ 적이 있어요", meaning: "किया है (अनुभव)", example: "제주도에 간 **적이 있어요**." },
            { id: 27, expression: "기로 했어요", meaning: "तय किया", example: "내일 친구를 만나**기로 했어요**." },
            { id: 28, expression: "아/어도 돼요", meaning: "क्या यह ठीक है...", example: "여기 앉**아도 돼요**?" },
            { id: 29, expression: "(으)면 안 돼요", meaning: "आपको नहीं करना चाहिए", example: "여기서 담배를 피우**면 안 돼요**." },
            { id: 30, expression: "(으)ㄹ까요?", meaning: "क्या हम...?", example: "같이 영화 볼**까요**?" }
        ],
        mistakes: [
            {
                id: 1,
                title: "सम्मानसूचक भ्रम (높임말 vs 반말)",
                description: "अजनबियों के साथ अनौपचारिक भाषा या करीबी दोस्तों के साथ अत्यधिक औपचारिक भाषा का उपयोग करना।",
                badExample: "밥 먹었어? (अजनबी से)",
                goodExample: "식사 하셨어요? (अजनबी से)",
                tip: "पहले '~yo' (विनम्र) अंत में महारत हासिल करें। जब संदेह हो, तो विनम्र रहें।"
            },
            {
                id: 2,
                title: "'मैं' का अति प्रयोग (저는/나는)",
                description: "हर वाक्य में 'मैं' जोड़ना जैसा कि अंग्रेजी में होता है।",
                badExample: "저는 김치를 좋아해요. 저는 불고기도 좋아해요.",
                goodExample: "김치를 좋아해요. 불고기도 좋아해요.",
                tip: "संदर्भ स्पष्ट होने पर विषय को छोड़ दें।"
            },
            {
                id: 3,
                title: "शब्द क्रम (SVO)",
                description: "कोरियाई के विषय-वस्तु-क्रिया क्रम के बजाय विषय-क्रिया-वस्तु क्रम का उपयोग करना।",
                badExample: "I coffee drink. (शाब्दिक अनुवाद)",
                goodExample: "저는 커피를 마셔요.",
                tip: "कोरियाई SOV है। क्रिया हमेशा अंत में आती है।"
            },
            {
                id: 4,
                title: "कण छोड़ना (조사 생략)",
                description: "은/는, 이/가, 을/를 जैसे महत्वपूर्ण कण को छोड़ना।",
                badExample: "나 커피 좋아해.",
                goodExample: "저는 커피를 좋아해요.",
                tip: "कण शब्द की भूमिका को परिभाषित करते हैं। पूर्ण वाक्यों के साथ अभ्यास करें।"
            },
            {
                id: 5,
                title: "समान ध्वनियों में भ्रम",
                description: "ㅂ/ㅍ, ㅈ/ㅊ, ㄱ/ㅋ के बीच अंतर नहीं करना।",
                badExample: "비 (बारिश) vs 피 (खून)",
                goodExample: "महाप्राण ध्वनियों (ㅋ, ㅌ, ㅍ, ㅊ) में हवा का एक झटका होना चाहिए।",
                tip: "मूल वक्ताओं की नकल करना मदद करता है। संदर्भ भी महत्वपूर्ण है।"
            },
            {
                id: 6,
                title: "सम्मानसूचक क्रियाओं का उपयोग न करना",
                description: "बड़ों के लिए सम्मानसूचक क्रियाओं के बजाय नियमित क्रियाओं का उपयोग करना।",
                badExample: "할머니가 밥을 먹어요.",
                goodExample: "할머니께서 진지를 드세요.",
                tip: "विशेष शब्दावली याद रखें: 먹다→드시다, 자다→주무시다."
            },
            {
                id: 7,
                title: "शाब्दिक अनुवाद",
                description: "मुहावरों का अपनी मूल भाषा से सीधे अनुवाद करना।",
                badExample: "काम के लिए बहुत थक गया (शाब्दिक)।",
                goodExample: "일하느라 힘들었어요.",
                tip: "कोरियाई वाक्यांशों को सीखें, न कि केवल शब्दों का अनुवाद करें।"
            }
        ]
    }
};
