export interface ConversationItem {
    id: number;
    category: 'airport' | 'taxi' | 'bus' | 'subway' | 'restaurant' | 'hotel' | 'tourist' | 'daily' | 'emergency' | 'hospital';
    question: {
        korean: string;
        romanized: string;
        english: string;
        japanese: string;
        spanish: string;
        french: string;
        thai: string;
        chinese: string;
        hindi: string;
        traditional_chinese: string;
    };
    answers: {
        korean: string;
        romanized: string;
        english: string;
        japanese: string;
        spanish: string;
        french: string;
        thai: string;
        chinese: string;
        hindi: string;
        traditional_chinese: string;
    }[];
}

export const conversationData: ConversationItem[] = [
    // --- Airport ---
    {
        id: 1001,
        category: 'airport',
        question: {
            korean: '체크인 카운터가 어디에 있나요?',
            romanized: 'Chekeuin kaunteoga eodie innayo?',
            english: 'Where is the check-in counter?',
            japanese: 'チェックインカウンターはどこですか？',
            spanish: '¿Dónde está el mostrador de facturación?',
            french: 'Où est le comptoir d\'enregistrement ?',
            thai: 'เคาน์เตอร์เช็คอินอยู่ที่ไหนครับ/คะ?',
            chinese: '值机柜台在哪儿？',
            hindi: 'चेक-इन काउंटर कहाँ है?',
            traditional_chinese: '值機櫃檯在哪兒？',
        },
        answers: [
            {
                korean: '저쪽 3번 게이트 앞에 있습니다.',
                romanized: 'Jeojjok sambeon geiteu ape itseumnida.',
                english: 'It is in front of Gate 3 over there.',
                japanese: 'あちらの3番ゲートの前にあります。',
                spanish: 'Está frente a la puerta 3 de allí.',
                french: 'Il est devant la porte 3, là-bas.',
                thai: 'อยู่หน้าประตู 3 ตรงโน้นครับ/ค่ะ',
                chinese: '在那边3号登机口前面。',
                hindi: 'वह वहां गेट 3 के सामने है।',
                traditional_chinese: '那邊3號登機口前面。'
            },
            {
                korean: 'D구역으로 가시면 됩니다.',
                romanized: 'Di-guyeog-euro gasimyeon doemnida.',
                english: 'You can go to Zone D.',
                japanese: 'Dゾーンに行けばいいです。',
                spanish: 'Puede ir a la Zona D.',
                french: 'Vous pouvez aller dans la zone D.',
                thai: 'ไปที่โซน D ได้เลยครับ/ค่ะ',
                chinese: '去D区就可以了。',
                hindi: 'आप ज़ोन D में जा सकते हैं।',
                traditional_chinese: '去D區就可以了。'
            }
        ]
    },
    {
        id: 1002,
        category: 'airport',
        question: {
            korean: '수하물을 얼마나 부칠 수 있나요?',
            romanized: 'Suhamureul eolmana buchil su innayo?',
            english: 'How much luggage can I check in?',
            japanese: '荷物はどれくらい預けられますか？',
            spanish: '¿Cuánto equipaje puedo facturar?',
            french: 'Combien de bagages puis-je enregistrer ?',
            thai: 'โหลดกระเป๋าได้เท่าไหร่ครับ/คะ?',
            chinese: '可以托运多少行李？',
            hindi: 'मैं कितना सामान चेक-इन कर सकता हूँ?',
            traditional_chinese: '可以託運多少行李？',
        },
        answers: [
            {
                korean: '한 사람당 23kg 가방 두 개까지 가능합니다.',
                romanized: 'Han saramdang isipsam-kilogeuraem gabang du gaekkaji ganeunghamnida.',
                english: 'You can check up to two 23kg bags per person.',
                japanese: 'お一人様23kgのバッグ2個まで可能です。',
                spanish: 'Puede facturar hasta dos maletas de 23 kg por persona.',
                french: 'Vous pouvez enregistrer jusqu\'à deux sacs de 23 kg par personne.',
                thai: 'ได้คนละ 2 ใบ ใบละไม่เกิน 23 กิโลกรัมครับ/ค่ะ',
                chinese: '这是每人两件23公斤的行李。',
                hindi: 'आप प्रति व्यक्ति 23 किग्रा के दो बैग चेक कर सकते हैं।',
                traditional_chinese: '每人兩件23公斤的行李。'
            },
            {
                korean: '이코노미석은 1개만 무료입니다.',
                romanized: 'Ikonomiseogeun han-gaeman muryoimnida.',
                english: 'Economy class allows only one free bag.',
                japanese: 'エコノミークラスは1つだけ無料です。',
                spanish: 'La clase económica solo permite una maleta gratis.',
                french: 'La classe économique n\'autorise qu\'un seul bagage gratuit.',
                thai: 'ชั้นประหยัดโหลดฟรีได้ 1 ใบครับ/ค่ะ',
                chinese: '经济舱只能免费托运一件。',
                hindi: 'इकोनॉमी क्लास में केवल एक मुफ्त बैग की अनुमति है।',
                traditional_chinese: '經濟艙只能免費託運一件。'
            }
        ]
    },
    // --- Taxi ---
    {
        id: 2001,
        category: 'taxi',
        question: {
            korean: '시청까지 가는데 얼마나 걸리나요?',
            romanized: 'Sicheongkkaji ganeunde eolmana geollinayo?',
            english: 'How long does it take to get to City Hall?',
            japanese: '市庁までどれくらいかかりますか？',
            spanish: '¿Cuánto tiempo se tarda en llegar al Ayuntamiento?',
            french: 'Combien de temps faut-il pour aller à l\'Hôtel de Ville ?',
            thai: 'ไปศาลากลางใช้เวลานานเท่าไหร่ครับ/คะ?',
            chinese: '去市厅需要多长时间？',
            hindi: 'सिटी हॉल जाने में कितना समय लगता है?',
            traditional_chinese: '去市廳需要多長時間？',
        },
        answers: [
            {
                korean: '약 30분 정도 걸릴 것 같습니다.',
                romanized: 'Yak samsip-bun jeongdo geollil geot gatseumnida.',
                english: 'It will take about 30 minutes.',
                japanese: '約30分ほどかかると思います。',
                spanish: 'Tardará unos 30 minutos.',
                french: 'Cela prendra environ 30 minutes.',
                thai: 'น่าจะใช้เวลาประมาณ 30 นาทีครับ/ค่ะ',
                chinese: '大约需要30分钟。',
                hindi: 'इसमें लगभग 30 मिनट लगेंगे।',
                traditional_chinese: '大約需要30分鐘。'
            },
            {
                korean: '지금 차가 막혀서 1시간은 걸려요.',
                romanized: 'Jigeum chaga makyeoseo han-siganeun geollyeoyo.',
                english: 'It takes an hour because traffic is heavy right now.',
                japanese: '今道が混んでいるので1時間はかかります。',
                spanish: 'Tarda una hora porque hay mucho tráfico ahora.',
                french: 'Cela prend une heure car la circulation est dense en ce moment.',
                thai: 'ตอนนี้รถติด น่าจะใช้เวลา 1 ชั่วโมงครับ/ค่ะ',
                chinese: '现在堵车，要花1个小时。',
                hindi: 'अभी ट्रैफिक भारी होने के कारण एक घंटा लगता है।',
                traditional_chinese: '現在塞車，要花1個小時。'
            }
        ]
    },
    {
        id: 2002,
        category: 'taxi',
        question: {
            korean: '신용카드로 결제할 수 있나요?',
            romanized: 'Sinyongkadeuro gyeoljehal su innayo?',
            english: 'Can I pay with a credit card?',
            japanese: 'クレジットカードで支払えますか？',
            spanish: '¿Puedo pagar con tarjeta de crédito?',
            french: 'Puis-je payer par carte de crédit ?',
            thai: 'จ่ายด้วยบัตรเครดิตได้ไหมครับ/คะ?',
            chinese: '可以用信用卡支付吗？',
            hindi: 'क्या मैं क्रेडिट कार्ड से भुगतान कर सकता हूँ?',
            traditional_chinese: '可以用信用卡支付嗎？',
        },
        answers: [
            {
                korean: '네, 가능합니다.',
                romanized: 'Ne, ganeunghamnida.',
                english: 'Yes, it is possible.',
                japanese: 'はい、可能です。',
                spanish: 'Sí, es posible.',
                french: 'Oui, c\'est possible.',
                thai: 'ได้ครับ/ค่ะ',
                chinese: '是的，可以。',
                hindi: 'हाँ, यह संभव है।',
                traditional_chinese: '是的，可以。'
            },
            {
                korean: '죄송하지만 현금만 받습니다.',
                romanized: 'Joesonghajiman hyeongeumman batseumnida.',
                english: 'Sorry, I only accept cash.',
                japanese: '申し訳ありませんが、現金のみです。',
                spanish: 'Lo siento, solo acepto efectivo.',
                french: 'Désolé, je n\'accepte que les espèces.',
                thai: 'ขอโทษครับ/ค่ะ รับเฉพาะเงินสดครับ/ค่ะ',
                chinese: '抱歉，只收现金。',
                hindi: 'क्षमा करें, मैं केवल नकद स्वीकार करता हूँ।',
                traditional_chinese: '抱歉，只收現金。'
            }
        ]
    },
    // --- Bus ---
    {
        id: 3001,
        category: 'bus',
        question: {
            korean: '이 버스는 강남역에 가나요?',
            romanized: 'I beoseuneun Gangnamyeoge ganayo?',
            english: 'Does this bus go to Gangnam Station?',
            japanese: 'このバスは江南駅に行きますか？',
            spanish: '¿Este autobús va a la estación de Gangnam?',
            french: 'Ce bus va-t-il à la station Gangnam ?',
            thai: 'รถเมล์คันนี้ไปสถานีกังนัมไหมครับ/คะ?',
            chinese: '这辆公交车去江南站吗？',
            hindi: 'क्या यह बस गंगनम स्टेशन जाती है?',
            traditional_chinese: '這輛公車去江南站嗎？',
        },
        answers: [
            {
                korean: '아니요, 반대편에서 타셔야 해요.',
                romanized: 'Aniyo, bandaepyeoneseo tasyeoya haeyo.',
                english: 'No, you have to take it from the opposite side.',
                japanese: 'いいえ、反対側から乗る必要があります。',
                spanish: 'No, tiene que tomarlo desde el lado opuesto.',
                french: 'Non, vous devez le prendre de l\'autre côté.',
                thai: 'ไม่ครับ/ค่ะ ต้องไปขึ้นฝั่งตรงข้ามครับ/ค่ะ',
                chinese: '不，您得去对面坐。',
                hindi: 'नहीं, आपको इसे विपरीत दिशा से लेना होगा।',
                traditional_chinese: '不，您得去對面坐。'
            },
            {
                korean: '네, 갑니다. 타세요.',
                romanized: 'Ne, gamnida. Taseyo.',
                english: 'Yes, it goes there. Please get on.',
                japanese: 'はい、行きます。乗ってください。',
                spanish: 'Sí, va allí. Por favor suba.',
                french: 'Oui, il y va. Montez.',
                thai: 'ไปครับ/ค่ะ เชิญขึ้นเลยครับ/ค่ะ',
                chinese: '去的，请上车。',
                hindi: 'हाँ, यह वहां जाती है। कृपया चढ़ें।',
                traditional_chinese: '去的，請上車。'
            }
        ]
    },
    {
        id: 3002,
        category: 'bus',
        question: {
            korean: '요금이 얼마예요?',
            romanized: 'Yogeumi eolmayeyo?',
            english: 'How much is the fare?',
            japanese: '料金はいくらですか？',
            spanish: '¿Cuánto es la tarifa?',
            french: 'Combien coûte le ticket ?',
            thai: 'ค่าโดยสารเท่าไหร่ครับ/คะ?',
            chinese: '车费是多少？',
            hindi: 'किराया कितना है?',
            traditional_chinese: '車費是多少？',
        },
        answers: [
            {
                korean: '천 오백 원입니다. 교통카드를 찍어주세요.',
                romanized: 'Cheon obaek won imnida. Gyotongkadeureul jjigeojuseyo.',
                english: 'It is 1500 won. Please tap your transit card.',
                japanese: '1500ウォンです。交通カードをタッチしてください。',
                spanish: 'Son 1500 wones. Por favor, pase su tarjeta de transporte.',
                french: 'C\'est 1500 wons. Veuillez valider votre carte de transport.',
                thai: '1,500 วอนครับ/ค่ะ ช่วยแตะบัตรโดยสารด้วยครับ/ค่ะ',
                chinese: '1500韩元。请刷交通卡。',
                hindi: 'यह 1500 वोन है। कृपया अपना ट्रांजिट कार्ड टैप करें।',
                traditional_chinese: '1500韓元。請刷交通卡。'
            },
            {
                korean: '현금은 천 육백 원입니다.',
                romanized: 'Hyeongeumeun cheon yukbaek won imnida.',
                english: 'It is 1600 won in cash.',
                japanese: '現金は1600ウォンです。',
                spanish: 'Son 1600 wones en efectivo.',
                french: 'C\'est 1600 wons en espèces.',
                thai: 'ถ้าจ่ายเงินสด 1,600 วอนครับ/ค่ะ',
                chinese: '现金是1600韩元。',
                hindi: 'नकद में 1600 वोन है।',
                traditional_chinese: '現金是1600韓元。'
            }
        ]
    },
    // --- Subway ---
    {
        id: 4001,
        category: 'subway',
        question: {
            korean: '몇 번 출구로 나가야 해요?',
            romanized: 'Myeot beon chulguro nagaya haeyo?',
            english: 'Which exit exit should I go out?',
            japanese: '何番出口を出ればいいですか？',
            spanish: '¿Por qué salida debo salir?',
            french: 'Par quelle sortie dois-je sortir ?',
            thai: 'ต้องออกทางออกไหนครับ/คะ?',
            chinese: '我应该从几号出口出去？',
            hindi: 'मुझे किस निकास से बाहर जाना चाहिए?',
            traditional_chinese: '我應該從幾號出口出去？',
        },
        answers: [
            {
                korean: '4번 출구로 나가시면 빠릅니다.',
                romanized: 'Sabeon chulguro nagasimyeon ppareumnida.',
                english: 'It is faster if you go out Exit 4.',
                japanese: '4番出口から出ると早いです。',
                spanish: 'Es más rápido si sale por la salida 4.',
                french: 'C\'est plus rapide si vous sortez par la sortie 4.',
                thai: 'ออกทางออก 4 จะเร็วกว่าครับ/ค่ะ',
                chinese: '走4号出口比较快。',
                hindi: 'यदि आप निकास 4 से बाहर जाते हैं तो यह तेज़ है।',
                traditional_chinese: '走4號出口比較快。'
            },
            {
                korean: '표지판을 보고 따라가세요.',
                romanized: 'Pyojipaneul bogo ttaragaseyo.',
                english: 'Please follow the signs.',
                japanese: '標識に従って行ってください。',
                spanish: 'Por favor siga las señales.',
                french: 'Veuillez suivre les panneaux.',
                thai: 'เดินตามป้ายไปเลยครับ/ค่ะ',
                chinese: '请跟着指示牌走。',
                hindi: 'कृपया संकेतों का पालन करें।',
                traditional_chinese: '請跟著指示牌走。'
            }
        ]
    },
    {
        id: 4002,
        category: 'subway',
        question: {
            korean: '여기서 환승할 수 있나요?',
            romanized: 'Yeogiseo hwanseung-hal su innayo?',
            english: 'Can I transfer here?',
            japanese: 'ここで乗り換えできますか？',
            spanish: '¿Puedo hacer trasbordo aquí?',
            french: 'Puis-je changer de ligne ici ?',
            thai: 'เปลี่ยนขบวนที่นี่ได้ไหมครับ/คะ?',
            chinese: '可以在这儿换乘吗？',
            hindi: 'क्या मैं यहाँ ट्रांसफर कर सकता हूँ?',
            traditional_chinese: '可以在這兒轉乘嗎？',
        },
        answers: [
            {
                korean: '네, 2호선으로 갈아타실 수 있습니다.',
                romanized: 'Ne, i-hoseoneuro garatasil su itseumnida.',
                english: 'Yes, you can transfer to Line 2.',
                japanese: 'はい、2号線に乗り換えることができます。',
                spanish: 'Sí, puede hacer trasbordo a la Línea 2.',
                french: 'Oui, vous pouvez prendre la ligne 2.',
                thai: 'ได้ครับ/ค่ะ เปลี่ยนไปสาย 2 ได้ครับ/ค่ะ',
                chinese: '可以，您可以换乘2号线。',
                hindi: 'हाँ, आप लाइन 2 में ट्रांसफर कर सकते हैं।',
                traditional_chinese: '可以，您可以轉乘2號線。'
            },
            {
                korean: '아니요, 다음 역에서 내리셔야 해요.',
                romanized: 'Aniyo, daeum yeogeseo naerisyeoya haeyo.',
                english: 'No, you have to get off at the next station.',
                japanese: 'いいえ、次の駅で降りる必要があります。',
                spanish: 'No, tiene que bajarse en la próxima estación.',
                french: 'Non, vous devez descendre à la prochaine station.',
                thai: 'ไม่ได้ครับ/ค่ะ ต้องลงสถานีหน้าครับ/ค่ะ',
                chinese: '不行，您得在下一站下车。',
                hindi: 'नहीं, आपको अगले स्टेशन पर उतरना होगा।',
                traditional_chinese: '不行，您得在下一站下車。'
            }
        ]
    },
    // --- Restaurant ---
    {
        id: 5001,
        category: 'restaurant',
        question: {
            korean: '주문하시겠습니까?',
            romanized: 'Jumunhasigetsseumnikka?',
            english: 'Would you like to order?',
            japanese: 'ご注文なさいますか？',
            spanish: '¿Le gustaría pedir?',
            french: 'Voulez-vous commander ?',
            thai: 'รับอะไรดีครับ/คะ?',
            chinese: '您要点餐吗？',
            hindi: 'क्या आप ऑर्डर करना चाहेंगे?',
            traditional_chinese: '您要點餐嗎？',
        },
        answers: [
            {
                korean: '네, 비빔밥 하나 주세요.',
                romanized: 'Ne, bibimbap hana juseyo.',
                english: 'Yes, one bibimbap, please.',
                japanese: 'はい、ビビンバを一つください。',
                spanish: 'Sí, un bibimbap, por favor.',
                french: 'Oui, un bibimbap, s\'il vous plaît.',
                thai: 'ค่ะ/ครับ ขอบิบิมบับหนึ่งที่ครับ/ค่ะ',
                chinese: '是的，请给我一份拌饭。',
                hindi: 'हाँ, एक बिबिंबप, कृपया।',
                traditional_chinese: '是的，請給我一份拌飯。'
            },
            {
                korean: '잠시만요, 메뉴 조금만 더 볼게요.',
                romanized: 'Jamsimanyo, menyu jogeumman deo bolgeyo.',
                english: 'Just a moment, I will look at the menu a bit more.',
                japanese: '少々お待ちください、メニューをもう少し見ます。',
                spanish: 'Un momento, miraré el menú un poco más.',
                french: 'Un instant, je vais regarder encore un peu le menu.',
                thai: 'สักครู่นะครับ/คะ ขอูเมนูอีกหน่อยครับ/ค่ะ',
                chinese: '稍等，我再看一会儿菜单。',
                hindi: 'बस एक पल, मैं मेनू को थोड़ा और देखूंगा।',
                traditional_chinese: '稍等，我再看一會兒菜單。'
            }
        ]
    },
    {
        id: 5002,
        category: 'restaurant',
        question: {
            korean: '화장실이 어디에 있나요?',
            romanized: 'Hwajangsiri eodie innayo?',
            english: 'Where is the restroom?',
            japanese: 'トイレはどこですか？',
            spanish: '¿Dónde está el baño?',
            french: 'Où sont les toilettes ?',
            thai: 'ห้องน้ำอยู่ที่ไหนครับ/คะ?',
            chinese: '洗手间在哪儿？',
            hindi: 'शौचालय कहाँ है?',
            traditional_chinese: '洗手間在哪兒？',
        },
        answers: [
            {
                korean: '나가서 오른쪽 건물 2층에 있습니다.',
                romanized: 'Nagaseo oreunjjok geonmul icheunge itseumnida.',
                english: 'It is on the 2nd floor of the building to the right outside.',
                japanese: '出て右側の建物の2階にあります。',
                spanish: 'Está en el segundo piso del edificio de la derecha al salir.',
                french: 'C\'est au 2ème étage de l\'immeuble à droite en sortant.',
                thai: 'ออกไปแล้วอยู่ชั้น 2 ตึกขวามือครับ/ค่ะ',
                chinese: '出去后右边大楼的二楼。',
                hindi: 'यह बाहर दाईं ओर इमारत की दूसरी मंजिल पर है।',
                traditional_chinese: '出去後右邊大樓的二樓。'
            },
            {
                korean: '카운터 왼쪽 끝에 있습니다.',
                romanized: 'Kaunteo oenjjok kkeute itseumnida.',
                english: 'It is at the left end of the counter.',
                japanese: 'カウンターの左端にあります。',
                spanish: 'Está en el extremo izquierdo del mostrador.',
                french: 'C\'est à l\'extrémité gauche du comptoir.',
                thai: 'อยู่สุดทางซ้ายของเคาน์เตอร์ครับ/ค่ะ',
                chinese: '在柜台左端。',
                hindi: 'यह काउंटर के बाएं छोर पर है।',
                traditional_chinese: '在櫃檯左端。'
            }
        ]
    },
    // --- Hotel ---
    {
        id: 6001,
        category: 'hotel',
        question: {
            korean: '체크아웃 시간은 몇 시인가요?',
            romanized: 'Chekeuaut siganeun myeot siingayo?',
            english: 'What time is check-out?',
            japanese: 'チェックアウトは何時ですか？',
            spanish: '¿A qué hora es la salida?',
            french: 'À quelle heure est le départ ?',
            thai: 'เช็คเอาท์กี่โมงครับ/คะ?',
            chinese: '退房时间是几点？',
            hindi: 'चेक-आउट किस समय है?',
            traditional_chinese: '退房時間是幾點？',
        },
        answers: [
            {
                korean: '오전 11시입니다.',
                romanized: 'Ojeon yeol-han-si imnida.',
                english: 'It is 11:00 AM.',
                japanese: '午前11時です。',
                spanish: 'Son las 11:00 AM.',
                french: 'C\'est à 11h00.',
                thai: '11 โมงเช้าครับ/ค่ะ',
                chinese: '是上午11点。',
                hindi: 'यह सुबह 11:00 बजे है।',
                traditional_chinese: '是上午11點。'
            },
            {
                korean: '오후 12시까지입니다.',
                romanized: 'Ohu yeol-du-sikkaji imnida.',
                english: 'It is until 12:00 PM.',
                japanese: '午後12時までです。',
                spanish: 'Es hasta las 12:00 PM.',
                french: 'C\'est jusqu\'à 12h00.',
                thai: 'ถึงเที่ยงครับ/ค่ะ',
                chinese: '直到中午12点。',
                hindi: 'यह दोपहर 12:00 बजे तक है।',
                traditional_chinese: '直到中午12點。'
            }
        ]
    },
    {
        id: 6002,
        category: 'hotel',
        question: {
            korean: '조식은 포함되어 있나요?',
            romanized: 'Josigeun pohamdoeeo innayo?',
            english: 'Is breakfast included?',
            japanese: '朝食は含まれていますか？',
            spanish: '¿Está incluido el desayuno?',
            french: 'Le petit-déjeuner est-il inclus ?',
            thai: 'รวมอาหารเช้าไหมครับ/คะ?',
            chinese: '包含早餐吗？',
            hindi: 'क्या नाश्ता शामिल है?',
            traditional_chinese: '包含早餐嗎？',
        },
        answers: [
            {
                korean: '네, 1층 레스토랑에서 드실 수 있습니다.',
                romanized: 'Ne, ilcheung reseutorang-eseo deusil su itseumnida.',
                english: 'Yes, you can eat at the restaurant on the 1st floor.',
                japanese: 'はい、1階のレストランでお召し上がりいただけます。',
                spanish: 'Sí, puede comer en el restaurante del 1er piso.',
                french: 'Oui, vous pouvez manger au restaurant du 1er étage.',
                thai: 'ครับ/ค่ะ ทานได้ที่ร้านอาหารชั้น 1 ครับ/ค่ะ',
                chinese: '是的，您可以在一楼餐厅用餐。',
                hindi: 'हाँ, आप पहली मंजिल पर रेस्तरां में खा सकते हैं।',
                traditional_chinese: '是的，您可以在一樓餐廳用餐。'
            },
            {
                korean: '아니요, 현장에서 따로 결제하셔야 합니다.',
                romanized: 'Aniyo, hyeonjang-eseo ttaro gyeoljehasyeoya hamnida.',
                english: 'No, you have to pay separately on site.',
                japanese: 'いいえ、現地で別途支払う必要があります。',
                spanish: 'No, tiene que pagar por separado en el lugar.',
                french: 'Non, vous devez payer séparément sur place.',
                thai: 'ไม่ครับ/ค่ะ ต้องชำระแยกหน้างานครับ/ค่ะ',
                chinese: '不，您需要在现场单独付费。',
                hindi: 'नहीं, आपको साइट पर अलग से भुगतान करना होगा।',
                traditional_chinese: '不，您需要在現場單獨付費。'
            }
        ]
    },
    // --- Tourist ---
    {
        id: 7001,
        category: 'tourist',
        question: {
            korean: '이거 입어봐도 되나요?',
            romanized: 'Igeo ibeobwado doenayo?',
            english: 'Can I try this on?',
            japanese: 'これを試着してもいいですか？',
            spanish: '¿Puedo probármelo?',
            french: 'Puis-je l\'essayer ?',
            thai: 'ขอลองชุดนี้ได้ไหมครับ/คะ?',
            chinese: '我可以试穿这个吗？',
            hindi: 'क्या मैं इसे पहन कर देख सकता हूँ?',
            traditional_chinese: '我可以試穿這個嗎？',
        },
        answers: [
            {
                korean: '네, 탈의실은 저쪽에 있습니다.',
                romanized: 'Ne, taruishireun jeojjoge itseumnida.',
                english: 'Yes, the fitting room is over there.',
                japanese: 'はい、試着室はあちらにあります。',
                spanish: 'Sí, el probador está allí.',
                french: 'Oui, la cabine d\'essayage est là-bas.',
                thai: 'ได้ครับ/ค่ะ ห้องลองชุดอยู่ทางโน้นครับ/ค่ะ',
                chinese: '可以，试衣间在那边。',
                hindi: 'हाँ, फिटिंग रूम उधर है।',
                traditional_chinese: '可以，試衣間在那邊。'
            },
            {
                korean: '죄송합니다. 흰색 옷은 착용이 불가능합니다.',
                romanized: 'Joesonghamnida. Hinsaek oseun chagyongi bulganeunghamnida.',
                english: 'Sorry. White clothes cannot be tried on.',
                japanese: '申し訳ありません。白い服は試着できません。',
                spanish: 'Lo siento. La ropa blanca no se puede probar.',
                french: 'Désolé. Les vêtements blancs ne peuvent pas être essayés.',
                thai: 'ขอโทษครับ/ค่ะ เสื้อสีขาวลองไม่ได้ครับ/ค่ะ',
                chinese: '抱歉。白色衣服不能试穿。',
                hindi: 'क्षमा करें। सफेद कपड़े पहन कर नहीं देखे जा सकते।',
                traditional_chinese: '抱歉。白色衣服不能試穿。'
            }
        ]
    },
    {
        id: 7002,
        category: 'tourist',
        question: {
            korean: '이건 얼마예요?',
            romanized: 'Igeon eolmayeyo?',
            english: 'How much is this?',
            japanese: 'これはいくらですか？',
            spanish: '¿Cuánto cuesta esto?',
            french: 'C\'est combien ?',
            thai: 'อันนี้เท่าไหร่ครับ/คะ?',
            chinese: '这个多少钱？',
            hindi: 'यह कितने का है?',
            traditional_chinese: '這個多少錢？',
        },
        answers: [
            {
                korean: '만 오천 원입니다.',
                romanized: 'Man ocheon won imnida.',
                english: 'It is 15,000 won.',
                japanese: '1万5千ウォンです。',
                spanish: 'Son 15.000 wones.',
                french: 'C\'est 15 000 wons.',
                thai: '15,000 วอนครับ/ค่ะ',
                chinese: '一万五千韩元。',
                hindi: 'यह 15,000 वोन है।',
                traditional_chinese: '一萬五千韓元。'
            },
            {
                korean: '지금 세일해서 만 원이에요.',
                romanized: 'Jigeum seilhaeseo man won-ieyo.',
                english: 'It is 10,000 won because it is on sale now.',
                japanese: '今セールで1万ウォンです。',
                spanish: 'Son 10.000 wones porque está en oferta ahora.',
                french: 'C\'est 10 000 wons car c\'est en solde maintenant.',
                thai: 'ตอนนี้ลดราคาเหลือ 10,000 วอนครับ/ค่ะ',
                chinese: '现在打折，一万韩元。',
                hindi: 'यह 10,000 वोन है क्योंकि यह अभी सेल में है।',
                traditional_chinese: '現在打折，一萬韓元。'
            }
        ]
    },
    // --- Daily Life ---
    {
        id: 8001,
        category: 'daily',
        question: {
            korean: '이름이 뭐예요?',
            romanized: 'Ireumi mwoyeyo?',
            english: 'What is your name?',
            japanese: 'お名前は何ですか？',
            spanish: '¿Cómo te llamas?',
            french: 'Comment vous appelez-vous ?',
            thai: 'ชื่ออะไรครับ/คะ?',
            chinese: '你叫什么名字？',
            hindi: 'आपका नाम क्या है?',
            traditional_chinese: '你叫什麼名字？',
        },
        answers: [
            {
                korean: '제 이름은 김민수입니다.',
                romanized: 'Je ireumeun Kim Minsu imnida.',
                english: 'My name is Kim Minsu.',
                japanese: '私の名前はキム・ミンスです。',
                spanish: 'Mi nombre es Kim Minsu.',
                french: 'Je m\'appelle Kim Minsu.',
                thai: 'ผม/ฉันชื่อคิมมินซูครับ/ค่ะ',
                chinese: '我叫金民秀。',
                hindi: 'मेरा नाम किम मिनसु है।',
                traditional_chinese: '我叫金民秀。'
            },
            {
                korean: '저는 이지은이라고 해요.',
                romanized: 'Jeoneun Lee Jieun-irago haeyo.',
                english: 'I am called Lee Jieun.',
                japanese: '私はイ・ジウンと言います。',
                spanish: 'Me llamo Lee Jieun.',
                french: 'Je m\'appelle Lee Jieun.',
                thai: 'ชื่อลีจีอึนค่ะ/ครับ',
                chinese: '我叫李知恩。',
                hindi: 'मुझे ली जीउन कहा जाता है।',
                traditional_chinese: '我叫李知恩。'
            }
        ]
    },
    {
        id: 8002,
        category: 'daily',
        question: {
            korean: '취미가 뭐예요?',
            romanized: 'Cwimiga mwoyeyo?',
            english: 'What is your hobby?',
            japanese: '趣味は何ですか？',
            spanish: '¿Cuál es tu pasatiempo?',
            french: 'Quel est votre passe-temps ?',
            thai: 'งานอดิเรกคืออะไรครับ/คะ?',
            chinese: '你的爱好是什么？',
            hindi: 'आपका शौक क्या है?',
            traditional_chinese: '你的愛好是什麼？',
        },
        answers: [
            {
                korean: '저는 영화 보는 것을 좋아해요.',
                romanized: 'Jeoneun yeonghwa boneun geoseul joahaeyo.',
                english: 'I like watching movies.',
                japanese: '私は映画を見るのが好きです。',
                spanish: 'Me gusta ver películas.',
                french: 'J\'aime regarder des films.',
                thai: 'ผม/ฉันชอบดูหนังครับ/ค่ะ',
                chinese: '我喜欢看电影。',
                hindi: 'मुझे फिल्में देखना पसंद है।',
                traditional_chinese: '我喜歡看電影。'
            },
            {
                korean: '요리하는 게 제 취미예요.',
                romanized: 'Yorihaneun ge je chwimiyeyo.',
                english: 'Cooking is my hobby.',
                japanese: '料理が私の趣味です。',
                spanish: 'Cocinar es mi pasatiempo.',
                french: 'La cuisine est mon passe-temps.',
                thai: 'การทำอาหารคืองานอดิเรกของผม/ฉันครับ/ค่ะ',
                chinese: '做饭是我的爱好。',
                hindi: 'खाना बनाना मेरा शौक है।',
                traditional_chinese: '做飯是我的愛好。'
            }
        ]
    },
    // --- Emergency ---
    {
        id: 9001,
        category: 'emergency',
        question: {
            korean: '도와주세요! 경찰을 불러주세요.',
            romanized: 'Dowajuseyo! Gyeongchareul bulleojuseyo.',
            english: 'Help! Please call the police.',
            japanese: '助けてください！警察を呼んでください。',
            spanish: '¡Ayuda! Por favor llame a la policía.',
            french: 'À l\'aide ! Appelez la police s\'il vous plaît.',
            thai: 'ช่วยด้วย! ช่วยเรียกตำรวจให้หน่อยครับ/ค่ะ',
            chinese: '救命！请叫警察。',
            hindi: 'मदद! कृपया पुलिस को बुलाएं।',
            traditional_chinese: '救命！請叫警察。',
        },
        answers: [
            {
                korean: '무슨 일이세요? 진정하세요.',
                romanized: 'Museun ir-iseyo? Jinjeonghaseyo.',
                english: 'What happened? Please calm down.',
                japanese: 'どうしましたか？落ち着いてください。',
                spanish: '¿Qué pasó? Por favor cálmese.',
                french: 'Que s\'est-il passé ? Calmez-vous s\'il vous plaît.',
                thai: 'เกิดอะไรขึ้นครับ/คะ? ใจเย็นๆ นะครับ/คะ',
                chinese: '发生什么事了？请冷静点。',
                hindi: 'क्या हुआ? कृपया शांत हो जाएं।',
                traditional_chinese: '發生什麼事了？請冷靜點。'
            },
            {
                korean: '제가 신고해 드릴게요. 기다리세요.',
                romanized: 'Jega singohae deurilgeyo. Gidariseyo.',
                english: 'I will report it. Please wait.',
                japanese: '私が通報します。待っていてください。',
                spanish: 'Yo lo reportaré. Por favor espere.',
                french: 'Je vais le signaler. Attendez s\'il vous plaît.',
                thai: 'เดี๋ยวผม/ฉันแจ้งให้ครับ/ค่ะ รอสักครู่นะครับ/ค่ะ',
                chinese: '我去报警。请稍等。',
                hindi: 'मैं इसकी रिपोर्ट करूँगा। कृपया प्रतीक्षा करें।',
                traditional_chinese: '我去報警。請稍等。'
            }
        ]
    },
    // --- Hospital ---
    {
        id: 10001,
        category: 'hospital',
        question: {
            korean: '어디가 아프신가요?',
            romanized: 'Eodiga apeusingayo?',
            english: 'Where does it hurt?',
            japanese: 'どこが痛いですか？',
            spanish: '¿Dónde le duele?',
            french: 'Où avez-vous mal ?',
            thai: 'เจ็บตรงไหนครับ/คะ?',
            chinese: '哪里不舒服？',
            hindi: 'कहाँ दर्द हो रहा है?',
            traditional_chinese: '哪裡不舒服？',
        },
        answers: [
            {
                korean: '배가 너무 아프고 열이 나요.',
                romanized: 'Baega neomu apeugo yeori nayo.',
                english: 'My stomach hurts a lot and I have a fever.',
                japanese: 'お腹がとても痛くて熱があります。',
                spanish: 'Me duele mucho el estómago y tengo fiebre.',
                french: 'J\'ai très mal au ventre et j\'ai de la fièvre.',
                thai: 'ปวดท้องมากและมีไข้ครับ/ค่ะ',
                chinese: '肚子很疼，发烧了。',
                hindi: 'मेरे पेट में बहुत दर्द है और मुझे बुखार है।',
                traditional_chinese: '肚子很疼，發燒了。'
            },
            {
                korean: '발목을 다친 것 같아요.',
                romanized: 'Balmogeul dachin geot gatayo.',
                english: 'I think I hurt my ankle.',
                japanese: '足首を痛めたようです。',
                spanish: 'Creo que me lastimé el tobillo.',
                french: 'Je crois que je me suis blessé à la cheville.',
                thai: 'รู้สึกเหมือนข้อเท้าแพลงครับ/ค่ะ',
                chinese: '好像扭伤了脚踝。',
                hindi: 'मुझे लगता है कि मेरे टखने में चोट लगी है।',
                traditional_chinese: '好像扭傷了腳踝。'
            }
        ]
    },
    {
        id: 10002,
        category: 'hospital',
        question: {
            korean: '약은 식후 30분에 드세요.',
            romanized: 'Yageun sikhu samsip-bune deuseyo.',
            english: 'Please take the medicine 30 minutes after a meal.',
            japanese: '薬は食後30分に飲んでください。',
            spanish: 'Por favor tome la medicina 30 minutos después de comer.',
            french: 'Veuillez prendre le médicament 30 minutes après le repas.',
            thai: 'ทานยาหลังอาหาร 30 นาทีนะครับ/คะ',
            chinese: '请饭后30分钟服药。',
            hindi: 'कृपया भोजन के 30 मिनट बाद दवा लें।',
            traditional_chinese: '請飯後30分鐘服藥。',
        },
        answers: [
            {
                korean: '알겠습니다. 감사합니다.',
                romanized: 'Algetseumnida. Gamsahamnida.',
                english: 'I understand. Thank you.',
                japanese: '分かりました。ありがとうございます。',
                spanish: 'Entiendo. Gracias.',
                french: 'Compris. Merci.',
                thai: 'เข้าใจแล้วครับ/ค่ะ ขอบคุณครับ/ค่ะ',
                chinese: '好的，谢谢。',
                hindi: 'मैं समझ गया। धन्यवाद।',
                traditional_chinese: '好的，謝謝。'
            },
            {
                korean: '빈 속에 먹어도 되나요?',
                romanized: 'Bin soge meogeodo doenayo?',
                english: 'Can I take it on an empty stomach?',
                japanese: '空腹時に飲んでもいいですか？',
                spanish: '¿Puedo tomarla con el estómago vacío?',
                french: 'Puis-je le prendre l\'estomac vide ?',
                thai: 'ทานตอนท้องว่างได้ไหมครับ/คะ?',
                chinese: '可以空腹吃吗？',
                hindi: 'क्या मैं इसे खाली पेट ले सकता हूँ?',
                traditional_chinese: '可以空腹吃嗎？'
            }
        ]
    }
];
