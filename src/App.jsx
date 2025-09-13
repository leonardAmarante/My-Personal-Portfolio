import './App.css'
import Home from "./sections/home"
import Technologies from './sections/technologies'
import AboutMe from "./sections/aboutMe"
import Projects from "./sections/projects"
import Contact from "./sections/contact"
import Footer from "./sections/footer"
import "bootstrap/dist/css/bootstrap-grid.min.css";
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
function App() {

  return (
    <main className="container-fluid border-warning vh-100 view">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
