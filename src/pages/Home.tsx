import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function Home() {
    const { name, setName, targetLanguage } = useUser();
    const inputRef = useRef<HTMLInputElement>(null);

    const t = translations[targetLanguage];

    const handleSaveName = () => {
        if (inputRef.current && inputRef.current.value.trim()) {
            setName(inputRef.current.value.trim());
        }
    };

    if (!name) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">{t.home.welcome}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t.home.askName}</p>

                <div className="flex gap-4 w-full max-w-md">
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
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-12">
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
                    <Link
                        to="/quiz"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-100 dark:border-gray-700 rounded-full font-semibold text-lg shadow-md hover:border-indigo-600 dark:hover:border-indigo-400 hover:shadow-lg hover:scale-105 transition-all transform duration-200"
                    >
                        {t.home.takeQuiz} <Globe className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

