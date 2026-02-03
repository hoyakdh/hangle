import { Link, Outlet } from 'react-router-dom';
import { BookOpen, Moon, Sun } from 'lucide-react';
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
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between relative">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition">
                        <BookOpen className="w-6 h-6" />
                        <span className="text-xl font-bold tracking-tight">Hangle</span>
                    </Link>

                    {/* Center: User Profile (Desktop Only) */}
                    {name && (
                        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-4">
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
                    <nav className="flex items-center gap-4">
                        <div className="relative group">
                            <select
                                value={targetLanguage}
                                onChange={(e) => setTargetLanguage(e.target.value as 'en' | 'es' | 'ja')}
                                className="appearance-none bg-transparent font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1 pl-2 pr-6 cursor-pointer focus:outline-none"
                            >
                                <option value="en" className="bg-white dark:bg-gray-800">🇺🇸 EN</option>
                                <option value="es" className="bg-white dark:bg-gray-800">🇪🇸 ES</option>
                                <option value="ja" className="bg-white dark:bg-gray-800">🇯🇵 JA</option>
                            </select>
                            {/* Custom Arrow Icon can be added here if needed, or rely on browser default but styled */}
                        </div>

                        <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">
                            Learn
                        </Link>
                        <Link to="/quiz" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">
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
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-6 text-center text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
                <p>© {new Date().getFullYear()} Hangle. Enjoy learning Korean!</p>
            </footer>
        </div>
    );
}
