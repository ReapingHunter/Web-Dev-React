import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Index from './Components/index.jsx'
import { Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route exact path ='/' element = {<Index/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
