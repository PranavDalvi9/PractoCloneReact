import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./Action"

const initState = {
    error: false,
    loading: false,
    isAuthenticate: false,
    token: "",
    userName: ""
};

export const loginReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return { ...store, loading: true };

        case LOGIN_SUCCESS:
            return {
                ...store,
                error: false,
                loading: false,
                isAuthenticate: true,
                token: payload.token,
                userName: payload.username
            };

        case LOGIN_FAILURE:
            return {
                ...initState
            }

        case LOGOUT:
            return {
                ...store,
                error: false,
                loading: false,
                isAuthenticate: false,
                token: "",
                userName: ""
            }

        default:
            return store
    }
}