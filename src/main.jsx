import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Index from './Components/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
          <Route exact path ='/' element = {<Index/>} />
      </Routes>
    </BrowserRouter>
  </div>,
)
