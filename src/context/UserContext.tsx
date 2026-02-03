import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface UserContextType {
    name: string | null;
    setName: (name: string) => void;
    xp: number;
    level: number;
    addXp: (amount: number) => void;
    showLevelUp: boolean;
    closeLevelUp: () => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [name, setNameState] = useState<string | null>(() => localStorage.getItem('hangle_username'));
    const [xp, setXp] = useState<number>(() => parseInt(localStorage.getItem('hangle_xp') || '0', 10));
    const [level, setLevel] = useState<number>(() => parseInt(localStorage.getItem('hangle_level') || '1', 10));
    const [showLevelUp, setShowLevelUp] = useState(false);

    useEffect(() => {
        if (name) localStorage.setItem('hangle_username', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('hangle_xp', xp.toString());
        localStorage.setItem('hangle_level', level.toString());
    }, [xp, level]);

    const setName = (newName: string) => {
        setNameState(newName);
    };

    const addXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);

        // Level Up Logic: 100 XP per level
        const nextLevelThreshold = level * 100;
        if (newXp >= nextLevelThreshold) {
            setLevel(prev => prev + 1);
            setShowLevelUp(true);
        }
    };

    const closeLevelUp = () => {
        setShowLevelUp(false);
    };

    const logout = () => {
        localStorage.removeItem('hangle_username');
        localStorage.removeItem('hangle_xp');
        localStorage.removeItem('hangle_level');
        localStorage.removeItem('hangle_completed');

        setNameState(null);
        setXp(0);
        setLevel(1);
    };

    return (
        <UserContext.Provider value={{ name, setName, xp, level, addXp, showLevelUp, closeLevelUp, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
