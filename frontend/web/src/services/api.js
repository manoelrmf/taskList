import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9090/rest/'
})

export default api