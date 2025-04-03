import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./sections/home"
import AboutMe from "./sections/aboutMe"
import Projects from "./sections/projects"
import Contact from "./sections/contact"
import "bootstrap/dist/css/bootstrap-grid.min.css"; // Only importing grid system
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
function App() {

  return (
    <div className="container-fluid border-warning vh-100 view">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
