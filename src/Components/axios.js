import axios from 'axios';

const instance = axios.create({
   baseUrl: '...' // api url (cloud function)
});

export default instance