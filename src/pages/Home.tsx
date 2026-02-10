import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, Calendar } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';
import { vocabData } from '../data/vocab';

import SEO from '../components/SEO';

export default function Home() {
    const { name, setName, targetLanguage } = useUser();
    const inputRef = useRef<HTMLInputElement>(null);

    const t = translations[targetLanguage];

    // Calculate Daily Phrase
    const dailyPhrase = useMemo(() => {
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = (today.getTime() - start.getTime()) + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Use dayOfYear to select a phrase cyclically
        return vocabData[dayOfYear % vocabData.length];
    }, []);

    const playAudio = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const handleSaveName = () => {
        if (inputRef.current && inputRef.current.value.trim()) {
            setName(inputRef.current.value.trim());
        }
    };

    if (!name) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <SEO
                    title="Welcome to Hangle"
                    description="Start your Korean learning journey today. Enter your name to begin."
                />
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{t.home.welcome}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg text-center px-4">
                    {t.home.welcomeDescription}
                </p>
                <p className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-6">{t.home.askName}</p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-8 px-4">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={t.home.namePlaceholder}
                        className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none text-lg transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    />
                    <button
                        onClick={handleSaveName}
                        className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition transform hover:scale-105"
                    >
                        {t.home.start}
                    </button>
                </div>

                <p className="text-sm text-gray-400 dark:text-gray-500 max-w-md text-center px-4 leading-relaxed">
                    {t.home.dataWarning}
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-12">
            <SEO
                title={t.home.title}
                description={t.home.description}
            />
            {/* Hero Section */}
            <div className="space-y-6 max-w-2xl animate-fade-in">
                <div className="inline-block px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-bold rounded-full mb-4 animate-bounce-subtle">
                    {t.home.greeting.replace('{name}', name)}
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {t.home.title} <br />
                    <span className="text-indigo-600 dark:text-indigo-400">{t.home.subtitle}</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    {t.home.description}
                </p>
                <div className="pt-4 flex flex-col gap-4 items-center">
                    <Link
                        to="/categories"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all transform duration-200"
                    >
                        {t.home.startLearning} <ArrowRight className="w-5 h-5" />
                    </Link>

                </div>

                {/* Daily Phrase Widget */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-indigo-50 dark:border-gray-700 transform hover:scale-[1.02] transition-transform duration-300 text-left">
                    <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider justify-center">
                        <Calendar className="w-4 h-4" />
                        {t.home.dailyPhrase.title}
                    </div>

                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        {dailyPhrase.korean}
                    </div>
                    <div className="text-lg text-gray-500 dark:text-gray-400 mb-4 text-center">
                        {dailyPhrase.romanized}
                    </div>

                    <div className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-6 text-center">
                        {targetLanguage === 'en' && dailyPhrase.english}
                        {targetLanguage === 'es' && dailyPhrase.spanish}
                        {targetLanguage === 'ja' && dailyPhrase.japanese}
                        {targetLanguage === 'fr' && dailyPhrase.french}
                        {targetLanguage === 'th' && dailyPhrase.thai}
                        {targetLanguage === 'zh' && dailyPhrase.chinese}
                        {targetLanguage === 'hi' && dailyPhrase.hindi}
                    </div>

                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={() => playAudio(dailyPhrase.korean)}
                            className="p-3 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
                        >
                            <Volume2 className="w-5 h-5" />
                        </button>
                        <Link
                            to={`/learn/${dailyPhrase.category}`}
                            className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm flex items-center"
                        >
                            {t.home.dailyPhrase.learnMore}
                        </Link>
                    </div>
                </div>

                {/* SEO Content Section */}
                <div className="mt-16 text-left space-y-8 max-w-3xl mx-auto px-4">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Learn Korean with Hangle?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hangle is the ultimate companion for mastering Korean idioms and daily expressions.
                            Whether you are preparing for a trip to Korea, studying for the TOPIK exam, or simply interested in K-Culture,
                            understanding idioms is key to sounding like a native speaker. Our app provides curated vocabulary cards,
                            native pronunciation audio, and fun quizzes to help you memorize efficiently.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Features
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                            <li><strong>Daily Phrase:</strong> Learn a new Korean expression every day.</li>
                            <li><strong>Categorized Learning:</strong> Explore vocabulary by topics like Travel, Food, Emotions, and more.</li>
                            <li><strong>Interactive Quizzes:</strong> Test your knowledge with fun and challenging quizzes.</li>
                            <li><strong>Pronunciation Practice:</strong> Listen to native audio and improve your speaking skills.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            How to Use This App
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Start by exploring the <Link to="/categories" className="text-indigo-600 hover:underline">Categories</Link> page to find topics that interest you.
                            Use the Flashcards to memorize new words, and then challenge yourself in the <Link to="/quiz" className="text-indigo-600 hover:underline">Quiz</Link> section.
                            Don't forget to check the Daily Phrase every day to keep your streak alive!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

