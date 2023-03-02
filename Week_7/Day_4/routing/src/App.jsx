import './App.css';
import projectsData from './assets/projects.json';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home book="Lord of the rings" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/pokemon" element={<Pokedex />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
