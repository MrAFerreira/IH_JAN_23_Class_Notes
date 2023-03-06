import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/new" element={<AddProject />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
      </Routes>
    </div>
  );
}

export default App;
