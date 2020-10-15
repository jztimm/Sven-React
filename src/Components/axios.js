import axios from 'axios';

const instance = axios.create({
   // api url (cloud function)
   baseURL: 'http://localhost:5001/amz-clone-8c5ef/us-central1/api'
});

export default instance