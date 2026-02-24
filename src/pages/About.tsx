import { ArrowLeft, BookOpen, Clock, Globe, Users, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';
import { Helmet } from 'react-helmet-async';

export default function About() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].about;

    return (
        <>
            <Helmet>
                <title>About Hangle – Your Korean Language Learning Companion</title>
                <meta
                    name="description"
                    content="Learn about Hangle, the interactive Korean language learning app. Discover Korean idioms, grammar, pronunciation, and cultural insights through flashcards, AI conversation, and quizzes."
                />
            </Helmet>

            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8 px-4">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t.backToHome}
                </Link>

                <header className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4 dark:bg-indigo-900/30 dark:text-indigo-400">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </header>

                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
                    <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-lg leading-relaxed text-center">
                            {t.intro}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-3">
                            <Globe className="w-8 h-8 text-indigo-500" />
                            <h3 className="font-bold text-gray-900 dark:text-white">{t.features.practical.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t.features.practical.desc}</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-3">
                            <Clock className="w-8 h-8 text-pink-500" />
                            <h3 className="font-bold text-gray-900 dark:text-white">{t.features.simple.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t.features.simple.desc}</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-3">
                            <BookOpen className="w-8 h-8 text-purple-500" />
                            <h3 className="font-bold text-gray-900 dark:text-white">{t.features.quiz.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t.features.quiz.desc}</p>
                        </div>
                    </div>

                    {/* ───────── SEO 아티클 섹션 ───────── */}
                    <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Hangle로 한국어를 시작해야 하는 이유
                        </h2>
                        <p className="leading-relaxed">
                            한국어(Korean)는 전 세계에서 약 8,000만 명이 사용하는 언어입니다. K-Pop, K-Drama, K-Food의 세계적인 인기에 힘입어 최근 몇 년 사이 한국어 학습 수요가 폭발적으로 증가하고 있습니다. 미국, 호주, 동남아시아, 유럽 등 전 세계에서 한국어는 가장 빠르게 성장하는 외국어 학습 분야 중 하나가 되었습니다.
                        </p>
                        <p className="leading-relaxed">
                            Hangle은 이런 한국어 학습자들을 위해 설계된 스마트 학습 애플리케이션입니다. 단순한 어휘 암기에서 벗어나, 실제 대화에서 쓰이는 관용어(idioms)와 일상 표현(daily expressions)을 중심으로 학습합니다. 원어민들이 실제로 대화에서 쓰는 표현들을 배움으로써, 교과서에서는 배울 수 없는 살아있는 한국어를 익힐 수 있습니다.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-yellow-500" /> Hangle의 핵심 학습 기능
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">①</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">플래시카드(Flashcards)</strong> – 스스로 아는 단어와 모르는 단어를 분류하며, 효율적인 반복 학습 시스템을 통해 어휘를 장기 기억으로 전환합니다. 각 카드에는 한국어 표현, 발음 기호, 예문, 번역이 모두 포함되어 있습니다.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">②</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">AI 대화 연습(Conversation)</strong> – AI를 활용한 실전 한국어 대화 연습. 여러 상황(카페, 여행, 비즈니스 등)에서 사용할 법한 예문을 통해 실전 감각을 키울 수 있습니다.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">③</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">퀴즈(Quiz)</strong> – 객관식 퀴즈로 학습 내용을 점검합니다. 즉각적인 피드백과 함께 정답/오답 여부를 확인하고 부족한 부분을 보완합니다.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">④</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">발음 가이드(Pronunciation Guide)</strong> – 한국어 발음의 5대 핵심 규칙(받침, 연음, 자음동화, 격음화, 경음화)을 예시와 함께 설명합니다.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">⑤</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">문법 가이드(Grammar Guide)</strong> – 조사, 시제, 경어법, 연결어미 등 필수 한국어 문법 패턴을 체계적으로 학습합니다.
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Target className="w-6 h-6 text-red-500" /> 어떤 학습자에게 적합한가?
                        </h3>
                        <p className="leading-relaxed">
                            Hangle은 다양한 수준의 한국어 학습자를 지원합니다. 한국어를 처음 시작하는 절대 초보자부터, 기본 문법은 알지만 실제 대화가 어려운 중급자까지 모두 활용할 수 있습니다. K-Pop, K-Drama 팬으로서 좋아하는 콘텐츠를 더 깊이 이해하고 싶은 분들, 한국 여행을 준비 중인 분들, 한국 비즈니스 파트너와 소통하고 싶은 분들, 한국인과 더 가까운 관계를 맺고 싶은 분들 모두에게 Hangle은 최적의 학습 도우미가 될 것입니다.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-500" /> 다국어 지원
                        </h3>
                        <p className="leading-relaxed">
                            Hangle은 현재 영어(English), 스페인어(Español), 일본어(日本語), 프랑스어(Français), 태국어(ภาษาไทย), 중국어 간체(简体中文), 중국어 번체(繁體中文), 힌디어(हिन्दी) 총 8개 언어로 제공됩니다. 각 언어로 한국어 학습 가이드와 번역을 제공하여, 전 세계 어디에서나 여러분의 모국어로 한국어를 배울 수 있도록 설계되었습니다. 앞으로도 더 많은 언어 지원을 추가할 예정입니다.
                        </p>
                    </section>
                    {/* ───────── 아티클 섹션 끝 ───────── */}
                </div>
            </div>
        </>
    );
}
