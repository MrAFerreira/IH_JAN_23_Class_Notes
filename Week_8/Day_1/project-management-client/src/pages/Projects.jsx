//package imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//css

//components

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <Link to={`/projects/${project._id}`} key={project._id}>
            <h3>{project.title}</h3>
          </Link>
        );
      })}
    </section>
  );
}

export default Projects;
