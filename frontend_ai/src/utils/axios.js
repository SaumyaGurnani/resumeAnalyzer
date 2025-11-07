import axios from 'axios';
import e from 'express';
const insance= axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})
export default insance;