import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function QuizCategories() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage];

    const baseCategories = [
        { id: 'airport', color: 'bg-blue-500' },
        { id: 'taxi', color: 'bg-yellow-500' },
        { id: 'bus', color: 'bg-green-500' },
        { id: 'subway', color: 'bg-orange-500' },
        { id: 'restaurant', color: 'bg-red-500' },
        { id: 'hotel', color: 'bg-indigo-500' },
        { id: 'tourist', color: 'bg-purple-500' },
        { id: 'daily', color: 'bg-pink-500' },
        { id: 'emergency', color: 'bg-red-600' },
        { id: 'hospital', color: 'bg-emerald-500' },
    ];

    // Merge base config with translations
    const categories = baseCategories.map(cat => ({
        ...cat,
        ...t.categories.items[cat.id as keyof typeof t.categories.items]
    }));

    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    {t.quiz.quizModeTitle}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {t.quiz.quizModeSubtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/quiz/${cat.id}`}
                        className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                        <div className={`h-2 ${cat.color}`} />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">{cat.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO Content Section */}
            <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {t.quiz.seo?.title || "Why Take Korean Quizzes?"}
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl">
                        <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">
                            {t.quiz.seo?.headers?.memory || "Memory"}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t.quiz.seo?.benefits?.memory || "Active recall testing strengthens your memory of new vocabulary."}
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
                        <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">
                            {t.quiz.seo?.headers?.confidence || "Confidence"}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t.quiz.seo?.benefits?.confidence || "Gain Confidence: Validating your knowledge helps you feel more ready to speak."}
                        </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
                        <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                            {t.quiz.seo?.headers?.fun || "Fun"}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t.quiz.seo?.benefits?.fun || "Make Learning Fun: Gamified quizzes make the learning process less tedious and more engaging."}
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {t.quiz.seo?.headers?.tips || "Quiz Tips"}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {t.quiz.seo?.tips || "Don't worry about making mistakes! Reviewing your errors is one of the best ways to learn."}
                    </p>
                </div>
            </div>
        </div>
    );
}
