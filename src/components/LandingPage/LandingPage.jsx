import './LandingPage.css'
import MainNavBar from '../NavBars/MainNavBar'

function LandingPage() {
    return (
        <section className='landing-page-container'>
            <div className='navbar'>
                <MainNavBar />
            </div>

            <div className='header-section'>
                <header>
                    <h1>Dexly</h1>
                </header>
            </div>
        </section>
    )
}

export default LandingPage