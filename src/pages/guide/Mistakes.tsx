import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { MistakeItem } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';
import { Helmet } from 'react-helmet-async';

export default function Mistakes() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.mistakes;
    const data = guideData[targetLanguage].mistakes;

    return (
        <>
            <Helmet>
                <title>Common Korean Mistakes to Avoid – Learner's Guide | Hangle</title>
                <meta
                    name="description"
                    content="Avoid the most common Korean language mistakes. From particle confusion to honorific errors, this guide explains what goes wrong and how to fix it with clear before-and-after examples."
                />
            </Helmet>

            <div className="max-w-3xl mx-auto animate-fade-in space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-orange-500" />
                            {t.title}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {t.description}
                        </p>
                    </div>
                </div>

                {/* ───────── SEO 아티클 섹션 ───────── */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        한국어 학습자가 가장 많이 하는 실수 TOP 10 – 그리고 그 해결법
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어를 배우는 과정에서 실수는 자연스럽고 당연한 일입니다. 하지만 어떤 실수들은 의사소통을 방해하거나, 심한 경우 의미가 완전히 바뀌어 오해를 낳기도 합니다. 수많은 한국어 학습자들이 공통적으로 어려워하는 실수 패턴들을 미리 알고 대비한다면, 학습 효율이 크게 높아집니다. 아래에서 가장 빈번하고 중요한 실수들을 분석해봅니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        1. 은/는 과 이/가 혼동 – 가장 흔한 실수
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        많은 학습자들이 주제 조사 <strong>'은/는'</strong>과 주어 조사 <strong>'이/가'</strong>를 혼동합니다. '은/는'은 문장의 화제(topic)나 이미 알고 있는 정보를 가리키고, '이/가'는 새로운 정보나 식별(identification)을 강조합니다. 예를 들어 "저는 학생이에요(I am a student)"에서 '는'은 '나'라는 화제를 제시합니다. 반면 "제가 먹었어요(It was I who ate it)"에서 '가'는 먹은 사람이 '나'임을 강조합니다. 이 미묘한 차이는 처음에는 이해하기 어렵지만, 문맥 속에서 많이 읽고 들으면 자연스럽게 체득됩니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        2. 을/를 생략 – 회화에서의 특성 이해 필요
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어 구어체(spoken language)에서는 목적격 조사 '을/를'을 종종 생략하지만, 문어체(written language)나 격식체에서는 반드시 사용해야 합니다. 예를 들어, 친구에게 캐주얼하게 말할 때는 "밥 먹었어?(Did you eat?)"라고 말할 수 있지만, 정중하게는 "밥을 드셨어요?"라고 해야합니다. 처음 한국어를 배울 때는 조사를 생략하지 않는 습관을 들이는 것이 좋습니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        3. 존댓말 사용 실수 – 문화적 맥락이 중요
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        기존에 반말(informal speech)을 먼저 배운 학습자들이 처음 만나는 어른이나 직장 상사에게 반말을 사용하는 경우가 있습니다. 한국에서는 이것이 큰 실례가 됩니다. 상대방이 명시적으로 "편하게 말해도 돼요"라고 허락하기 전까지는 반드시 <strong>존댓말</strong>을 사용해야 합니다. 특히 온라인 한국어 콘텐츠에서 반말 표현을 많이 접하는 경우, 이것이 오직 친한 사이에서만 허용된다는 점을 꼭 숙지해야 합니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        4. 어미 혼동 – -아서/어서 vs -고
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        '-아서/어서'와 '-고'는 둘 다 문장을 이어주지만 용법이 다릅니다. '-고'는 단순히 두 행동을 나열할 때 씁니다(예: "밥을 먹고 잠을 잤어요 - I ate and slept"). '-아서/어서'는 이유나 시간적 순서를 나타낼 때 씁니다(예: "피곤해서 잠을 잤어요 - I was tired, so I slept"). 흔한 실수 중 하나는 이유를 말할 때 '-고'를 쓰는 것인데, 이러면 어색한 문장이 됩니다. '-아서/어서'로 말한 문장은 앞 절이 뒤 절의 원인·이유임을 명확히 해줍니다.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        5. 숫자 체계 혼동 – 순우리말 수 vs 한자어 수
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국어에는 두 가지 숫자 체계가 있습니다. 순우리말 숫자(하나, 둘, 셋...)와 한자어 숫자(일, 이, 삼...)입니다. 언제 어느 것을 쓰는지 헷갈리는 경우가 많습니다. 규칙은 이렇습니다: 시간(몇 시)을 말할 때는 순우리말 숫자를 사용하고("두 시 - 2 o'clock"), 분(分)을 말할 때는 한자어 숫자를 사용합니다("삼십 분 - 30 minutes"). 또한 물건 개수를 셀 때는 순우리말 숫자에 단위를 붙이고("세 개 - 3 pieces"), 나이, 돈, 날짜, 전화번호 등에는 한자어 숫자를 씁니다("이십오 살 - 25 years old"). 이 두 체계를 명확히 구분하는 것이 자연스러운 한국어 구사에 중요합니다.
                    </p>
                </article>
                {/* ───────── 아티클 섹션 끝 ───────── */}

                <div className="space-y-6">
                    {data.map((item: MistakeItem) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center font-bold text-sm">
                                    {item.id}
                                </span>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* 잘못된 예 */}
                                <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/30">
                                    <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold text-sm uppercase tracking-wider">
                                        <XCircle className="w-4 h-4" /> {t.mistake}
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        {item.badExample}
                                    </p>
                                </div>

                                {/* 올바른 예 */}
                                <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-4 border border-green-100 dark:border-green-900/30">
                                    <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-wider">
                                        <CheckCircle className="w-4 h-4" /> {t.correction}
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        {item.goodExample}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 flex gap-2 mb-4">
                                    <span className="font-bold text-indigo-600 dark:text-indigo-400">💡 {t.tip}:</span>
                                    {item.tip}
                                </p>

                                {item.advanced && (
                                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-900/30">
                                        <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                                            🚀 {t.advanced}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                                            {item.advanced}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
