import axios from 'axios';

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5005',
    });

    //here we intercept every request that uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      //inside this middleware function the first thing we do is get the token from the localstorage
      const storedToken = localStorage.getItem('authToken');

      //if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        //here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  //Here we can create the methods to connect to the API

  //Get All Projects
  getAllProjects = () => {
    return this.api.get('/api/projects');
    //the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  };

  //Create a project
  //body refers to the object with title and description
  createProject = (body) => {
    return this.api.post('/api/projects', body);
  };
  getSingleProject = (id) => {
    return this.api.get(`/api/projects/${id}`);
  };

  //getbyId / details
  //update
  //delete
}

const projectService = new ProjectService();

export default projectService;
