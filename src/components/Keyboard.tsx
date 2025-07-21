import React from 'react';
import { GAME_RESULT } from '../config/config';

export default function Keyboard({
    alphabet,
    guessedLetters,
    randomWord,
    gameResult,
    guessLetter,
}: {
    alphabet: string;
    guessedLetters: string[];
    randomWord: string;
    gameResult: string;
    guessLetter: (letter: string) => void;
}) {
    return (
        <div className='grid grid-cols-9 gap-3 justify-center'>
            {alphabet.split('').map((letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = randomWord.includes(letter) && isGuessed;

                const isWrong = isGuessed && !randomWord.includes(letter);

                return (
                    <button
                        key={letter}
                        disabled={
                            isGuessed || gameResult !== GAME_RESULT.IN_PROGRESS
                        }
                        className={`py-3 rounded-2xl font-bold text-lg text-white shadow-lg transition transform
                                                ${
                                                    isCorrect
                                                        ? 'bg-green-500'
                                                        : isWrong
                                                        ? 'bg-red-500'
                                                        : 'bg-purple-400 hover:bg-purple-600'
                                                }
                                                ${
                                                    !isGuessed
                                                        ? 'hover:scale-105 cursor-pointer'
                                                        : 'opacity-70 cursor-not-allowed'
                                                }
                                            `}
                        onClick={() => guessLetter(letter)}>
                        {letter.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
}
