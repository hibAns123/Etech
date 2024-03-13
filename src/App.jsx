import { Route, Routes } from 'react-router-dom'
import './App.css'
import Books from './pages/Books'
import Diary from './pages/Diary'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/diary' element={<Diary/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
