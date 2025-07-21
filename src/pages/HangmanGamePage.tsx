import React from 'react';

export default function HangmanGamePage() {
    const language: string = 'en';
    const alphabet: string =
        language === 'en'
            ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            : 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSTUVWXYZŹŻ';

    const randomWord: string = 'pomarańczowy'.toUpperCase();

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 p-8'>
            <div className='bg-white bg-opacity-90 backdrop-blur-md shadow-3xl rounded-3xl p-12 max-w-3xl w-full text-center space-y-10 border border-purple-300'>
                <h1 className='text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent leading-tight'>
                    🎮 Hangman
                </h1>

                <div className='flex flex-wrap justify-center gap-4 text-4xl font-mono tracking-widest text-gray-800 select-none max-w-full'>
                    {randomWord.split('').map((letter, index) => (
                        <span
                            className='border-b-4 border-purple-500 w-10 h-[40px] text-center'
                            key={index}>
                            {letter}
                        </span>
                    ))}
                </div>

                <p className='text-lg text-gray-700 font-semibold'>
                    Remaining Attempts:{' '}
                    <span className='text-red-600 font-bold'>5</span>
                </p>

                <div className='grid grid-cols-9 gap-3 justify-center'>
                    {alphabet.split('').map((letter) => (
                        <button
                            key={letter}
                            className='py-3 rounded-2xl font-bold text-lg bg-purple-400 text-white shadow-lg hover:bg-purple-600 transition transform hover:scale-105 cursor-pointer'>
                            {letter}
                        </button>
                    ))}
                    {/* <button className='py-3 rounded-2xl font-bold text-lg bg-purple-400 text-white shadow-lg hover:bg-purple-600 transition transform hover:scale-105'>
                        A
                    </button> */}
                    {/* <button className='py-3 rounded-2xl font-bold text-lg bg-green-500 text-white shadow-lg'>
                        B
                    </button>
                    <button className='py-3 rounded-2xl font-bold text-lg bg-red-500 text-white line-through shadow-lg'>
                        C
                    </button> */}
                </div>

                <div className='p-6 rounded-2xl bg-green-200 text-green-800 text-2xl font-bold'>
                    🎉 Congratulations! You won!
                </div>

                <div className='p-6 rounded-2xl bg-red-200 text-red-800 text-2xl font-bold'>
                    😞 Sorry! You lost!
                </div>

                <button className='mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-10 rounded-3xl text-xl font-bold shadow-lg hover:scale-105 transition transform cursor-pointer'>
                    Restart Game
                </button>
            </div>
        </div>
    );
}
