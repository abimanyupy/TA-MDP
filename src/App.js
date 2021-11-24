import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dj from './components/Dj'
import Djdtl from './components/Djdtl'
import NavBawah from './components/NavBawah'
import Rapper from './components/Rapper'
import Rapperdtl from './components/Rapperdtl'
import About from './components/About'
import { createBrowserHistory } from 'history'



const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dj" element={<Dj />} />
          <Route path="/dj/:djId" element={<Djdtl />} />
          <Route path="/rapper" element={<Rapper />} />
          <Route path="/rapper/:rapperId" element={<Rapperdtl />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer>
          <NavBawah />
        </footer>
      </div>
    </Router>
  )
}




export default App

