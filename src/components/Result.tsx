import { GAME_RESULT } from '../config/config';

export default function Result({
    gameResult,
    currentHealth,
}: {
    gameResult: string;
    currentHealth: number;
}) {
    return (
        <>
            {gameResult === GAME_RESULT.WON ? (
                <div className='p-6 rounded-2xl bg-green-200 text-green-800 text-2xl font-bold'>
                    🎉 Congratulations! You won!
                </div>
            ) : gameResult === GAME_RESULT.LOST ? (
                <div className='p-6 rounded-2xl bg-red-200 text-red-800 text-2xl font-bold'>
                    😞 Sorry! You lost!
                </div>
            ) : (
                <p className='text-lg text-gray-700 font-semibold'>
                    Remaining Attempts:{' '}
                    <span className='text-red-600 font-bold'>
                        {currentHealth}
                    </span>
                </p>
            )}
        </>
    );
}
