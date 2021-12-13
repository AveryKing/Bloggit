import ReactDOM from 'react-dom'


const loginUser = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('nav-buttons-nouser'))

}

export default {
    loginUser
}