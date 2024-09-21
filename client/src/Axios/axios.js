import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-lpz5.onrender.com/api"
})
export default instance