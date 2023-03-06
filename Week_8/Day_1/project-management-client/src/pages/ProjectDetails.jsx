import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProjectDetails() {
  const [project, setProject] = useState(null);

  const { id } = useParams();

  const getProject = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/${id}`);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <h2>Tasks:</h2>
      {project &&
        project.tasks.map((task) => {
          return (
            <div key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          );
        })}

      {project && <Link to={`/projects/edit/${project._id}`}> Edit project </Link>}
    </div>
  );
}

export default ProjectDetails;
