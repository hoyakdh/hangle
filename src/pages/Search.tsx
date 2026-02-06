import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { vocabData } from '../data/vocab';
import { guideData } from '../data/guideData';
import { translations } from '../data/translations';

import SEO from '../components/SEO';

export default function Search() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage];
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'all' | 'vocab' | 'grammar'>('all');

    // Filter Vocabulary
    const vocabResults = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return vocabData.filter(item =>
            item.korean.toLowerCase().includes(lowerQuery) ||
            item.romanized.toLowerCase().includes(lowerQuery) ||
            item.english.toLowerCase().includes(lowerQuery) ||
            item.spanish.toLowerCase().includes(lowerQuery) ||
            item.japanese.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    // Filter Grammar
    const grammarResults = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        // @ts-ignore
        const currentGuide = guideData[targetLanguage];
        if (!currentGuide || !currentGuide.grammar) return [];

        return currentGuide.grammar.filter((item: any) =>
            item.expression.toLowerCase().includes(lowerQuery) ||
            item.meaning.toLowerCase().includes(lowerQuery)
        );
    }, [query, targetLanguage]);

    const totalResults = vocabResults.length + grammarResults.length;

    return (
        <div className="max-w-3xl mx-auto py-8 text-gray-900 dark:text-gray-100 animate-fade-in">
            <SEO
                title="Dictionary Search"
                description="Search for Korean words, phrases, and grammar rules. Find translations and examples instantly."
            />
            {/* Header */}
            <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                    <ArrowLeft className="w-5 h-5 mr-2" /> {t.privacy.backToHome}
                </Link>
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder={t.search.placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-indigo-500 focus:outline-none shadow-sm text-lg transition-all"
                        autoFocus
                    />
                </div>
            </div>

            {/* Tabs */}
            {query.trim() && (
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        {t.search.tabs.all} ({totalResults})
                    </button>
                    <button
                        onClick={() => setActiveTab('vocab')}
                        className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${activeTab === 'vocab' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        {t.search.tabs.vocab} ({vocabResults.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('grammar')}
                        className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${activeTab === 'grammar' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        {t.search.tabs.grammar} ({grammarResults.length})
                    </button>
                </div>
            )}

            {/* Results */}
            <div className="space-y-8">
                {/* Vocabulary Results */}
                {query.trim() && (activeTab === 'all' || activeTab === 'vocab') && vocabResults.length > 0 && (
                    <section>
                        {activeTab === 'all' && <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-indigo-500" /> {t.search.tabs.vocab}</h2>}
                        <div className="grid gap-3 sm:grid-cols-2">
                            {vocabResults.map(item => (
                                <Link to={`/learn/${item.category}`} key={'v-' + item.id} className="block bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition">
                                    <div className="font-bold text-lg mb-1">{item.korean}</div>
                                    <div className="text-sm text-gray-500 mb-2">{item.romanized}</div>
                                    <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                                        {targetLanguage === 'en' && item.english}
                                        {targetLanguage === 'es' && item.spanish}
                                        {targetLanguage === 'ja' && item.japanese}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-2 text-right uppercase tracking-wider">{item.category}</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Grammar Results */}
                {query.trim() && (activeTab === 'all' || activeTab === 'grammar') && grammarResults.length > 0 && (
                    <section>
                        {activeTab === 'all' && <h2 className="text-lg font-bold mb-4 flex items-center gap-2 mt-2"><FileText className="w-5 h-5 text-rose-500" /> {t.search.tabs.grammar}</h2>}
                        <div className="space-y-3">
                            {grammarResults.map((item: any) => (
                                <Link to="/guide/grammar" key={'g-' + item.id} className="block bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-md transition">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-1">{item.expression}</div>
                                            <div className="text-gray-700 dark:text-gray-300 font-medium">{item.meaning}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                                        {item.example}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* No Results or Initial State */}
                {query.trim() && totalResults === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>{t.search.noResults} "{query}"</p>
                        <p className="text-sm mt-2 opacity-60">Try searching for simple words like "Hello", "Thank you", or "Food".</p>
                    </div>
                ) : !query.trim() && (
                    <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
                        <p className="mb-4 text-lg">Type any keyword to search across {vocabData.length} words and phrases.</p>
                        <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition" onClick={() => setQuery("Airport")}>Airport</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition" onClick={() => setQuery("Goreb")}>Goreb</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition" onClick={() => setQuery("Hello")}>Hello</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-20 border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-sm text-gray-400 px-4">
                <p>
                    Hangle Dictionary includes daily expressions, travel essentials, and basic grammar patterns.
                    Use English, Spanish, or Japanese keywords to find the Korean translation.
                </p>
            </div>
        </div>
    );
}
