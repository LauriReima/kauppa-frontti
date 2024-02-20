import axios from 'axios';

const url = 'http://localhost:3001/api/users/'

const getAll = async () =>{
    const req = axios.get(url)
    const res = await req
    return res.data
}
const getUserById = async (id) =>{
    const req = axios.get(`${url}${id}`)
    const res = await req
    return res.data
}
const create = async (user) => {
    const req = axios.post(url, user)
    const res = await req
    return res.data
}
const addToCart = async (userId, product) => {
    const req =  axios.put(`${url}${userId}`, {product})
    const res = await req
    console.log(res.data);
    return res.data;
}

// eslint-disable-next-line
export default {  create, getAll, addToCart, getUserById }