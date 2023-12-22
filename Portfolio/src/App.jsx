import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//importing pages
import Home from "./pages/Home";
import EButtons from './pages/Ebuttons';
import About from './pages/About'

//importing components
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buttons" element={<EButtons />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
