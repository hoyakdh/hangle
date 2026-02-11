import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';
import { conversationData } from '../data/conversation';
import { MessageCircle, ArrowLeft, Eye, EyeOff, User, Bot } from 'lucide-react';

export default function Conversation() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);

    const langKey = targetLanguage === 'en' ? 'english' :
        targetLanguage === 'es' ? 'spanish' :
            targetLanguage === 'ja' ? 'japanese' :
                targetLanguage === 'fr' ? 'french' :
                    targetLanguage === 'th' ? 'thai' :
                        targetLanguage === 'zh' ? 'chinese' :
                            targetLanguage === 'zh-TW' ? 'traditional_chinese' :
                                'hindi';

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

    const toggleAnswer = (id: number) => {
        setVisibleAnswers(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const categories = baseCategories.map(cat => ({
        ...cat,
        name: t.categories.items[cat.id as keyof typeof t.categories.items]?.name || cat.id,
        description: t.categories.items[cat.id as keyof typeof t.categories.items]?.description || ''
    }));

    if (selectedCategory) {
        const categoryData = conversationData.filter(item => item.category === selectedCategory);
        const categoryInfo = categories.find(c => c.id === selectedCategory);

        return (
            <div className="space-y-6">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t.conversation.back}</span>
                </button>

                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-3 h-12 rounded-full ${categoryInfo?.color}`} />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {categoryInfo?.name}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            {t.conversation.subtitle}
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {categoryData.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            {t.conversation.noData}
                        </div>
                    ) : (
                        categoryData.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                                {/* Question - Person A */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                        <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{t.conversation.question}</div>
                                        <div className="text-xl font-bold text-gray-900 dark:text-white">{item.question.korean}</div>
                                        <div className="text-gray-500 dark:text-gray-400 font-medium">{item.question.romanized}</div>
                                        <div className="text-gray-400 dark:text-gray-500 text-sm">
                                            {item.question[langKey]}
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 dark:bg-gray-700" />

                                {/* Answer - Person B */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wide">{t.conversation.answer}</div>
                                            <button
                                                onClick={() => toggleAnswer(item.id)}
                                                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                                title={visibleAnswers.includes(item.id) ? "Hide Answer" : "Show Answer"}
                                            >
                                                {visibleAnswers.includes(item.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        <div
                                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${visibleAnswers.includes(item.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className={`space-y-6 pt-2 transition-opacity duration-300 ${visibleAnswers.includes(item.id) ? 'opacity-100' : 'opacity-0'
                                                    }`}>
                                                    {item.answers.map((answer, index) => (
                                                        <div key={index} className="relative">
                                                            {index > 0 && <div className="absolute -top-3 left-0 right-0 border-t border-dashed border-gray-200 dark:border-gray-700" />}
                                                            <div className="text-xs text-gray-400 mb-1">{t.conversation.option} {index + 1}</div>
                                                            <div className="text-xl font-bold text-gray-900 dark:text-white">{answer.korean}</div>
                                                            <div className="text-gray-500 dark:text-gray-400 font-medium">{answer.romanized}</div>
                                                            <div className="text-gray-400 dark:text-gray-500 text-sm">
                                                                {answer[langKey]}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    {t.conversation.mainTitle}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {t.conversation.mainDesc}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-left"
                    >
                        <div className={`h-2 ${cat.color}`} />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                                {cat.description}
                            </p>
                            <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                {t.conversation.start} <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
