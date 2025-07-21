import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import HangmanGamePage from './pages/HangmanGamePage';
import StartupPage from './pages/StartupPage';
import { HangmanGameProvider } from './contexts/HangmanGameProvider';

function App() {
    return (
        <BrowserRouter>
            <HangmanGameProvider>
                <Routes>
                    <Route path='/' element={<StartupPage />} />
                    <Route path='/game' element={<HangmanGamePage />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </HangmanGameProvider>
        </BrowserRouter>
    );
}

export default App;
