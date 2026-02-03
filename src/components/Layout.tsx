import { Link, Outlet } from 'react-router-dom';
import { BookOpen, Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Layout() {
    const { name, level, xp, logout, theme, toggleTheme, targetLanguage, setTargetLanguage } = useUser();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
            logout();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans transition-colors duration-300">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 h-16 grid grid-cols-[1fr_auto_1fr] items-center relative gap-4">
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
                                className="text-xs text-gray-400 dark:text-gray-500 hover:text-red-500 font-medium underline transition"
                            >
                                Reset
                            </button>
                        </div>
                    )}

                    {/* Right: Nav & Settings */}
                    <nav className="flex items-center gap-4 justify-self-end col-start-3">
                        <div className="relative flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1.5 transition-colors group hover:bg-gray-200 dark:hover:bg-gray-600">
                            <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                            <select
                                value={targetLanguage}
                                onChange={(e) => setTargetLanguage(e.target.value as 'en' | 'es' | 'ja')}
                                className="appearance-none bg-transparent font-medium text-sm text-gray-700 dark:text-gray-200 cursor-pointer focus:outline-none pr-6 z-10"
                            >
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="ja">日本語</option>
                            </select>
                            <ChevronDown className="w-3 h-3 text-gray-500 dark:text-gray-400 absolute right-3 pointer-events-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                        </div>

                        <Link to="/categories" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">
                            Learn
                        </Link>
                        <Link to="/quiz" className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">
                            Quiz
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
                <div className="flex justify-center gap-6">
                    <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
                </div>
            </footer>
        </div>
    );
}
