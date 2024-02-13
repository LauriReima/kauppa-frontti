import axios from 'axios';
const URL = 'https://restcountries.com/v3.1/all'
const front = 'http://localhost:3001/api/notes/'
const products = 'http://localhost:3001/api/products/'
const localURL = '/api/notes/'

const getAll = async () => {
    const req = axios.get(products)
    const res = await req
    return res
}

const create = async (product) => {
    const req = axios.post(products, product)
    const res = await req
    return res.data
}
const deleteProduct = (id) => {
    return axios.delete(`${products}${id}`)
}
// eslint-disable-next-line
export default { getAll, create, deleteProduct }