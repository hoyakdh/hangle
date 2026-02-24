import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface UserContextType {
    logout: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    targetLanguage: 'en' | 'es' | 'ja' | 'fr' | 'th' | 'zh' | 'zh-TW' | 'hi';
    setTargetLanguage: (lang: 'en' | 'es' | 'ja' | 'fr' | 'th' | 'zh' | 'zh-TW' | 'hi') => void;
    bookmarks: number[];
    toggleBookmark: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {

    // Theme State
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('hangle_theme');
        if (savedTheme) return savedTheme as 'light' | 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Language State
    const [targetLanguage, setTargetLanguageState] = useState<'en' | 'es' | 'ja' | 'fr' | 'th' | 'zh' | 'zh-TW' | 'hi'>(() => {
        const savedLang = localStorage.getItem('hangle_target_lang');
        return (savedLang as 'en' | 'es' | 'ja' | 'fr' | 'th' | 'zh' | 'zh-TW' | 'hi') || 'en';
    });

    // Bookmarks State
    const [bookmarks, setBookmarks] = useState<number[]>(() => {
        const saved = localStorage.getItem('hangle_bookmarks');
        return saved ? JSON.parse(saved) : [];
    });



    useEffect(() => {
        localStorage.setItem('hangle_bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    // Apply Theme
    useEffect(() => {
        localStorage.setItem('hangle_theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('hangle_target_lang', targetLanguage);
    }, [targetLanguage]);



    const toggleBookmark = (id: number) => {
        setBookmarks(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };



    const logout = () => {
        localStorage.removeItem('hangle_completed');
        localStorage.removeItem('hangle_bookmarks');

        setBookmarks([]);

        // Force reload to reset all local states in components
        window.location.href = '/';
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setTargetLanguage = (lang: 'en' | 'es' | 'ja' | 'fr' | 'th' | 'zh' | 'zh-TW' | 'hi') => {
        setTargetLanguageState(lang);
    };

    return (
        <UserContext.Provider value={{ logout, theme, toggleTheme, targetLanguage, setTargetLanguage, bookmarks, toggleBookmark }}>
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
