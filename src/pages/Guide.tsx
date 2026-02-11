import { Link } from 'react-router-dom';
import { Volume2, Book, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function Guide() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide;

    const guides = [
        {
            id: 'pronunciation',
            title: t.pronunciation.title,
            subtitle: t.pronunciation.subtitle,
            description: t.pronunciation.description,
            icon: Volume2,
            color: "bg-blue-500",
            link: "/guide/pronunciation"
        },
        {
            id: 'grammar',
            title: t.grammar.title,
            subtitle: t.grammar.subtitle,
            description: t.grammar.description,
            icon: Book,
            color: "bg-emerald-500",
            link: "/guide/grammar"
        },
        {
            id: 'mistakes',
            title: t.mistakes.title,
            subtitle: t.mistakes.subtitle,
            description: t.mistakes.description,
            icon: AlertTriangle,
            color: "bg-orange-500",
            link: "/guide/mistakes"
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    {t.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {guides.map((guide) => (
                    <Link
                        key={guide.id}
                        to={guide.link}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col items-center text-center"
                    >
                        <div className={`w-16 h-16 ${guide.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                            <guide.icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {guide.title}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wider">
                            {guide.subtitle}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                            {guide.description}
                        </p>

                        <div className="mt-auto flex items-center font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {t.explore} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
