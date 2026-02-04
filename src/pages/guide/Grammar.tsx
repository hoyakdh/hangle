
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, Search } from 'lucide-react';
import { guideData } from '../../data/guideData';
import type { GrammarItem } from '../../data/guideData';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';

export default function Grammar() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide.grammar;
    const data = guideData[targetLanguage].grammar;
    const [searchTerm, setSearchTerm] = useState("");

    const filteredGrammar = data.filter(item =>
        item.expression.includes(searchTerm) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                    <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            <Book className="w-8 h-8 text-emerald-500" />
                            {t.title}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {t.description}
                        </p>
                    </div>
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-16 text-center">#</th>
                                <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-1/4">{t.headers.expression}</th>
                                <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700 w-1/4">{t.headers.meaning}</th>
                                <th className="p-4 font-semibold border-b border-gray-100 dark:border-gray-700">{t.headers.example}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {filteredGrammar.length > 0 ? (
                                filteredGrammar.map((item: GrammarItem) => (
                                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="p-4 text-center text-gray-400 dark:text-gray-500 font-mono text-sm">{item.id}</td>
                                        <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400 text-lg">{item.expression}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300 font-medium">{item.meaning}</td>
                                        <td className="p-4 text-gray-700 dark:text-gray-200">{item.example}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        {t.notFound} "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
