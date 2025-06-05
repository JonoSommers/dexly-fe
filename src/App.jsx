import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginModal from './components/Modals/LoginModal.jsx';
import MainNavBar from './components/NavBars/MainNavBar.jsx';
import HomePage from './components/HomePage/HomePage.jsx'
import useUserStore from './store/useUserStore.js';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const checkSession = useUserStore(state => state.checkSession)

    const openModal = () => setIsLoginModalOpen(true);
    const closeModal = () => setIsLoginModalOpen(false);

    useEffect(() => {
        checkSession()
    }, [checkSession])

    return (
        <section className="routing">
        <MainNavBar openModal={openModal} />
        {isLoginModalOpen && <LoginModal closeModal={closeModal} />}

        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </section>
    );
}

export default App;
