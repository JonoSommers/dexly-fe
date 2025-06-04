import "./LoginModal.css"

function LoginModal() {
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
                />

                <h4>Password</h4>
                <input
                    className="login-password"
                    type="password"
                    placeholder="Password..."
                />
                <button className="login-button">Login</button>
            </section>
        </section>
    )
}

export default LoginModal