import { Link, Outlet } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Layout() {
    const { name, level, xp, logout } = useUser();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
            logout();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:opacity-80 transition">
                        <BookOpen className="w-6 h-6" />
                        <span className="text-xl font-bold tracking-tight">Hangle</span>
                    </Link>

                    {name && (
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
                                <span className="text-sm font-bold text-gray-700">Lv. {level}</span>
                                <div className="w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500"
                                        style={{ width: `${(xp % 100)}%` }}
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-500">{xp % 100} / 100 XP</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-xs text-gray-400 hover:text-red-500 font-medium underline transition"
                            >
                                Reset
                            </button>
                        </div>
                    )}

                    <nav className="flex gap-4">
                        <Link to="/categories" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Learn
                        </Link>
                        <Link to="/quiz" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Quiz
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Hangle. Enjoy learning Korean!</p>
            </footer>
        </div>
    );
}
