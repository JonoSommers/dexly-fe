    import "./LandingPage.css"
    import MainNavBar from "../NavBars/MainNavBar"
    import "./LandingPage.css"

    function LandingPage() {
    return (
        <section className="landing-page-container">
            {/* 1. Navbar */}
            <header className="navbar">
                <MainNavBar />
            </header>

        {/* 2. Hero/Intro */}
        <section className="hero-section">
            <h2>Your Personal Pokémon Card Catalog</h2>
            <p className="hero-description">
                Easily search, sort, and track your entire Pokémon card collection—  
                from vintage hits to the latest releases.  
                All your cards. One place, zero clutter.
            </p>
            <button className="hero-cta">Get Started</button>
        </section>

        {/* 3. How It Works */}
        <section className="how-it-works-section">
            <h3>How Dexly Works</h3>
            <div className="how-items">
                <div className="how-item how-create-binders">
                    <h4>Create & Build Binders</h4>
                    <p>
                    Create a personalized home for your collection—give each binder a name,  
                    upload a custom cover image, and organize cards exactly how you want.
                    </p>
                </div>

                <div className="how-item how-search-filter">
                    <h4>Search & Filter Cards</h4>
                    <p>
                    Locate any card in seconds—browse through the catalog, search by name,  
                    or filter by set to quickly add cards to your binders.
                    </p>
                </div>

                    <div className="how-item how-track-organize">
                        <h4>Track & Organize</h4>
                        <p>
                        Stay on top of your Pokémon collection—track what you own, uncover gaps  
                        in your binder, and watch your collection grow!
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Why Collectors Love Dexly */}
            <section className="why-collectors-love-section">
                <h3>Why Collectors Love Dexly</h3>
                <div className="benefits-wrapper">
                    <div className="benefit-card benefit-access-anywhere">
                        <h4>Access Your Collection Anywhere</h4>
                        <p>
                            See exactly which Pokémon cards you need for a set, which ones you want,  
                            or even show off your rare hits—no binders required. Whether you’re at a  
                            tournament, a meetup, or just chatting with friends, Dexly lets you pull up  
                            your entire collection on your phone or laptop without risking damage or loss.
                        </p>
                    </div>

                    <div className="benefit-card benefit-plan-virtual">
                        <h4>Plan Your Binder Layout Virtually</h4>
                        <p>
                        Skip the trial-and-error with real cards. Drag and drop cards in Dexly to  
                        experiment with different page layouts, color schemes, or themes before you  
                        ever touch your physical binder. That means less wasted time (and fewer  
                        misplaced cards) when you go to assemble your actual pages.
                        </p>
                    </div>

                    <div className="benefit-card benefit-discover-chase">
                        <h4>Discover and Chase New Cards</h4>
                        <p>
                            Scrolling through Dexly is surprisingly addictive. You might stumble on a  
                            card you’ve never seen, spark a new chase, or uncover hidden gems for your  
                            collection. It turns simple browsing into a mini-treasure hunt—every visit  
                            feels like a fun, card-finding adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. How to Get Started */}
            <section className="how-to-get-started-section">
                <h3>How to Get Started</h3>
                <div className="get-started-wrapper">
                    <div className="get-started create-your-account">
                        <h4>Create Your Account</h4>
                        <p>
                            Create an account by clicking the “Get Started” button at the top of the page, or click “Login.”
                        </p>
                    </div>

                    <div className="get-started import-and-organize">
                        <h4>Build & Organize</h4>
                        <p>
                            After creating an account (or logging in), click the “Binders” button at the top of the page to build your first binder. 
                            Give it a name, add a cover image, and make it yours!
                        </p>
                    </div>

                    <div className="get-started explore-and-track">
                        <h4>Explore & Track</h4>
                        <p>
                            Now that you have an account and somewhere to store your cards, it’s time to start searching! 
                            Click “Cards” at the top of the page and begin scrolling. 
                            Alternatively, click inside the search bar to filter cards by name or set.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default LandingPage
