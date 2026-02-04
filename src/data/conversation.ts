export interface ConversationItem {
    id: number;
    category: 'airport' | 'taxi' | 'bus' | 'subway' | 'restaurant' | 'hotel' | 'tourist' | 'daily' | 'emergency' | 'hospital';
    question: {
        korean: string;
        romanized: string;
        english: string;
        japanese: string;
        spanish: string;
    };
    answers: {
        korean: string;
        romanized: string;
        english: string;
        japanese: string;
        spanish: string;
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
            spanish: '¿Dónde está el mostrador de facturación?'
        },
        answers: [
            {
                korean: '저쪽 3번 게이트 앞에 있습니다.',
                romanized: 'Jeojjok sambeon geiteu ape itseumnida.',
                english: 'It is in front of Gate 3 over there.',
                japanese: 'あちらの3番ゲートの前にあります。',
                spanish: 'Está frente a la puerta 3 de allí.'
            },
            {
                korean: 'D구역으로 가시면 됩니다.',
                romanized: 'Di-guyeog-euro gasimyeon doemnida.',
                english: 'You can go to Zone D.',
                japanese: 'Dゾーンに行けばいいです。',
                spanish: 'Puede ir a la Zona D.'
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
            spanish: '¿Cuánto equipaje puedo facturar?'
        },
        answers: [
            {
                korean: '한 사람당 23kg 가방 두 개까지 가능합니다.',
                romanized: 'Han saramdang isipsam-kilogeuraem gabang du gaekkaji ganeunghamnida.',
                english: 'You can check up to two 23kg bags per person.',
                japanese: 'お一人様23kgのバッグ2個まで可能です。',
                spanish: 'Puede facturar hasta dos maletas de 23 kg por persona.'
            },
            {
                korean: '이코노미석은 1개만 무료입니다.',
                romanized: 'Ikonomiseogeun han-gaeman muryoimnida.',
                english: 'Economy class allows only one free bag.',
                japanese: 'エコノミークラスは1つだけ無料です。',
                spanish: 'La clase económica solo permite una maleta gratis.'
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
            spanish: '¿Cuánto tiempo se tarda en llegar al Ayuntamiento?'
        },
        answers: [
            {
                korean: '약 30분 정도 걸릴 것 같습니다.',
                romanized: 'Yak samsip-bun jeongdo geollil geot gatseumnida.',
                english: 'It will take about 30 minutes.',
                japanese: '約30分ほどかかると思います。',
                spanish: 'Tardará unos 30 minutos.'
            },
            {
                korean: '지금 차가 막혀서 1시간은 걸려요.',
                romanized: 'Jigeum chaga makyeoseo han-siganeun geollyeoyo.',
                english: 'It takes an hour because traffic is heavy right now.',
                japanese: '今道が混んでいるので1時間はかかります。',
                spanish: 'Tarda una hora porque hay mucho tráfico ahora.'
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
            spanish: '¿Puedo pagar con tarjeta de crédito?'
        },
        answers: [
            {
                korean: '네, 가능합니다.',
                romanized: 'Ne, ganeunghamnida.',
                english: 'Yes, it is possible.',
                japanese: 'はい、可能です。',
                spanish: 'Sí, es posible.'
            },
            {
                korean: '죄송하지만 현금만 받습니다.',
                romanized: 'Joesonghajiman hyeongeumman batseumnida.',
                english: 'Sorry, I only accept cash.',
                japanese: '申し訳ありませんが、現金のみです。',
                spanish: 'Lo siento, solo acepto efectivo.'
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
            spanish: '¿Este autobús va a la estación de Gangnam?'
        },
        answers: [
            {
                korean: '아니요, 반대편에서 타셔야 해요.',
                romanized: 'Aniyo, bandaepyeoneseo tasyeoya haeyo.',
                english: 'No, you have to take it from the opposite side.',
                japanese: 'いいえ、反対側から乗る必要があります。',
                spanish: 'No, tiene que tomarlo desde el lado opuesto.'
            },
            {
                korean: '네, 갑니다. 타세요.',
                romanized: 'Ne, gamnida. Taseyo.',
                english: 'Yes, it goes there. Please get on.',
                japanese: 'はい、行きます。乗ってください。',
                spanish: 'Sí, va allí. Por favor suba.'
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
            spanish: '¿Cuánto es la tarifa?'
        },
        answers: [
            {
                korean: '천 오백 원입니다. 교통카드를 찍어주세요.',
                romanized: 'Cheon obaek won imnida. Gyotongkadeureul jjigeojuseyo.',
                english: 'It is 1500 won. Please tap your transit card.',
                japanese: '1500ウォンです。交通カードをタッチしてください。',
                spanish: 'Son 1500 wones. Por favor, pase su tarjeta de transporte.'
            },
            {
                korean: '현금은 천 육백 원입니다.',
                romanized: 'Hyeongeumeun cheon yukbaek won imnida.',
                english: 'It is 1600 won in cash.',
                japanese: '現金は1600ウォンです。',
                spanish: 'Son 1600 wones en efectivo.'
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
            spanish: '¿Por qué salida debo salir?'
        },
        answers: [
            {
                korean: '4번 출구로 나가시면 빠릅니다.',
                romanized: 'Sabeon chulguro nagasimyeon ppareumnida.',
                english: 'It is faster if you go out Exit 4.',
                japanese: '4番出口から出ると早いです。',
                spanish: 'Es más rápido si sale por la salida 4.'
            },
            {
                korean: '표지판을 보고 따라가세요.',
                romanized: 'Pyojipaneul bogo ttaragaseyo.',
                english: 'Please follow the signs.',
                japanese: '標識に従って行ってください。',
                spanish: 'Por favor siga las señales.'
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
            spanish: '¿Puedo hacer trasbordo aquí?'
        },
        answers: [
            {
                korean: '네, 2호선으로 갈아타실 수 있습니다.',
                romanized: 'Ne, i-hoseoneuro garatasil su itseumnida.',
                english: 'Yes, you can transfer to Line 2.',
                japanese: 'はい、2号線に乗り換えることができます。',
                spanish: 'Sí, puede hacer trasbordo a la Línea 2.'
            },
            {
                korean: '아니요, 다음 역에서 내리셔야 해요.',
                romanized: 'Aniyo, daeum yeogeseo naerisyeoya haeyo.',
                english: 'No, you have to get off at the next station.',
                japanese: 'いいえ、次の駅で降りる必要があります。',
                spanish: 'No, tiene que bajarse en la próxima estación.'
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
            spanish: '¿Le gustaría pedir?'
        },
        answers: [
            {
                korean: '네, 비빔밥 하나 주세요.',
                romanized: 'Ne, bibimbap hana juseyo.',
                english: 'Yes, one bibimbap, please.',
                japanese: 'はい、ビビンバを一つください。',
                spanish: 'Sí, un bibimbap, por favor.'
            },
            {
                korean: '잠시만요, 메뉴 조금만 더 볼게요.',
                romanized: 'Jamsimanyo, menyu jogeumman deo bolgeyo.',
                english: 'Just a moment, I will look at the menu a bit more.',
                japanese: '少々お待ちください、メニューをもう少し見ます。',
                spanish: 'Un momento, miraré el menú un poco más.'
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
            spanish: '¿Dónde está el baño?'
        },
        answers: [
            {
                korean: '나가서 오른쪽 건물 2층에 있습니다.',
                romanized: 'Nagaseo oreunjjok geonmul icheunge itseumnida.',
                english: 'It is on the 2nd floor of the building to the right outside.',
                japanese: '出て右側の建物の2階にあります。',
                spanish: 'Está en el segundo piso del edificio de la derecha al salir.'
            },
            {
                korean: '카운터 왼쪽 끝에 있습니다.',
                romanized: 'Kaunteo oenjjok kkeute itseumnida.',
                english: 'It is at the left end of the counter.',
                japanese: 'カウンターの左端にあります。',
                spanish: 'Está en el extremo izquierdo del mostrador.'
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
            spanish: '¿A qué hora es la salida?'
        },
        answers: [
            {
                korean: '오전 11시입니다.',
                romanized: 'Ojeon yeol-han-si imnida.',
                english: 'It is 11:00 AM.',
                japanese: '午前11時です。',
                spanish: 'Son las 11:00 AM.'
            },
            {
                korean: '오후 12시까지입니다.',
                romanized: 'Ohu yeol-du-sikkaji imnida.',
                english: 'It is until 12:00 PM.',
                japanese: '午後12時までです。',
                spanish: 'Es hasta las 12:00 PM.'
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
            spanish: '¿Está incluido el desayuno?'
        },
        answers: [
            {
                korean: '네, 1층 레스토랑에서 드실 수 있습니다.',
                romanized: 'Ne, ilcheung reseutorang-eseo deusil su itseumnida.',
                english: 'Yes, you can eat at the restaurant on the 1st floor.',
                japanese: 'はい、1階のレストランでお召し上がりいただけます。',
                spanish: 'Sí, puede comer en el restaurante del 1er piso.'
            },
            {
                korean: '아니요, 현장에서 따로 결제하셔야 합니다.',
                romanized: 'Aniyo, hyeonjang-eseo ttaro gyeoljehasyeoya hamnida.',
                english: 'No, you have to pay separately on site.',
                japanese: 'いいえ、現地で別途支払う必要があります。',
                spanish: 'No, tiene que pagar por separado en el lugar.'
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
            spanish: '¿Puedo probármelo?'
        },
        answers: [
            {
                korean: '네, 탈의실은 저쪽에 있습니다.',
                romanized: 'Ne, taruishireun jeojjoge itseumnida.',
                english: 'Yes, the fitting room is over there.',
                japanese: 'はい、試着室はあちらにあります。',
                spanish: 'Sí, el probador está allí.'
            },
            {
                korean: '죄송합니다. 흰색 옷은 착용이 불가능합니다.',
                romanized: 'Joesonghamnida. Hinsaek oseun chagyongi bulganeunghamnida.',
                english: 'Sorry. White clothes cannot be tried on.',
                japanese: '申し訳ありません。白い服は試着できません。',
                spanish: 'Lo siento. La ropa blanca no se puede probar.'
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
            spanish: '¿Cuánto cuesta esto?'
        },
        answers: [
            {
                korean: '만 오천 원입니다.',
                romanized: 'Man ocheon won imnida.',
                english: 'It is 15,000 won.',
                japanese: '1万5千ウォンです。',
                spanish: 'Son 15.000 wones.'
            },
            {
                korean: '지금 세일해서 만 원이에요.',
                romanized: 'Jigeum seilhaeseo man won-ieyo.',
                english: 'It is 10,000 won because it is on sale now.',
                japanese: '今セールで1万ウォンです。',
                spanish: 'Son 10.000 wones porque está en oferta ahora.'
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
            spanish: '¿Cómo te llamas?'
        },
        answers: [
            {
                korean: '제 이름은 김민수입니다.',
                romanized: 'Je ireumeun Kim Minsu imnida.',
                english: 'My name is Kim Minsu.',
                japanese: '私の名前はキム・ミンスです。',
                spanish: 'Mi nombre es Kim Minsu.'
            },
            {
                korean: '저는 이지은이라고 해요.',
                romanized: 'Jeoneun Lee Jieun-irago haeyo.',
                english: 'I am called Lee Jieun.',
                japanese: '私はイ・ジウンと言います。',
                spanish: 'Me llamo Lee Jieun.'
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
            spanish: '¿Cuál es tu pasatiempo?'
        },
        answers: [
            {
                korean: '저는 영화 보는 것을 좋아해요.',
                romanized: 'Jeoneun yeonghwa boneun geoseul joahaeyo.',
                english: 'I like watching movies.',
                japanese: '私は映画を見るのが好きです。',
                spanish: 'Me gusta ver películas.'
            },
            {
                korean: '요리하는 게 제 취미예요.',
                romanized: 'Yorihaneun ge je chwimiyeyo.',
                english: 'Cooking is my hobby.',
                japanese: '料理が私の趣味です。',
                spanish: 'Cocinar es mi pasatiempo.'
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
            spanish: '¡Ayuda! Por favor llame a la policía.'
        },
        answers: [
            {
                korean: '무슨 일이세요? 진정하세요.',
                romanized: 'Museun ir-iseyo? Jinjeonghaseyo.',
                english: 'What happened? Please calm down.',
                japanese: 'どうしましたか？落ち着いてください。',
                spanish: '¿Qué pasó? Por favor cálmese.'
            },
            {
                korean: '제가 신고해 드릴게요. 기다리세요.',
                romanized: 'Jega singohae deurilgeyo. Gidariseyo.',
                english: 'I will report it. Please wait.',
                japanese: '私が通報します。待っていてください。',
                spanish: 'Yo lo reportaré. Por favor espere.'
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
            spanish: '¿Dónde le duele?'
        },
        answers: [
            {
                korean: '배가 너무 아프고 열이 나요.',
                romanized: 'Baega neomu apeugo yeori nayo.',
                english: 'My stomach hurts a lot and I have a fever.',
                japanese: 'お腹がとても痛くて熱があります。',
                spanish: 'Me duele mucho el estómago y tengo fiebre.'
            },
            {
                korean: '발목을 다친 것 같아요.',
                romanized: 'Balmogeul dachin geot gatayo.',
                english: 'I think I hurt my ankle.',
                japanese: '足首を痛めたようです。',
                spanish: 'Creo que me lastimé el tobillo.'
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
            spanish: 'Por favor tome la medicina 30 minutos después de comer.'
        },
        answers: [
            {
                korean: '알겠습니다. 감사합니다.',
                romanized: 'Algetseumnida. Gamsahamnida.',
                english: 'I understand. Thank you.',
                japanese: '分かりました。ありがとうございます。',
                spanish: 'Entiendo. Gracias.'
            },
            {
                korean: '빈 속에 먹어도 되나요?',
                romanized: 'Bin soge meogeodo doenayo?',
                english: 'Can I take it on an empty stomach?',
                japanese: '空腹時に飲んでもいいですか？',
                spanish: '¿Puedo tomarla con el estómago vacío?'
            }
        ]
    }
];
