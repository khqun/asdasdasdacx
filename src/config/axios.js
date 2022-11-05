import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
};
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    https: config,
});
// interceptor cua axios
export default instance;