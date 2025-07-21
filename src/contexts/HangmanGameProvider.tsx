/* eslint-disable react-refresh/only-export-components */
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react';
import { MAX_WRONG_GUESSES, GAME_RESULT } from '../config/config';
import type { HangmanGameContextType } from '../types/HangmanGameContext';

const HangmanGameContext = createContext<HangmanGameContextType | undefined>(
    undefined
);

function HangmanGameProvider({ children }: { children: React.ReactNode }) {
    const [gameResult, setGameResult] = useState(GAME_RESULT.IN_PROGRESS);
    const [currentHealth, setCurrentHealth] = useState(MAX_WRONG_GUESSES);
    const [language, setLanguage] = useState('');
    const [randomWord, setRandomWord] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const fetchWord = useCallback(async (lang: string) => {
        setIsLoading(true);

        try {
            const res = await fetch(`/data/words/${lang}.json`);

            if (!res.ok) throw new Error('Failed to fetch words');

            const data: { words: string[] } = await res.json();
            const words: string[] = data.words;

            if (!words || words.length === 0) {
                throw new Error('No words found for the selected language');
            }

            setRandomWord(() => {
                const randomIndex = Math.floor(Math.random() * words.length);
                return words[randomIndex];
            });
        } catch (error) {
            console.error('Error fetching word:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (language) {
            fetchWord(language);
        }
    }, [language, fetchWord]);

    const guessLetter = useCallback(
        (letter: string) => {
            if (
                gameResult !== GAME_RESULT.IN_PROGRESS ||
                guessedLetters.includes(letter)
            )
                return;

            setGuessedLetters((prev) => [...prev, letter]);

            if (!randomWord.includes(letter)) {
                setCurrentHealth((prev) => {
                    const newHealth = prev - 1;
                    if (newHealth <= 0) {
                        setGameResult(GAME_RESULT.LOST);
                    }
                    return newHealth;
                });
            } else {
                const allGuessed = randomWord
                    .split('')
                    .every(
                        (l) =>
                            l === ' ' ||
                            guessedLetters.includes(l) ||
                            l === letter
                    );

                if (allGuessed) {
                    setGameResult(GAME_RESULT.WON);
                }
            }
        },
        [randomWord, guessedLetters, gameResult]
    );

    const resetGame = useCallback(() => {
        setGameResult(GAME_RESULT.IN_PROGRESS);
        setCurrentHealth(MAX_WRONG_GUESSES);
        setGuessedLetters([]);
        setRandomWord('');
        if (language) {
            fetchWord(language);
        } else {
            setRandomWord('');
        }
    }, [language, fetchWord]);

    const changeLanguage = useCallback((newLanguage: string) => {
        setLanguage(newLanguage);
    }, []);

    return (
        <HangmanGameContext.Provider
            value={{
                gameResult,
                currentHealth,
                language,
                changeLanguage,
                randomWord,
                isLoading,
                guessedLetters,
                resetGame,
                guessLetter,
            }}>
            {children}
        </HangmanGameContext.Provider>
    );
}

function useHangmanGame() {
    const context = useContext(HangmanGameContext);
    if (!context) {
        throw new Error(
            'useHangmanGame must be used within a HangmanGameProvider'
        );
    }
    return context;
}

export { HangmanGameProvider, useHangmanGame };
