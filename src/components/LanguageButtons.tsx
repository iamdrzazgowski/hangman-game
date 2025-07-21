import React from 'react';

export default function LanguageButtons({
    handleSetupLanguage,
}: {
    handleSetupLanguage: (newLanguage: string) => void;
}) {
    return (
        <div className='flex flex-col gap-5'>
            <button
                className='w-full bg-gradient-to-r from-red-400 to-red-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer'
                onClick={() => handleSetupLanguage('polish')}>
                🇵🇱 Polish
            </button>
            <button
                className='w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer'
                onClick={() => handleSetupLanguage('english')}>
                🇬🇧 English
            </button>
        </div>
    );
}
