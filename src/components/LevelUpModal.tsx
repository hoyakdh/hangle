import { Trophy, X } from 'lucide-react';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface LevelUpModalProps {
    level: number;
    onClose: () => void;
}

export default function LevelUpModal({ level, onClose }: LevelUpModalProps) {
    useEffect(() => {
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#ec4899', '#fbbf24']
        });
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center relative transform transition-all scale-100 animate-bounce-subtle">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="mb-6 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <Trophy className="w-24 h-24 text-yellow-400 relative z-10 drop-shadow-md" />
                    </div>
                </div>

                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">
                    LEVEL UP!
                </h2>

                <p className="text-gray-600 font-medium text-lg mb-8">
                    You reached <span className="text-indigo-600 font-bold">Level {level}</span>
                </p>

                <button
                    onClick={onClose}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-indigo-200 hover:scale-[1.02] transition-all"
                >
                    Awesome!
                </button>
            </div>
        </div>
    );
}
