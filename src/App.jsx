import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Movies from "../src/pages/Movies"
import MoviesCard from './components/MoviesCard';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
