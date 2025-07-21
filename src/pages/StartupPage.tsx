import React from 'react';

export default function StartupPage() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 p-8'>
            <div className='bg-white bg-opacity-90 backdrop-blur-md shadow-3xl rounded-3xl p-12 max-w-lg w-full text-center space-y-8 border border-purple-300'>
                <h1 className='text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 leading-normal'>
                    🎮 Hangman
                </h1>
                <p className='text-xl text-gray-700 tracking-wide'>
                    Select Language
                </p>

                <div className='flex flex-col gap-5'>
                    <button className='w-full bg-gradient-to-r from-red-400 to-red-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer'>
                        🇵🇱 Polish
                    </button>
                    <button className='w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer'>
                        🇬🇧 English
                    </button>
                </div>
            </div>
        </div>
    );
}
