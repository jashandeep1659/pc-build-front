import axios from "axios";
import { Children } from "react";
import api from "../actions/";
import { baseURL } from "../api/index";

export const UserLoginChecker = () => {
    return async (dispatch) => {
        let userStatus = false;
        if (localStorage.getItem("token")) {
            let AuthTokens = JSON.parse(localStorage.getItem("token"));
            const refresh = AuthTokens.refresh;
            const response = await axios
                .post(`${baseURL}api/token/refresh/`, { refresh })
                .catch((error) => {
                    localStorage.removeItem("token");
                    userStatus = false;
                });
            if (response && response.status === 200) {
                localStorage.setItem("token", JSON.stringify(response.data));
                userStatus = true;
            }
        } else {
            userStatus = false;
        }
        dispatch({ type: "UserLoginChecker", payload: userStatus });
    };
};
