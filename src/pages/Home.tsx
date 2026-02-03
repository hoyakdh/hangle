import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Home() {
    const { name, setName } = useUser();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSaveName = () => {
        if (inputRef.current && inputRef.current.value.trim()) {
            setName(inputRef.current.value.trim());
        }
    };

    if (!name) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Welcome to Hangle!</h1>
                <p className="text-xl text-gray-600 mb-8">What should we call you?</p>

                <div className="flex gap-4 w-full max-w-md">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Enter your name"
                        className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg transition-colors"
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    />
                    <button
                        onClick={handleSaveName}
                        className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition transform hover:scale-105"
                    >
                        Start
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-12">
            {/* Hero Section */}
            <div className="space-y-6 max-w-2xl animate-fade-in">
                <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-full mb-4 animate-bounce-subtle">
                    Hello, {name}! Ready to learn?
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                    Master Basic Korean <br />
                    <span className="text-indigo-600">For Your Trip</span>
                </h1>
                <p className="text-xl text-gray-600">
                    Learn essential phrases for travel and daily life. <br />
                    Simple cards, native pronunciation, and fun quizzes.
                </p>
                <div className="pt-4 flex flex-col gap-4 items-center">
                    <Link
                        to="/categories"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all transform duration-200"
                    >
                        Start Learning <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        to="/quiz"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 rounded-full font-semibold text-lg shadow-md hover:border-indigo-600 hover:shadow-lg hover:scale-105 transition-all transform duration-200"
                    >
                        Take a Quiz <Globe className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
