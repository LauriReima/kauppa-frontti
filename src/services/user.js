import axios from 'axios';
import OpenAI from "openai";

require('dotenv').config();
const apiKey = process.env.API_KEY
const openai = new OpenAI({apiKey:apiKey})
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
    console.log(res.data, 'nappi');
    return res.data;
}
const chatGPT = async (word) => {
    const completion = await openai.chat.completions.create({
        messages: [{"role": "user", "content": word}],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0].message);
}

// eslint-disable-next-line
export default {  create, getAll, addToCart, getUserById, chatGPT }