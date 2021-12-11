import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/users'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getUser = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}


/*
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const erase =(id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

 */

export default {
    getAll,getUser,create
}
