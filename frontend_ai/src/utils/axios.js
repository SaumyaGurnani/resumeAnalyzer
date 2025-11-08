import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://resume-analyzer-backend-1nl2.onrender.com',
    
})
export default instance;