import { NavLink } from "react-router-dom"
import "./MainNavBar.css"

function MainNavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="logo">Dexly</NavLink>
            </div>

            <div className="favorites-bar">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="empty-card-slot"></div>
                ))}
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cards">Cards</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>

                <input
                    className="nav-search-bar"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </nav>
    )
}

export default MainNavBar