import axios from 'axios'

const baseUrl = 'http://localhost:1337/api/notifications'

/*
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
*/
const dispatch = (notification) => {

    alert('dispatched')
    const request = axios.post(baseUrl, notification)
    return request.then(response => response.data)

}
export default {
    dispatch
}
