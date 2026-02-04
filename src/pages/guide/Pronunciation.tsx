import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, Mic } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { PronunciationRule } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';

export default function Pronunciation() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.pronunciation;
    const data = guideData[targetLanguage].pronunciation;

    return (
        <div className="max-w-3xl mx-auto animate-fade-in space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                        <Volume2 className="w-8 h-8 text-blue-500" />
                        {t.title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {data.map((rule: PronunciationRule) => (
                    <div key={rule.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-sm">
                                {rule.id}
                            </span>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{rule.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {rule.description}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {rule.examples.map((ex, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center relative overflow-hidden group">
                                    <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Mic className="w-12 h-12 text-blue-500" />
                                    </div>

                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{t.written}</span>
                                    <div className="text-2xl font-black text-gray-800 dark:text-white mb-1">{ex.word}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono">{ex.romanized}</div>

                                    <div className="w-full h-px bg-gray-200 dark:bg-gray-600 my-2"></div>

                                    <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-1">{t.pronounced}</span>
                                    <div className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-1">{ex.pronunciation}</div>
                                    {ex.meaning && <div className="text-sm text-gray-500 dark:text-gray-400 italic">"{ex.meaning}"</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
