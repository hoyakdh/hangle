import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vocabData } from '../data/vocab';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

import { ArrowLeft, CheckCircle, XCircle, Trophy, RefreshCcw, Volume2 } from 'lucide-react';

export default function Quiz() {
    const { categoryId } = useParams<{ categoryId: string }>();
    return <QuizContent key={categoryId} categoryId={categoryId} />;
}

function QuizContent({ categoryId }: { categoryId?: string }) {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].quiz;

    // Filter items by category
    const items = useMemo(() => vocabData.filter(item => item.category === categoryId), [categoryId]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(0.9);

    // Text-to-Speech
    const playAudio = (text: string) => {
        if (!('speechSynthesis' in window)) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = playbackRate;
        window.speechSynthesis.speak(utterance);
    };

    const toggleSpeed = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPlaybackRate(prev => prev === 0.9 ? 0.4 : 0.9);
    };

    // Generate question and options
    const currentQuestion = items[currentIndex];

    // Generate 4 options (1 correct, 3 random wrong) using useMemo so they don't reshuffle on every render
    const [options, setOptions] = useState<typeof items>([]);

    useEffect(() => {
        if (!currentQuestion) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOptions([]);
            return;
        }

        const correctOption = currentQuestion;
        const otherOptions = items.filter(item => item.id !== currentQuestion.id);

        // Shuffle other options and take 3
        const shuffledOthers = [...otherOptions].sort(() => 0.5 - Math.random()).slice(0, 3);

        // Combine and shuffle again
        const newOptions = [...shuffledOthers, correctOption].sort(() => 0.5 - Math.random());
        setOptions(newOptions);
    }, [currentQuestion, items]);

    // Reset effect removed as key={categoryId} handles it

    if (items.length < 4) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold dark:text-white">{t.notEnough}</h2>
                <Link to="/categories" className="text-indigo-600 dark:text-indigo-400 hover:underline mt-4 inline-block">{t.goBack}</Link>
            </div>
        );
    }

    const handleOptionClick = (optionId: number) => {
        if (isAnswered) return;

        setSelectedOption(optionId);
        setIsAnswered(true);

        if (optionId === currentQuestion.id) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsAnswered(false);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in py-8">
                <Trophy className="w-24 h-24 text-yellow-400 drop-shadow-lg" />
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{t.complete}</h2>
                <div className="text-2xl font-medium text-gray-600 dark:text-gray-300">
                    {t.score} <span className="text-indigo-600 dark:text-indigo-400 font-bold">{score}</span> / {items.length}
                </div>

                <div className="flex gap-4 mt-8">
                    <Link to={`/learn/${categoryId}`} className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        {t.review}
                    </Link>
                    <button onClick={() => window.location.reload()} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center gap-2">
                        <RefreshCcw className="w-4 h-4" /> {t.retry}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Link to="/quiz" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-1">
                    <ArrowLeft className="w-5 h-5" /> {t.quit}
                </Link>
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1 rounded-full">
                    {t.question} {currentIndex + 1} / {items.length}
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-indigo-50 dark:border-gray-700">
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-4">{t.prompt}</p>
                <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-6">{currentQuestion.korean}</h2>

                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => playAudio(currentQuestion.korean)}
                        className="p-3 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
                        title="Listen"
                    >
                        <Volume2 className="w-6 h-6" />
                    </button>

                    <button
                        onClick={toggleSpeed}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        title="Toggle Speed"
                    >
                        {playbackRate === 0.9 ? '1x' : '0.4x'}
                    </button>
                </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
                {options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const isCorrect = option.id === currentQuestion.id;

                    let btnClass = "w-full p-4 rounded-xl text-left font-medium text-lg border-2 transition-all duration-200 flex items-center justify-between ";

                    if (isAnswered) {
                        if (isCorrect) {
                            btnClass += "bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400";
                        } else if (isSelected && !isCorrect) {
                            btnClass += "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400";
                        } else {
                            btnClass += "bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-400 dark:text-gray-500 opacity-50";
                        }
                    } else {
                        btnClass += "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md";
                    }

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleOptionClick(option.id)}
                            disabled={isAnswered}
                            className={btnClass}
                        >
                            <span>
                                {targetLanguage === 'en' && option.english}
                                {targetLanguage === 'es' && option.spanish}
                                {targetLanguage === 'ja' && option.japanese}
                                {targetLanguage === 'fr' && option.french}
                                {targetLanguage === 'th' && option.thai}
                                {targetLanguage === 'zh' && option.chinese}
                                {targetLanguage === 'hi' && option.hindi}
                            </span>
                            {isAnswered && isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                            {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                        </button>
                    );
                })}
            </div>

            {/* Next Button */}
            {isAnswered && (
                <button
                    onClick={handleNext}
                    className="w-full py-4 mt-6 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:scale-[1.02] transition-all animate-bounce-subtle"
                >
                    {currentIndex < items.length - 1 ? t.next : t.results}
                </button>
            )}
        </div>
    );
}
