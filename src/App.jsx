import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginModal from './components/Modals/LoginModal.jsx';
import MainNavBar from './components/NavBars/MainNavBar.jsx';
import HomePage from './components/HomePage/HomePage.jsx'
import useUserStore from './store/useUserStore.js';
import SignupModal from './components/Modals/SignUpModal.jsx';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const checkSession = useUserStore(state => state.checkSession)

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openSignupModal = () => setIsSignupModalOpen(true);
    const closeSignupModal = () => setIsSignupModalOpen(false);

    useEffect(() => {
        checkSession()
    }, [checkSession])

    return (
        <section className="routing">
        <MainNavBar openLoginModal={openLoginModal} />
        {isLoginModalOpen && <LoginModal closeLoginModal={closeLoginModal} openSignupModal={openSignupModal} />}
        {isSignupModalOpen && <SignupModal closeSignupModal={closeSignupModal} closeLoginModal={closeLoginModal} />}

        <Routes>
            <Route path="/" element={<LandingPage openSignupModal={openSignupModal} />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </section>
    );
}

export default App;
