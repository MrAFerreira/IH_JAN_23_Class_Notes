import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, description };
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/projects`, body);
      navigate('/projects');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Create Project:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={handleTitle} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        <button type="submit">Create project</button>
      </form>
    </section>
  );
}

export default AddProject;
