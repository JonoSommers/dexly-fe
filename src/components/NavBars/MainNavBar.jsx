import { NavLink } from "react-router-dom"
import "./MainNavBar.css"

function MainNavBar() {
    return (
        <nav className="navbar">
            {/* 1) Logo on the far left */}
            <div className="navbar-left">
                <NavLink to="/" className="logo">Dexly</NavLink>
            </div>

            {/* 2) Spacer pushes everything to its right */}
            <div className="spacer"></div>

            {/* 3) Favorites bar sits next */}
            <div className="favorites-bar">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="empty-card-slot"></div>
                ))}
            </div>

            {/* 4) Links + search on the far right */}
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
