import { ArrowLeft, BookOpen, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function About() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].about;

    return (
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
            </div>
        </div>
    );
}
