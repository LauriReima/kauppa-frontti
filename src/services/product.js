import axios from 'axios';
const products = 'http://localhost:3001/api/products/'

const getAll = async () => {
    const req = axios.get(products)
    const res = await req
    return res
}
const getById = async (id) => {
    const req = axios.get(`${products}${id}`)
    const res = await req
    return res.data
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
export default { getAll, getById, create, deleteProduct }