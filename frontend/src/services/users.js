import axios from 'axios'

const baseUrl = 'http://localhost:1337/api/users'

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


const getFriends = (id) => {
    const request = axios.get(`${baseUrl}/friends/${id}`)
    return request.then(response => response.data)
}

const removeFriend = (user1, user2) => {
    const request = axios.post(`${baseUrl}/friends/remove`, {user1:user1, user2: user2})
    return request.then(response => response.data)
}

const getOutgoingFriendRequests = (id) => {
    const request = axios.get(`${baseUrl}/friends/outgoing/${id}`)
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
    getAll,getUser,create,getFriends,getOutgoingFriendRequests
}
