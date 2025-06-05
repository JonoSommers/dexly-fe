import { NavLink } from "react-router-dom"
import useUserStore from "../../store/useUserStore"
import "./MainNavBar.css"

function MainNavBar({ openModal }) {
    const user = useUserStore(state => state.user)
    const logoutUser = useUserStore(state => state.logoutUser)

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
                    {user ? (
                    <>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/cards">Cards</NavLink></li>
                        <li><NavLink to="/binders">Binders</NavLink></li>
                        <li><button onClick={logoutUser} className="nav-button-link">Logout</button></li>
                    </>
                    ) : (
                    <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cards">Cards</NavLink></li>
                        <li><button onClick={openModal} className="nav-button-link">Login</button></li>
                    </>
                    )}
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
