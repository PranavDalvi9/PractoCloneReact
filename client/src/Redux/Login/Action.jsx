// import { useDispatch } from "react-redux";


export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"

export const loginLoading = () => ({
  type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const logout = () => ({
  type: LOGOUT
})

export const login = ({ username, password }) => (dispatch) => {
  // const dispatch = useDispatch();

  dispatch(loginLoading())
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess({ username, token: res.token })))
    .catch((err) => dispatch(loginFailure()))
}

