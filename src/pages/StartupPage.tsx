import React, { useEffect } from 'react';
import { useHangmanGame } from '../contexts/HangmanGameProvider';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import LanguageButtons from '../components/LanguageButtons';

export default function StartupPage() {
    const { language, changeLanguage } = useHangmanGame();
    const navigate = useNavigate();

    useEffect(() => {
        if (language) {
            navigate('/game');
        }
    }, [language, navigate]);

    const handleSetupLanguage = (newLanguage: string) => {
        changeLanguage(newLanguage);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 p-8'>
            <div className='bg-white bg-opacity-90 backdrop-blur-md shadow-3xl rounded-3xl p-12 max-w-lg w-full text-center space-y-8 border border-purple-300'>
                <Header />
                <p className='text-xl text-gray-700 tracking-wide'>
                    Select Language
                </p>

                <LanguageButtons handleSetupLanguage={handleSetupLanguage} />
            </div>
        </div>
    );
}
