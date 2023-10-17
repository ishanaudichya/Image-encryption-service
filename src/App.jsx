import React from 'react'
import ImageUploader from './Components/ImageUploader'
import ImageDecrypter from './Components/ImageDecrypter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {

  return (
    
<BrowserRouter>

<Routes>

<Route path="/" element={<ImageUploader/>} />
<Route path="/decrypt" element={<ImageDecrypter/>} />

    
    
</Routes>
</BrowserRouter>
  )
}

export default App