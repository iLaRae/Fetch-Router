
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'

import About from "./pages/About"
import FetchPoke from "./services/FetchPoke"


function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/fetchpoke" element={<FetchPoke />} />


      </Routes>
    </BrowserRouter>


  )
}

export default App
