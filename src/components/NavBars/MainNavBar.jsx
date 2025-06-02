import { NavLink } from "react-router-dom"

function MainNavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Dexly</a>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cards">Cards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <input className="nav-search-bar"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </nav>
    )
}

export default MainNavBar