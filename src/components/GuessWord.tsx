import { GAME_RESULT } from '../config/config';

export default function GuessWord({
    randomWord,
    guessedLetters,
    gameResult,
    isLoading,
}: {
    randomWord: string;
    guessedLetters: string[];
    gameResult: string;
    isLoading: boolean;
}) {
    return (
        <div className='flex flex-wrap justify-center gap-4 text-4xl font-mono tracking-widest text-gray-800 select-none max-w-full'>
            {isLoading
                ? Array(8)
                      .fill('')
                      .map((_, index) => (
                          <span
                              className='border-b-4 border-transparent w-10 h-[40px] text-center animate-pulse'
                              key={index}>
                              &nbsp;
                          </span>
                      ))
                : randomWord.split('').map((letter: string, index: number) =>
                      letter === ' ' ? (
                          <span
                              className='border-b-4 border-transparent w-10 h-[40px] text-center'
                              key={index}></span>
                      ) : (
                          <span
                              className='border-b-4 border-purple-500 w-10 h-[40px] text-center'
                              key={index}>
                              {guessedLetters.includes(letter) ||
                              gameResult === GAME_RESULT.LOST
                                  ? letter.toUpperCase()
                                  : ' '}
                          </span>
                      )
                  )}
        </div>
    );
}
