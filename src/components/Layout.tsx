import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, Moon, Sun, Globe, ChevronDown, RotateCcw, Star, Search, MessageCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function Layout() {
    const { name, level, xp, logout, theme, toggleTheme, targetLanguage, setTargetLanguage } = useUser();
    const t = translations[targetLanguage];
    const location = useLocation();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
            logout();
        }
    };

    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans transition-colors duration-300 pb-20 md:pb-0">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 h-16 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center relative gap-4">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition justify-self-start col-start-1">
                        <BookOpen className="w-6 h-6" />
                        <span className="text-xl font-bold tracking-tight">Hangle</span>
                    </Link>

                    {/* Center: User Profile (Desktop Only) */}
                    {name && (
                        <div className="hidden md:flex items-center gap-4 justify-self-center col-start-2 whitespace-nowrap">
                            <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transition-colors">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Lv. {level}</span>
                                <div className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500"
                                        style={{ width: `${(xp % 100)}%` }}
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{xp % 100} / 100 XP</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition"
                                title="Reset Progress"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {/* Right: Nav & Settings */}
                    <nav className="flex items-center gap-3 md:gap-4 justify-self-end col-start-3">
                        <Link to="/search" className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition" title={t.home.search}>
                            <Search className="w-5 h-5" />
                        </Link>
                        <div className="relative flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1.5 md:px-3 transition-colors group hover:bg-gray-200 dark:hover:bg-gray-600">
                            <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400 md:mr-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                            <select
                                value={targetLanguage}
                                onChange={(e) => setTargetLanguage(e.target.value as 'en' | 'es' | 'ja')}
                                className="appearance-none bg-transparent font-medium text-sm text-gray-700 dark:text-gray-200 cursor-pointer focus:outline-none pr-4 md:pr-6 z-10 max-w-[50px] md:max-w-none text-center"
                            >
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                                <option value="ja">JP</option>
                            </select>
                            <ChevronDown className="w-3 h-3 text-gray-500 dark:text-gray-400 absolute right-2 md:right-3 pointer-events-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                        </div>

                        <Link to="/categories" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition whitespace-nowrap">
                            Learn
                        </Link>
                        <Link to="/conversation" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition whitespace-nowrap">
                            Talk
                        </Link>
                        <Link to="/bookmarks" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition whitespace-nowrap">
                            Bookmarks
                        </Link>
                        <Link to="/quiz" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition whitespace-nowrap">
                            Quiz
                        </Link>
                        <Link to="/guide" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition whitespace-nowrap">
                            Guide
                        </Link>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-8 text-center text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
                <p className="mb-4">© {new Date().getFullYear()} Hangle. Enjoy learning Korean!</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
                    <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
                    <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
                    <Link to="/feedback" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Feedback</Link>
                </div>
            </footer>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 pb-safe pt-2 px-6 flex justify-between items-center z-50 transition-colors duration-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <Link to="/categories" className={`flex flex-col items-center p-2 rounded-xl transition-colors ${isActive('/categories') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                    <BookOpen className={`w-6 h-6 mb-1 ${isActive('/categories') ? 'fill-current opacity-20' : ''}`} />
                    <span className="text-xs font-medium">Learn</span>
                </Link>

                <Link to="/conversation" className={`flex flex-col items-center p-2 rounded-xl transition-colors ${isActive('/conversation') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                    <MessageCircle className={`w-6 h-6 mb-1 ${isActive('/conversation') ? 'fill-current opacity-20' : ''}`} />
                    <span className="text-xs font-medium">Talk</span>
                </Link>

                <Link to="/bookmarks" className={`flex flex-col items-center p-2 rounded-xl transition-colors ${isActive('/bookmarks') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                    <Star className={`w-6 h-6 mb-1 ${isActive('/bookmarks') ? 'fill-current' : ''}`} />
                    <span className="text-xs font-medium">Bookmarks</span>
                </Link>

                {name && (
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-indigo-500 to-pink-500" style={{ width: `${(xp % 100)}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">Lv. {level}</span>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="p-1.5 text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition"
                            title="Reset Progress"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                )}

                <Link to="/quiz" className={`flex flex-col items-center p-2 rounded-xl transition-colors ${isActive('/quiz') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                    <Globe className={`w-6 h-6 mb-1 ${isActive('/quiz') ? 'fill-current opacity-20' : ''}`} />
                    <span className="text-xs font-medium">Quiz</span>
                </Link>

                <Link to="/guide" className={`flex flex-col items-center p-2 rounded-xl transition-colors ${isActive('/guide') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                    <BookOpen className={`w-6 h-6 mb-1 ${isActive('/guide') ? 'fill-current opacity-20' : ''}`} />
                    <span className="text-xs font-medium">Guide</span>
                </Link>
            </div>
        </div>
    );
}
