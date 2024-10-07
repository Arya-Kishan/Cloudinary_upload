import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import VideoUpload from './pages/VideoUpload'
import AudioUpload from './pages/AudioUpload'
import ImageUpload from './pages/ImageUpload'
import Navbar from './components/Navbar'
import MixUpload from './pages/MixUpload'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/image' element={<ImageUpload />} />
        <Route path='/audio' element={<AudioUpload />} />
        <Route path='/video' element={<VideoUpload />} />
        <Route path='/mix' element={<MixUpload />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App