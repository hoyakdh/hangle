import { useState } from 'react';
import { Send, Bug, Lightbulb, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

type FeedbackType = 'issue' | 'idea';

export default function Feedback() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].feedback;

    const [type, setType] = useState<FeedbackType>('issue');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');

    const handleSend = () => {
        const subject = `[${type === 'issue' ? 'Issue' : 'Idea'}] Feedback`;

        const body = `Type: ${type === 'issue' ? 'Issue (버그/이슈)' : 'Idea (아이디어)'}\n\nContent:\n${content}\n\nUser Email: ${email}`;

        window.location.href = `mailto:hangle.conversation.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t.backToHome}
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                {t.title}
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">

                {/* Type Selector */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setType('issue')}
                        className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${type === 'issue'
                            ? 'bg-gray-100 dark:bg-gray-700 border-transparent ring-2 ring-indigo-500/20'
                            : 'bg-gray-50 dark:bg-gray-700/50 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        <div className={`flex items-center gap-2 font-bold mb-1 ${type === 'issue' ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                            <Bug className="w-5 h-5" />
                            <span>{t.issue}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t.issueDesc}</p>
                    </button>

                    <button
                        onClick={() => setType('idea')}
                        className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${type === 'idea'
                            ? 'bg-gray-100 dark:bg-gray-700 border-transparent ring-2 ring-amber-500/20'
                            : 'bg-gray-50 dark:bg-gray-700/50 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        <div className={`flex items-center gap-2 font-bold mb-1 ${type === 'idea' ? 'text-amber-500' : 'text-gray-600 dark:text-gray-300'}`}>
                            <Lightbulb className="w-5 h-5" />
                            <span>{t.idea}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t.ideaDesc}</p>
                    </button>
                </div>

                {/* Content Input */}
                <div className="space-y-2">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={t.contentPlaceholder}
                        className="w-full h-40 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-gray-700 dark:text-gray-200 placeholder-gray-400"
                    />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        {t.emailLabel}
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-gray-700 dark:text-gray-200 placeholder-gray-400"
                    />
                </div>

                {/* Send Button */}
                <div className="flex justify-end pt-2">
                    <button
                        onClick={handleSend}
                        disabled={!content.trim()}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <span>{t.send}</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
