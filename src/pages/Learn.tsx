import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vocabData } from '../data/vocab';
import { ChevronLeft, ChevronRight, Volume2, RotateCw, ArrowLeft, Check } from 'lucide-react';
import { useUser } from '../context/UserContext';
import LevelUpModal from '../components/LevelUpModal';

export default function Learn() {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { addXp, showLevelUp, level, closeLevelUp } = useUser();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const items = vocabData.filter(item => item.category === categoryId);
    const currentItem = items[currentIndex];

    // Local Storage for completed items
    const [completedItems, setCompletedItems] = useState<number[]>(() => {
        const saved = localStorage.getItem('hangle_completed');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('hangle_completed', JSON.stringify(completedItems));
    }, [completedItems]);

    const handleMarkAsDone = (id: number) => {
        if (!completedItems.includes(id)) {
            setCompletedItems(prev => [...prev, id]);
            addXp(10); // Award 10 XP
            // Move to next card automatically after a short delay if not the last one
            if (currentIndex < items.length - 1) {
                setTimeout(() => {
                    nextCard();
                }, 800);
            }
        }
    };

    const isCompleted = completedItems.includes(currentItem?.id);

    useEffect(() => {
        setCurrentIndex(0);
        setIsFlipped(false);
    }, [categoryId]);

    // Text-to-Speech
    const playAudio = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const nextCard = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
        }
    };

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold">Category not found</h2>
                <Link to="/categories" className="text-indigo-600 hover:underline mt-4 inline-block">Go back</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-8 max-w-lg mx-auto relative">
            {showLevelUp && <LevelUpModal level={level} onClose={closeLevelUp} />}

            {/* Header */}
            <div className="w-full flex items-center justify-between">
                <Link to="/categories" className="text-gray-500 hover:text-gray-900 flex items-center gap-1">
                    <ArrowLeft className="w-5 h-5" /> Back
                </Link>
                <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {currentIndex + 1} / {items.length}
                </div>
            </div>

            {/* Flashcard Area */}
            <div className="w-full aspect-[4/3] perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front */}
                    <div className={`absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 border-4 transition-colors ${isCompleted ? 'border-green-400 bg-green-50' : 'border-indigo-50 hover:border-indigo-100'}`}>
                        <h2 className="text-5xl font-black text-gray-800 mb-6 text-center leading-tight">
                            {currentItem.korean}
                        </h2>
                        <p className="text-xl text-gray-500 font-medium mb-6">
                            {currentItem.romanized}
                        </p>
                        <button
                            onClick={(e) => { e.stopPropagation(); playAudio(currentItem.korean); }}
                            className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                        >
                            <Volume2 className="w-6 h-6" />
                        </button>
                        <p className="mt-8 text-gray-400 text-sm font-medium">Tap to flip</p>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden bg-indigo-600 rounded-3xl shadow-xl rotate-y-180 text-white flex flex-col items-center justify-center p-8">
                        <h3 className="text-3xl font-bold mb-8 text-center">{currentItem.english}</h3>

                        <button
                            onClick={(e) => { e.stopPropagation(); playAudio(currentItem.korean); }}
                            className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                        >
                            <Volume2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="w-full flex items-center gap-4">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className="p-4 rounded-full bg-white shadow-md text-gray-600 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-4 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
                >
                    <RotateCw className="w-6 h-6" />
                </button>

                {/* I Know This Button */}
                <button
                    onClick={() => handleMarkAsDone(currentItem.id)}
                    disabled={isCompleted}
                    className={`flex-1 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${isCompleted ? 'bg-green-100 text-green-700 cursor-default shadow-none' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'}`}
                >
                    {isCompleted ? (
                        <>
                            <Check className="w-6 h-6" /> Learned
                        </>
                    ) : (
                        <>
                            I know this! <span className="text-xs bg-white/20 px-2 py-0.5 rounded ml-1">+10 XP</span>
                        </>
                    )}
                </button>

                <button
                    onClick={nextCard}
                    disabled={currentIndex === items.length - 1}
                    className="p-4 rounded-full bg-white shadow-md text-gray-600 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Quiz Prompt (at the end) */}
            {currentIndex === items.length - 1 && (
                <div className="w-full animate-fade-in mt-4">
                    <Link
                        to={`/quiz/${categoryId}`}
                        className="block w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
                    >
                        Ready? Take the Quiz!
                    </Link>
                </div>
            )}
        </div>
    );
}
