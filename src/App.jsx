import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx'
import Portfolio from './components/portfolio/portfolio.jsx';
import './App.css';

function App() {

  return (
    <Router >
      <Routes>
        <Route path = '' element={<Header/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/fullstack' />
          <Route path='/backend' />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
