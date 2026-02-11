
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { vocabData } from '../data/vocab';
import { translations } from '../data/translations';
import { Star, Volume2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Bookmarks() {
    const { bookmarks, toggleBookmark, targetLanguage } = useUser();
    const t = translations[targetLanguage];

    // Filter bookmarks
    const bookmarkedItems = vocabData.filter(item => bookmarks.includes(item.id));

    // Audio Playback
    const playAudio = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <SEO
                title={t.home.bookmarks}
                description="Review your bookmarked Korean vocabulary. Manage your saved words and practice them anytime."
            />

            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-500 fill-current" />
                    {t.home.bookmarks}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {t.bookmarks?.desc || "Found a difficult word? Tap the star icon on any flashcard to save it here for later review."}
                </p>
            </div>

            {bookmarkedItems.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl">
                    <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">{t.bookmarks?.noBookmarks || "No bookmarks yet."}</p>
                    <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto">
                        {t.bookmarks?.desc || "Found a difficult word? Tap the star icon on any flashcard to save it here for later review."}
                    </p>
                    <Link to="/categories" className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        {t.home.startLearning}
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {bookmarkedItems.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col relative group hover:shadow-md transition">
                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.korean}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.romanized}</p>
                                </div>
                                <button
                                    onClick={() => toggleBookmark(item.id)}
                                    className="text-yellow-400 hover:text-yellow-500 transition-colors p-1"
                                >
                                    <Star className="w-6 h-6 fill-current" />
                                </button>
                            </div>

                            <div className="mt-auto">
                                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                                    {targetLanguage === 'en' && item.english}
                                    {targetLanguage === 'es' && item.spanish}
                                    {targetLanguage === 'ja' && item.japanese}
                                    {targetLanguage === 'fr' && item.french}
                                    {targetLanguage === 'th' && item.thai}
                                    {targetLanguage === 'zh' && item.chinese}
                                    {targetLanguage === 'zh-TW' && (item.traditional_chinese || item.chinese)}
                                    {targetLanguage === 'hi' && item.hindi}
                                </p>
                                <button
                                    onClick={() => playAudio(item.korean)}
                                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                                >
                                    <Volume2 className="w-4 h-4" /> {t.bookmarks?.listen || "Listen"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 pb-8">
                <p>
                    {t.bookmarks?.tip || "Tip: Regular review is the key to long-term memory. Try to visit your bookmarks everyday and remove the words you have fully mastered."}
                </p>
            </div>
        </div>
    );
}
