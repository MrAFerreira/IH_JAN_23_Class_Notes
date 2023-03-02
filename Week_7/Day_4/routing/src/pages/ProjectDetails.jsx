import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../assets/projects.json';

function ProjectDetails() {
  const [project, setProject] = useState(null);

  // projectId needs to be called this way because in App.jsx we declared the route with /projects/:projectId <-
  const { projectId } = useParams();

  const foundProject = projectsData.find((project) => {
    return project._id === projectId;
  });

  return (
    <div className="details">
      <h2>Project</h2>
      {foundProject && (
        //fragment
        // <React.fragment></React.fragment>
        <>
          <h3>{foundProject.name}</h3>
          <p>{foundProject.description}</p>
        </>
      )}

      <Link to="/projects">Back to projects</Link>
    </div>
  );
}

export default ProjectDetails;
