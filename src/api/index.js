import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import reduxStore from "../store";
import { UserLoginChecker } from "../actions";
const { dispatch } = reduxStore;

export const baseURL = "http://127.0.0.1:8000/";
const axiosInstance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(async (config) => {
    if (localStorage.getItem("token")) {
        let AuthTokens = JSON.parse(localStorage.getItem("token"));
        const user = jwt_decode(AuthTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) {
            config.headers["Authorization"] = `Bearer ${AuthTokens.access}`;
            return config;
        } else if (isExpired) {
            console.log("expired statement runs");
            dispatch(UserLoginChecker());
            return await config;
        }
    } else {
        console.log("tokens not found");
    }
    return config;
});

export default axiosInstance;
