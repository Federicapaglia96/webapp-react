import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Movies from "../src/pages/Movies"
import MoviesCard from './components/MoviesCard';
import SingleMovie from '../src/pages/singleMovie';
import GuestLayout from '../src/layout/GuestLayout';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {


  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<GuestLayout />} />
        <Route index element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/singleMovie/:movieId" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
