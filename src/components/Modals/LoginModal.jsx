import useUserStore from '../../store/useUserStore'
import { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import "./LoginModal.css"


function LoginModal({ closeLoginModal, openSignupModal }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user = useUserStore((state) => state.user);
    const error = useUserStore(state => state.error)
    const loginUser = useUserStore(state => state.loginUser)

    async function handleLogin(event) {
        event.preventDefault()
        await loginUser(username, password)
        const currentUser = useUserStore.getState().user;
        const currentError = useUserStore.getState().error;

        if (currentUser && !currentError) {
            navigate('/home');
        }
    }

    useEffect(() => {
        if (user) {
            closeLoginModal()
        }
    }, [user, closeLoginModal])

    function modalOperations() {
        closeLoginModal()
        openSignupModal()
    }

    return (
        <section className="login-container"
            onClick={(e) => {
                if (e.target.classList.contains('login-container')) {
                    closeLoginModal();
                }
            }}
        >
            <section className="login-form">
                <header className="login-header">
                    <h1>Login</h1>
                </header>

                <h4>Username</h4>
                <input
                    className="login-username"
                    type="text"
                    placeholder="Username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <h4>Password</h4>
                <input
                    className="login-password"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <NavLink to="/home" onClick={handleLogin} className="login-button">Login</NavLink>
                {error && <p className="error-message">{error}</p>}

                <footer className="login-footer">
                    <button onClick={modalOperations} className="login-signup-button">Don't have an account? Click here to Sign Up!</button>
                </footer>
            </section>
        </section>
    )
}

export default LoginModal