import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, Mic } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { PronunciationRule } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';
import { Helmet } from 'react-helmet-async';

export default function Pronunciation() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.pronunciation;
    const data = guideData[targetLanguage].pronunciation;

    return (
        <>
            <Helmet>
                <title>Korean Pronunciation Rules – Hangle Learning Guide</title>
                <meta
                    name="description"
                    content="Master Korean pronunciation with our in-depth guide. Learn the 5 essential rules: final consonants (받침), liaison (연음), consonant assimilation (자음동화), aspiration, and more with real examples."
                />
            </Helmet>

            <div className="max-w-3xl mx-auto animate-fade-in space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            <Volume2 className="w-8 h-8 text-blue-500" />
                            {t.title}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {t.subtitle}
                        </p>
                    </div>
                </div>

                {/* ───────── SEO 아티클 섹션 ───────── */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        한국어 발음 규칙 완벽 정리 – 원어민처럼 말하기 위한 핵심 가이드
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어를 배우는 많은 학습자들이 처음에 이런 경험을 합니다. 글자는 읽을 수 있는데, 원어민이 말하는 것을 들으면 전혀 다르게 들린다는 것입니다. 이는 한국어에 정해진 <strong>발음 변화 규칙</strong>이 있기 때문입니다. 한글(Hangul)은 표음문자(소리를 표기하는 문자)이지만, 실제 발음은 글자 그대로 읽히지 않는 경우가 많습니다. 이 규칙들을 이해하면 듣기 실력이 급격히 향상되고, 말하기도 훨씬 자연스러워집니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        1. 받침(Final Consonant) – 한국어 발음의 기초
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어 음절의 마지막에 오는 자음을 <strong>받침</strong>이라고 합니다. 받침은 음절의 끝소리를 결정하는 매우 중요한 요소입니다. 받침으로 쓰이는 자음은 ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ의 일곱 가지 대표 소리로만 발음됩니다. 예를 들어, '부엌(kitchen)'의 받침 'ㅋ'은 [ㄱ] 소리로 발음되고, '낮(daytime)'의 받침 'ㅈ'은 [ㄷ] 소리로 발음됩니다. 이처럼 여러 개의 자음이 일곱 가지 소리로 대표되는 현상을 '음절의 끝소리 규칙'이라고 합니다. 이 규칙을 이해하는 것이 한국어 발음 학습의 첫걸음입니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        2. 연음(Liaison) – 받침이 다음 음절로 이어지는 소리
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        연음은 한국어 발음에서 가장 중요한 규칙 중 하나입니다. 받침이 있는 음절 뒤에 모음으로 시작하는 음절이 올 때, 받침이 다음 음절의 첫소리로 넘어가 발음됩니다. 예를 들어, '먹어요(eat)'는 [머거요]로 발음됩니다. '먹'의 받침 'ㄱ'이 뒤에 오는 '어'와 연결되어 [거]로 발음되는 것입니다. 또 다른 예로, '음악(music)'은 [으막]으로 발음됩니다. 연음 규칙은 실제 대화에서 매우 빈번하게 나타나기 때문에, 이 규칙을 모르면 원어민의 말을 이해하기 매우 어렵습니다. 'What are you doing?'을 뜻하는 '뭐 해요?'도 빠르게 말하면 [뭬해요]처럼 들리는 것도 연음의 영향입니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        3. 자음동화(Consonant Assimilation) – 자음이 주변 소리에 동화되는 현상
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        자음동화는 어떤 자음이 인접한 다른 자음의 영향을 받아 그 자음과 비슷하거나 같은 소리로 바뀌는 현상입니다. 대표적인 예로 비음화(nasalization)가 있습니다. ㄱ, ㄷ, ㅂ 받침이 ㄴ, ㅁ 앞에 오면, 각각 ㅇ, ㄴ, ㅁ으로 바뀌어 발음됩니다. 예를 들어, '국물(broth)'은 [궁물]로 발음되고, '합니다(formal ending)'는 [함니다]로 발음됩니다. K-드라마나 K-팝 노래를 들을 때 원래 글자와 다르게 들리는 경우의 상당수가 바로 이 자음동화 규칙 때문입니다. '대학로(a district in Seoul)'가 [대항노]로 발음되는 것도 같은 원리입니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        4. 격음화(Aspiration) – 거센소리로 바뀌는 규칙
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        격음화란 ㄱ, ㄷ, ㅂ, ㅈ이 ㅎ과 만날 때 거센소리(aspirated sound)인 ㅋ, ㅌ, ㅍ, ㅊ으로 변하는 현상입니다. 예를 들어, '좋다(good, to be good)'는 [조타]로 발음됩니다. '좋'의 받침 'ㅎ'이 뒤에 오는 'ㄷ'과 결합하여 'ㅌ'이 되는 것입니다. '낙하산(parachute)'은 [나카산]으로 발음되는데, '낙'의 받침 'ㄱ'과 '하'의 'ㅎ'이 합쳐져 'ㅋ'이 되기 때문입니다. 이 규칙 역시 자연스러운 한국어 발음을 위해 반드시 익혀야 합니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        학습자를 위한 실전 팁
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                        <li>처음에는 천천히 또박또박 발음하는 연습을 하고, 익숙해지면 자연스럽게 연결해서 말하는 연습을 합니다.</li>
                        <li>매일 한국 드라마나 뉴스를 10분씩 청취하며 자연스러운 발음 패턴에 귀를 익힙니다.</li>
                        <li>교재의 발음 기호보다는 직접 소리를 듣고 따라 하는 쉐도잉(Shadowing) 방법이 효과적입니다.</li>
                        <li>발음 규칙 전체를 한 번에 외우려 하기보다, 자주 쓰이는 단어에서 자연스럽게 규칙을 체득하는 것을 권장합니다.</li>
                        <li>스마트폰의 한국어 입력기를 활용해 단어들을 직접 입력해보면 한글 구조에 더 빨리 익숙해질 수 있습니다.</li>
                    </ul>
                </article>
                {/* ───────── 아티클 섹션 끝 ───────── */}

                <div className="space-y-6">
                    {data.map((rule: PronunciationRule) => (
                        <div key={rule.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-sm">
                                    {rule.id}
                                </span>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{rule.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {rule.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                {rule.examples.map((ex, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center relative overflow-hidden group">
                                        <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Mic className="w-12 h-12 text-blue-500" />
                                        </div>

                                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{t.written}</span>
                                        <div className="text-2xl font-black text-gray-800 dark:text-white mb-1">{ex.word}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono">{ex.romanized}</div>

                                        <div className="w-full h-px bg-gray-200 dark:bg-gray-600 my-2"></div>

                                        <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-1">{t.pronounced}</span>
                                        <div className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-1">{ex.pronunciation}</div>
                                        {ex.meaning && <div className="text-sm text-gray-500 dark:text-gray-400 italic">"{ex.meaning}"</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
