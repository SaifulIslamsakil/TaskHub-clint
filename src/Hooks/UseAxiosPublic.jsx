import axios from "axios";

const data = axios.create({
    baseURL:"https://task-management-server-khaki-sigma.vercel.app"
})
const UseAxiosPublic = () => {
    return data
};

export default UseAxiosPublic;