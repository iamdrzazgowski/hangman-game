import React from 'react';

export default function ResetGameButton({
    resetGame,
}: {
    resetGame: () => void;
}) {
    return (
        <button
            className='mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-10 rounded-3xl text-xl font-bold shadow-lg hover:scale-105 transition transform cursor-pointer w-[210px]'
            onClick={resetGame}>
            Restart Game
        </button>
    );
}
