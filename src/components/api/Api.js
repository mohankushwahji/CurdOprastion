import axios from "axios";
// Get User API
const url = 'http://localhost:3001/post';
export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
// Add User API
export const adduser = async (user) => {
    return await axios.post(url, user);
}

// Edit API
export const editusers = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

// Delete API
export const userDelete = async (id) => {
    return await axios.delete(`${url}/${id}`);
}