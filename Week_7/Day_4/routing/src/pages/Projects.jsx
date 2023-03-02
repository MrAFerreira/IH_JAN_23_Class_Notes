import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage({ projectsData }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
            <Link to={`/projects/${project._id}`}>See details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
