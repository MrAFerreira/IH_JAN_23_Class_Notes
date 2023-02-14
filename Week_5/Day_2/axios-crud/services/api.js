const axios = require('axios');
//https://ih-crud-api.herokuapp.com

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com',
    });
  }

  //CRUD

  getAllCharacters = () => {
    return this.api.get('/characters');
    // axios.get('https://ih-crud-api.herokuapp.com/characters')
  };

  getOneCharacter = (id) => {
    return this.api.get(`/characters/${id}`);
  };

  createCharacter = (data) => {
    return this.api.post(`/characters`, data);
  };

  editCharacter = (id, data) => {
    return this.api.put(`/characters/${id}`, data);
  };

  deleteCharacter = (id) => {
    return this.api.delete(`/characters/${id}`);
  };
}

module.exports = ApiService;
