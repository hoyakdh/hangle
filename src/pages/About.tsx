import { ArrowLeft, BookOpen, Clock, Globe, Users, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';
import { Helmet } from 'react-helmet-async';

export default function About() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].about;
    // 아티클 섹션은 다국어를 지원하는 별도 번역 키 사용
    const a = t.article;

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

                    {/* ───────── 다국어 지원 아티클 섹션 ───────── */}
                    <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {a.sectionTitle}
                        </h2>
                        <p className="leading-relaxed">{a.introPara}</p>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-yellow-500" /> {a.featuresTitle}
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">①</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">{a.f1Title}</strong>
                                    {' '}{a.f1Desc}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">②</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">{a.f2Title}</strong>
                                    {' '}{a.f2Desc}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">③</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">{a.f3Title}</strong>
                                    {' '}{a.f3Desc}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">④</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">{a.f4Title}</strong>
                                    {' '}{a.f4Desc}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-indigo-500 font-bold">⑤</span>
                                <div>
                                    <strong className="text-gray-900 dark:text-white">{a.f5Title}</strong>
                                    {' '}{a.f5Desc}
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Target className="w-6 h-6 text-red-500" /> {a.whoTitle}
                        </h3>
                        <p className="leading-relaxed">{a.whoPara}</p>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-500" /> {a.langTitle}
                        </h3>
                        <p className="leading-relaxed">{a.langPara}</p>
                    </section>
                    {/* ───────── 아티클 섹션 끝 ───────── */}
                </div>
            </div>
        </>
    );
}
