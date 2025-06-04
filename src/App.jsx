import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginModal from './components/Modals/LoginModal.jsx';
import MainNavBar from './components/NavBars/MainNavBar.jsx';

function App() {
  return (
    <section className='routing'>
      <MainNavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginModal />}/>
      </Routes>
    </section>
  )
}

export default App;
