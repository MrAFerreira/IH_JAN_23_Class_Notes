import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './components/Private';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Private>
              <Projects />
            </Private>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/new" element={<AddProject />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
