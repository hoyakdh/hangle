
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, Search, Volume2 } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { GrammarItem } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';
import { Helmet } from 'react-helmet-async';

export default function Grammar() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.grammar;
    const data = guideData[targetLanguage].grammar;
    const [searchTerm, setSearchTerm] = useState("");

    const filteredGrammar = data.filter(item =>
        item.expression.includes(searchTerm) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const playAudio = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/\*\*/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ko-KR';
        window.speechSynthesis.speak(utterance);
    };

    const renderExample = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/);
        return (
            <>
                {parts.map((part, i) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={i} className="text-emerald-600 dark:text-emerald-400 font-bold">
                            {part.slice(2, -2)}
                        </strong>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    return (
        <>
            <Helmet>
                <title>Korean Grammar Guide – Essential Patterns for Beginners | Hangle</title>
                <meta
                    name="description"
                    content="Learn essential Korean grammar patterns for everyday conversation. Covers topic markers, object markers, tense, honorifics, connective endings, and more. Searchable reference guide with audio examples."
                />
            </Helmet>

            <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                            <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                <Book className="w-8 h-8 text-emerald-500" />
                                {t.title}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                {t.description}
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                        />
                    </div>
                </div>

                {/* ───────── SEO 아티클 섹션 ───────── */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        한국어 문법 완전 정복 – 초보자부터 중급자까지 꼭 알아야 할 핵심 패턴
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어 문법은 영어나 유럽 언어들과 구조가 매우 다릅니다. 가장 큰 차이점은 <strong>동사와 형용사가 문장 끝에 온다는 것</strong>(SOV 어순)과, <strong>조사(助詞, particles)</strong>가 명사 뒤에 붙어 문장 속에서 각 단어의 역할을 알려준다는 것입니다. 처음에는 낯설지만, 이 핵심 원리만 이해하면 한국어 문법 학습이 훨씬 수월해집니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        조사(Particles) – 한국어 문법의 핵심
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        영어에서는 어순(word order)이 문장에서 단어의 역할을 결정합니다. "I love you"와 "You love me"는 어순이 달라서 의미가 다릅니다. 한국어에서는 이 역할을 <strong>조사</strong>가 담당합니다. 예를 들어, '은/는'은 문장의 주제(topic)를, '이/가'는 주어(subject)를, '을/를'은 목적어(object)를, '에서'는 장소를 나타냅니다. 조사가 있기 때문에 한국어는 어순이 비교적 자유롭습니다. "저는 한국어를 공부해요(I study Korean)"와 "한국어를 저는 공부해요"는 어순이 다르지만 의미는 같습니다. 조사를 올바르게 사용하는 것이 자연스러운 한국어 구사의 첫 번째 열쇠입니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        경어법(Honorifics) – 한국 문화를 반영하는 언어 체계
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어의 경어법(존댓말)은 한국 문화의 위계질서와 예의를 반영하는 매우 독특한 언어 시스템입니다. 크게 격식체와 비격식체로 나뉘며, 상대방의 나이, 사회적 지위, 친밀도에 따라 적절한 말투를 선택해야 합니다. 가장 많이 사용하는 비격식 높임말 어미는 <strong>'-아요/어요'</strong>입니다. 예를 들어, '먹다(to eat)'의 높임말 형태는 '먹어요'이고, '가다(to go)'의 높임말은 '가요'입니다. 격식을 갖춘 상황(공식 발표, 뉴스 등)에서는 '-ㅂ니다/습니다' 어미를 사용합니다. 처음 한국인을 만나거나, 나이 차이가 있는 경우에는 반드시 존댓말을 사용하는 것이 예의입니다. 반말(informal speech)은 친한 친구나 아주 어린 사람에게만 사용합니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        연결 어미 – 문장을 자연스럽게 잇는 방법
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어의 연결 어미는 두 문장이나 절을 이어주는 역할을 하며, 매우 다양한 의미 관계를 표현합니다. 자주 쓰이는 연결 어미를 정리하면 다음과 같습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                        <li><strong>-고</strong>: 두 동작이나 상태를 나열할 때. 예) "밥을 먹고 공부해요." (I eat and then study.)</li>
                        <li><strong>-지만</strong>: 반전(but, however). 예) "비가 오지만 운동해요." (It rains, but I exercise.)</li>
                        <li><strong>-아서/어서</strong>: 이유나 순서를 나타낼 때. 예) "배고파서 밥을 먹어요." (I'm hungry, so I eat.)</li>
                        <li><strong>-(으)면</strong>: 조건(if). 예) "시간이 있으면 연락하세요." (If you have time, contact me.)</li>
                        <li><strong>-(으)려고</strong>: 목적이나 의도. 예) "한국어를 배우려고 공부해요." (I study to learn Korean.)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        시제(Tense) – 과거, 현재, 미래 표현법
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어의 시제는 어미 변화를 통해 표현됩니다. 기본 시제 구조는 다음과 같습니다. <strong>현재형</strong>은 동사/형용사 어간에 '-아요/어요'를 붙입니다. <strong>과거형</strong>은 '-았어요/었어요'를 붙이며, 이것은 '았/었' + '어요'의 조합입니다. 예를 들어, '먹다(eat)' → 현재: '먹어요', 과거: '먹었어요'. <strong>미래형</strong>은 '-(으)ㄹ 거예요'를 사용합니다. 예) '먹을 거예요(will eat)'. 한국어에는 영어처럼 엄격한 미래 시제가 없고, 현재형으로 가까운 미래를 표현하는 경우도 많습니다. 예를 들어 "내일 가요(I'm going tomorrow)"는 문맥상 미래를 의미합니다.
                    </p>
                </article>
                {/* ───────── 아티클 섹션 끝 ───────── */}

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-16 text-center">#</th>
                                    <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-1/4">{t.headers.expression}</th>
                                    <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-1/4">{t.headers.meaning}</th>
                                    <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700">{t.headers.example}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {filteredGrammar.length > 0 ? (
                                    filteredGrammar.map((item: GrammarItem) => (
                                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="p-4 text-center text-gray-400 dark:text-gray-500 font-mono text-sm">{item.id}</td>
                                            <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400 text-lg">{item.expression}</td>
                                            <td className="p-4 text-gray-600 dark:text-gray-300 font-medium">{item.meaning}</td>
                                            <td className="p-4 text-gray-700 dark:text-gray-200">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span>{renderExample(item.example)}</span>
                                                    <button
                                                        onClick={() => playAudio(item.example)}
                                                        className="p-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors"
                                                        title="Listen"
                                                    >
                                                        <Volume2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                            {t.notFound} "{searchTerm}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
