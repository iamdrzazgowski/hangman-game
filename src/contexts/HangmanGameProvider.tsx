/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { MAX_WRONG_GUESSES, GAME_RESULT } from '../config/config';

const HangmanGameContext = createContext({});

function HangmanGameProvider({ children }: { children: React.ReactNode }) {
    const [gameResult, setGameResult] = useState(GAME_RESULT.IN_PROGRESS);
    const [currentHealth, setCurrentHealth] = useState(MAX_WRONG_GUESSES);
    const [language, setLanguage] = useState('english');
    const [randomWord, setRandomWord] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    useEffect(() => {
        const fetchWord = async () => {
            setIsLoading(true);

            try {
                const module = await import(`../data/words/${language}.json`, {
                    assert: { type: 'json' },
                });
                const data: { words: string[] } = module.default;
                const words: string[] = data.words;

                if (!words || words.length === 0) {
                    throw new Error('No words found for the selected language');
                }

                setRandomWord(() => {
                    const randomIndex = Math.floor(
                        Math.random() * words.length
                    );
                    return words[randomIndex];
                });

                console.log(words);
            } catch (error) {
                console.error('Error fetching word:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWord();
    }, [language]);

    return (
        <HangmanGameContext.Provider
            value={{
                gameResult,
                setGameResult,
                currentHealth,
                setCurrentHealth,
                language,
                setLanguage,
                randomWord,
                setRandomWord,
                isLoading,
                setIsLoading,
                guessedLetters,
                setGuessedLetters,
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
