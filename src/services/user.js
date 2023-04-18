import axios from 'axios';

const url = 'http://localhost:3001/api/users/'

const create = async (user) => {
    const req = axios.post(url, user)
    const res = await req
    return res.data
}

// eslint-disable-next-line
export default {  create }