import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/fpeduu/biblioteca-agil-db/books'
});

export default api;