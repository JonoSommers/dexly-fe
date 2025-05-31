import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <section className='routing'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </section>
  )
}

export default App;
