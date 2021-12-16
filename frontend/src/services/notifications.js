import axios from 'axios'

const baseUrl = 'http://localhost:1337/api/notifications'


const dispatch = (notification) => {
    const request = axios.post(baseUrl, notification)
    return request.then(response => response.data)

}

const getNotificationCount = (userId) => {
    const request = axios.get(`${baseUrl}/count/${userId}`)
    return request.then(response => response.data)
}

const getNotifications = (userId) => {
    const request = axios.get(`${baseUrl}/${userId}`)
    return request.then(response => response.data)
}

const acceptRequest = (notificationId) => {
    const request = axios.post(`${baseUrl}/accept/${notificationId}`)
    return request.then(response => response.data)
}

const declineRequest = (notificationId) => {
    const request = axios.post(`${baseUrl}/decline/${notificationId}`)
    return request.then(response => response.data)
}

export default {
    dispatch,getNotificationCount,getNotifications,acceptRequest,declineRequest
}
