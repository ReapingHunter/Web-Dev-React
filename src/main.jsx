import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Index from './Components/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router >
        <Route exact path ='/' component = {Index} />
    </Router>
  </div>,
)
