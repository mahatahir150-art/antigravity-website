'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    isVerified: boolean;
}

interface AuthContextType {
    user: User | null;
    login: () => void;
    verifyUser: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => { },
    verifyUser: () => { },
    isLoading: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate checking local storage for persisted session
        const stored = localStorage.getItem('rr_user');
        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            // Auto-login as a Guest/Unverified user for demo purposes initially?
            // Let's start as null (Guest) and require explicit "Login" if needed, 
            // OR simpler: mock a logged-in UNVERIFIED user to purely test the KYC flow.
            const mockUser: User = { id: 'u1', name: 'Ali Khan', isVerified: false };
            setUser(mockUser);
            localStorage.setItem('rr_user', JSON.stringify(mockUser));
        }
        setIsLoading(false);
    }, []);

    const login = () => {
        const mockUser: User = { id: 'u1', name: 'Ali Khan', isVerified: false };
        setUser(mockUser);
        localStorage.setItem('rr_user', JSON.stringify(mockUser));
    };

    const verifyUser = () => {
        if (user) {
            const updated = { ...user, isVerified: true };
            setUser(updated);
            localStorage.setItem('rr_user', JSON.stringify(updated));
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, verifyUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
