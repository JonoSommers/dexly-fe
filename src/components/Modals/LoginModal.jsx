import useUserStore from '../../store/useUserStore'
import { useState } from 'react'
import "./LoginModal.css"

function LoginModal() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const error = useUserStore(state => state.error)
    const loginUser = useUserStore(state => state.loginUser)

    function handleLogin(event) {
        event.preventDefault()
        loginUser(username, password)
    }

    return (
        <section className="login-container">
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
                <button onClick={handleLogin} className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </section>
        </section>
    )
}

export default LoginModal