import './LandingPage.css'
import MainNavBar from '../NavBars/MainNavBar'

function LandingPage() {
    return (
        <section className="landing-page-container">
            {/* Navbar */}
            <div className="navbar">
                <MainNavBar />
            </div>

            {/* Hero/Intro */}
            <div className="intro">
                <header>
                    <h2>Your Personal Pokémon Card Catalog</h2>
                </header>

                <div className="hero-text">
                    <p>
                        Easily search, sort, and track your entire Pokémon card collection –  
                        from vintage hits to the latest releases.  
                        All your cards. One place, zero clutter.
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>

                {/* “How Dexly Works” Heading */}
                <header>
                    <h3>How Dexly Works</h3>
                </header>

                {/* How It Works Section */}
                <div className="how-it-works">
                    <h4>Create &amp; Build Binders</h4>
                    <p>
                        Create a personalized home for your collection — give each binder a name, upload 
                        a custom cover image, and organize cards exactly how you want.
                    </p>

                    <h4>Search &amp; Filter Cards</h4>
                    <p>
                        Locate any card in seconds — browse through the catalog, search by name, 
                        or filter by set to quickly add cards to your binders.
                    </p>

                    <h4>Track &amp; Organize Your Collection</h4>
                    <p>
                        Stay on top of your Pokémon collection—track what you own, uncover gaps in your 
                        binder, and watch your collection grow!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage
