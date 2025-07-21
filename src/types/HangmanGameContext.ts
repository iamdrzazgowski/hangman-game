export interface HangmanGameContextType {
    gameResult: string;
    currentHealth: number;
    language: string;
    changeLanguage: (newLanguage: string) => void;
    randomWord: string;
    isLoading: boolean;
    guessedLetters: string[];
    resetGame: () => void;
    guessLetter: (letter: string) => void;
}
