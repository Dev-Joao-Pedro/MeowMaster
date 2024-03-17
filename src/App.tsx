// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Meus Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cats from './pages/Cats'
import About from './pages/About'
import Login from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cats' element={<Cats />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
