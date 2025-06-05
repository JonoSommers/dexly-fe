import useUserStore from '../../store/useUserStore'
import { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import "./SignUpModal.css"

function SignUpModal({ closeSignupModal }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const user = useUserStore((state) => state.user);
    const error = useUserStore(state => state.error)
    const createUser = useUserStore(state => state.createUser)
    const loginUser = useUserStore(state => state.loginUser)

    async function handleCreate(event) {
        event.preventDefault()
        await createUser(username, password, confirmPassword)
        await loginUser(username, password)
        const currentUser = useUserStore.getState().user;
        const currentError = useUserStore.getState().error;

        if (currentUser && !currentError) {
            navigate('/home');
        }
    }

    useEffect(() => {
        if (user) {
            closeSignupModal()
        }
    }, [user, closeSignupModal])

    return (
        <section className="signup-container"
            onClick={(e) => {
                if (e.target.classList.contains('signup-container')) {
                    closeSignupModal();
                }
            }}
        >
            <section className="signup-form">
                <header className="signup-header">
                    <h1>signup</h1>
                </header>

                <h4>Username</h4>
                <input
                    className="signup-username"
                    type="text"
                    placeholder="Username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <h4>Password</h4>
                <input
                    className="signup-password"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <h4>Confirm Password</h4>
                <input
                    className="signup-password"
                    type="password"
                    placeholder="Password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <NavLink to="/home" onClick={handleCreate} className="signup-button">Sign Up</NavLink>
                {error && <p className="error-message">{error}</p>}
            </section>
        </section>
    )
}

export default SignUpModal