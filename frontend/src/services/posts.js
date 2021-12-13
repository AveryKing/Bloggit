import axios from 'axios'

const baseUrl = 'http://localhost:1337/api/posts'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getPost = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
const create = async newObject => {

    const config = {
        headers: { Authorization: token},
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data

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
    getAll,getPost,create,setToken
}
