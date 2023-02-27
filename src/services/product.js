import axios from 'axios';
const URL = 'https://restcountries.com/v3.1/all'
const front = 'http://localhost:3001/api/notes/'
const localURL = '/api/notes/'
const getAll = async () => {
    const req = axios.get(localURL)
    const res = await req
    return res.data
}

export default getAll