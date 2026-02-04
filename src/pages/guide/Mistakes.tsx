import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { MistakeItem } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';

export default function Mistakes() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.mistakes;
    const data = guideData[targetLanguage].mistakes;

    return (
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
                            {/* Bad Example */}
                            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/30">
                                <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold text-sm uppercase tracking-wider">
                                    <XCircle className="w-4 h-4" /> {t.mistake}
                                </div>
                                <p className="text-gray-800 dark:text-gray-200 font-medium">
                                    {item.badExample}
                                </p>
                            </div>

                            {/* Good Example */}
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
                            <p className="text-sm text-gray-500 dark:text-gray-400 flex gap-2">
                                <span className="font-bold text-indigo-600 dark:text-indigo-400">💡 {t.tip}:</span>
                                {item.tip}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
