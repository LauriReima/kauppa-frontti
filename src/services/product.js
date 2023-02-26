import axios from 'axios';
const URL = 'https://restcountries.com/v3.1/all'

const getAll = async () => {
    const req = axios.get(URL)
    const res = await req
    return res.data
}

export default getAll