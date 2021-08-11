import { adminUrl } from "../config/Url";
import axios from 'axios'
export function adminLogin(data){
    return axios.post(`${adminUrl}adminlogin`,data);
}