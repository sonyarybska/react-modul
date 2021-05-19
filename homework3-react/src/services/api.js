import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => {
    return axiosInstance.get('/posts');
}
const getUser = (id) => {
    return axiosInstance.get('/posts' + id);
}
export {
    getUsers, getUser, axiosInstance
}