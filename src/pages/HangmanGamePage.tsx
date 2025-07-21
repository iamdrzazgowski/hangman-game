import React, { useEffect } from 'react';
import { useHangmanGame } from '../contexts/HangmanGameProvider';
import { useNavigate } from 'react-router';
import { GAME_RESULT } from '../config/config';
import Header from '../components/Header';
import GuessWord from '../components/GuessWord';
import Result from '../components/Result';
import Keyboard from '../components/Keyboard';
import ResetGameButton from '../components/ResetGameButton';

export default function HangmanGamePage() {
    const {
        randomWord,
        guessedLetters,
        currentHealth,
        language,
        resetGame,
        isLoading,
        guessLetter,
        gameResult,
    } = useHangmanGame();
    const navigate = useNavigate();

    const alphabet: string =
        language === 'polish'
            ? 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż'
            : 'abcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        if (!language) {
            console.error('No language available');
            navigate('/');
        }
    }, [language, navigate]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const letter = event.key.toLowerCase();
            if (
                alphabet.includes(letter) &&
                gameResult === GAME_RESULT.IN_PROGRESS &&
                !guessedLetters.includes(letter)
            ) {
                guessLetter(letter);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [alphabet, gameResult, guessedLetters, guessLetter]);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 p-8'>
            <div className='bg-white bg-opacity-90 backdrop-blur-md shadow-3xl rounded-3xl p-12 max-w-3xl w-full text-center space-y-10 border border-purple-300 min-h-[670px]'>
                <Header />

                <GuessWord
                    randomWord={randomWord}
                    guessedLetters={guessedLetters}
                    gameResult={gameResult}
                    isLoading={isLoading}
                />

                <Result gameResult={gameResult} currentHealth={currentHealth} />

                <Keyboard
                    alphabet={alphabet}
                    guessedLetters={guessedLetters}
                    randomWord={randomWord}
                    gameResult={gameResult}
                    guessLetter={guessLetter}
                />
                <ResetGameButton resetGame={resetGame} />
            </div>
        </div>
    );
}
