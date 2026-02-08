import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vocabData } from '../data/vocab';
import { ChevronLeft, ChevronRight, Volume2, RotateCw, ArrowLeft, Check, Star, Mic, MicOff } from 'lucide-react';
import { useUser } from '../context/UserContext';
import LevelUpModal from '../components/LevelUpModal';
import Joyride, { type CallBackProps, type Step } from 'react-joyride';

import { translations } from '../data/translations';
import SEO from '../components/SEO';

export default function Learn() {
    const { categoryId } = useParams<{ categoryId: string }>();
    // Force remount when category changes to reset all state
    return <LearnContent key={categoryId} categoryId={categoryId} />;
}

function LearnContent({ categoryId }: { categoryId?: string }) {
    const { addXp, showLevelUp, level, closeLevelUp, targetLanguage, bookmarks, toggleBookmark } = useUser();

    // Translations are dynamic
    const t = translations[targetLanguage].learn;

    // Translations are dynamic
    const tCommon = translations[targetLanguage].home?.speaking || {
        start: "Speak",
        listening: "Listening...",
        success: "Perfect!",
        tryAgain: "Try Again",
        permission: "Please allow microphone access."
    };

    const [debugInfo, setDebugInfo] = useState<string>(""); // Temporary debug state

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const items = vocabData.filter(item => item.category === categoryId);
    const currentItem = items[currentIndex];

    // Speaking Practice State
    const [speakingStatus, setSpeakingStatus] = useState<'idle' | 'listening' | 'success' | 'fail'>('idle');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognitionRef = useRef<any>(null);

    // Tour State - lazy initialization
    const [runTour, setRunTour] = useState(() => !localStorage.getItem('hasSeenLearnTutorial'));

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data;
        if (status === 'finished' || status === 'skipped') {
            setRunTour(false);
            localStorage.setItem('hasSeenLearnTutorial', 'true');
        }
    };

    const resetSpeaking = () => {
        setSpeakingStatus('idle');
        if (recognitionRef.current) {
            recognitionRef.current.abort();
        }
    };

    const startListening = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        if (speakingStatus === 'listening') {
            recognitionRef.current?.stop();
            setSpeakingStatus('idle');
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = 'ko-KR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setSpeakingStatus('listening');
            setDebugInfo("Status: Listening...");
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            const cleanTranscript = transcript.replace(/\s+/g, '').replace(/[.,!?]/g, '');
            const cleanTarget = currentItem.korean.replace(/\s+/g, '').replace(/[.,!?]/g, '');

            setDebugInfo(`Heard: "${transcript}"`);

            if (cleanTranscript === cleanTarget) {
                setSpeakingStatus('success');
                addXp(5);
            } else {
                setSpeakingStatus('fail');
                setTimeout(() => setSpeakingStatus(prev => prev === 'fail' ? 'idle' : prev), 2000);
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setDebugInfo(`Error: ${event.error}`);
            if (event.error === 'not-allowed' || event.error === 'permission-denied') {
                alert(tCommon?.permission || "Please allow microphone access.");
            }
            setSpeakingStatus('idle');
        };

        recognition.onend = () => {
            setSpeakingStatus(prev => {
                if (prev === 'listening') return 'idle';
                return prev;
            });
        };

        try {
            recognition.start();
        } catch (e) {
            console.error(e);
            setSpeakingStatus('idle');
            alert("Microphone access failed. Please check permissions.");
        }
    };


    // Local Storage for completed items
    const [completedItems, setCompletedItems] = useState<number[]>(() => {
        const saved = localStorage.getItem('hangle_completed');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('hangle_completed', JSON.stringify(completedItems));
    }, [completedItems]);

    const handleMarkAsDone = (id: number) => {
        if (completedItems.includes(id)) {
            // Toggle OFF: Remove from completed list and deduct XP
            setCompletedItems(prev => prev.filter(item => item !== id));
            addXp(-10);
        } else {
            // Toggle ON: Add to completed list and grant XP
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

    // Initial reset removed as key={categoryId} handles it

    const [playbackRate, setPlaybackRate] = useState(0.9);

    const toggleSpeed = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPlaybackRate(prev => prev === 0.9 ? 0.4 : 0.9);
    };

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

    const nextCard = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
            resetSpeaking();
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
            resetSpeaking();
        }
    };

    const steps: Step[] = [
        {
            target: '.tour-listen-btn',
            content: t.tour?.listen || 'Hear the pronunciation.',
            disableBeacon: true,
        },
        {
            target: '.tour-speak-btn',
            content: t.tour?.speak || 'Turn on the mic and speak. We check your pronunciation!',
        },
        {
            target: '.tour-speed-btn',
            content: t.tour?.speed || 'Adjust playback speed.',
        },
        {
            target: '.tour-flip-card',
            content: t.tour?.flip || 'Tap the card to see the meaning.',
        },
        {
            target: '.tour-bookmark-btn',
            content: t.tour?.bookmark || 'Bookmark phrases to review later.',
        },
        {
            target: '.tour-known-btn',
            content: t.tour?.known || 'Mark as learned to earn XP!',
        }
    ];

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold dark:text-white">{t.notFound}</h2>
                <Link to="/categories" className="text-indigo-600 dark:text-indigo-400 hover:underline mt-4 inline-block">{t.goBack}</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-8 max-w-lg mx-auto relative">
            <Joyride
                steps={steps}
                run={runTour}
                continuous
                showSkipButton
                showProgress
                styles={{
                    options: {
                        primaryColor: '#4f46e5',
                        zIndex: 10000,
                        arrowColor: 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        overlayColor: 'rgba(0, 0, 0, 0.4)',
                        textColor: '#1f2937',
                        width: 300,
                    },
                    tooltip: {
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        padding: '20px',
                    },
                    buttonNext: {
                        backgroundColor: '#4f46e5',
                        borderRadius: '8px',
                        color: '#fff',
                        outline: 'none',
                        padding: '6px 14px',
                        fontSize: '14px',
                        fontWeight: 600,
                    },
                    buttonBack: {
                        color: '#6b7280',
                        marginRight: 10,
                        fontSize: '14px',
                    },
                    buttonSkip: {
                        color: '#6b7280',
                        fontSize: '14px',
                    },
                }}
                callback={handleJoyrideCallback}
                locale={{
                    back: t.back || 'Back',
                    close: t.close || 'Close',
                    last: t.last || 'Done',
                    next: t.next || 'Next',
                    skip: t.skip || 'Skip',
                }}
            />
            {showLevelUp && <LevelUpModal level={level} onClose={closeLevelUp} />}

            {/* Header */}
            <div className="w-full flex items-center justify-between">
                <Link to="/categories" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-1">
                    <ArrowLeft className="w-5 h-5" /> {t.back}
                </Link>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {currentIndex + 1} / {items.length}
                </div>
            </div>

            {/* Flashcard Area */}
            <div className="tour-flip-card w-full aspect-[4/3] perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front */}
                    <div className={`absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 border-4 transition-colors ${isCompleted ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : 'border-indigo-50 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-gray-600'}`}>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-6 text-center leading-tight break-keep">
                            {currentItem.korean}
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium mb-6">
                            {targetLanguage === 'ja' ? currentItem.japanese_pronunciation : currentItem.romanized}
                        </p>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={(e) => { e.stopPropagation(); playAudio(currentItem.korean); }}
                                className="tour-listen-btn p-2.5 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
                            >
                                <Volume2 className="w-5 h-5" />
                            </button>

                            {/* Speaking Practice Button */}
                            <button
                                onClick={startListening}
                                className={`tour-speak-btn p-2.5 rounded-full transition-colors relative ${speakingStatus === 'listening' ? 'bg-red-100 text-red-600 animate-pulse' :
                                    speakingStatus === 'success' ? 'bg-green-100 text-green-600' :
                                        speakingStatus === 'fail' ? 'bg-orange-100 text-orange-600' :
                                            'bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {speakingStatus === 'listening' ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}

                                {speakingStatus === 'listening' && (
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                        {tCommon.listening}
                                    </span>
                                )}
                                {speakingStatus === 'success' && (
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                        {tCommon.success}
                                    </span>
                                )}
                                {speakingStatus === 'fail' && (
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                        {tCommon.tryAgain}
                                    </span>
                                )}
                            </button>

                            <button
                                onClick={toggleSpeed}
                                className="tour-speed-btn px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                {playbackRate === 0.9 ? '1x' : '0.4x'}
                            </button>
                        </div>

                        <div className="absolute top-4 right-4">
                            <button
                                onClick={(e) => { e.stopPropagation(); toggleBookmark(currentItem.id); }}
                                className={`tour-bookmark-btn p-2 rounded-full transition-colors ${bookmarks.includes(currentItem.id) ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'}`}
                            >
                                <Star className={`w-6 h-6 ${bookmarks.includes(currentItem.id) ? 'fill-current' : ''}`} />
                            </button>
                        </div>

                        <p className="mt-8 text-gray-400 dark:text-gray-500 text-sm font-medium">{t.flip}</p>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden bg-indigo-600 dark:bg-indigo-800 rounded-3xl shadow-xl rotate-y-180 text-white flex flex-col items-center justify-center p-8">
                        <h3 className="text-3xl font-bold mb-8 text-center">
                            {targetLanguage === 'en' && currentItem.english}
                            {targetLanguage === 'es' && currentItem.spanish}
                            {targetLanguage === 'ja' && currentItem.japanese}
                        </h3>

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
            <div className="w-full flex items-center gap-2 sm:gap-4">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition"
                >
                    <RotateCw className="w-6 h-6" />
                </button>

                {/* I Know This Button */}
                <button
                    onClick={() => handleMarkAsDone(currentItem.id)}
                    className={`tour-known-btn flex-1 py-2 rounded-lg font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-pointer shadow-none' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 dark:shadow-none'}`}
                >
                    {isCompleted ? (
                        <>
                            <Check className="w-5 h-5" /> {t.learned}
                        </>
                    ) : (
                        <>
                            {t.known} <span className="text-xs bg-white/20 px-2 py-0.5 rounded ml-1">{t.xp}</span>
                        </>
                    )}
                </button>

                <button
                    onClick={nextCard}
                    disabled={currentIndex === items.length - 1}
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
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
                        {t.quizPrompt}
                    </Link>
                </div>
            )}

            {/* SEO & Content Section */}
            <div className="mt-12 text-center max-w-lg mx-auto px-4 pb-8">
                <SEO
                    title={`Learn Korean ${categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : ''} Vocabulary`}
                    description={`Master Korean vocabulary for ${categoryId}. Listen to native pronunciation and practice speaking.`}
                />

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    About this Lesson
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    You are learning <strong>{items.length}</strong> new Korean words and phrases related to <strong>{categoryId}</strong>.
                    Use the flashcards to memorize the meaning and pronunciation.
                    The "Speaking Practice" feature helps you correct your accent by comparing your voice with native speakers.
                </p>
            </div>

            {/* Debug Info */}
            <div className="text-xs text-gray-400 text-center mt-4">
                {debugInfo}
            </div>
        </div>
    );
}
