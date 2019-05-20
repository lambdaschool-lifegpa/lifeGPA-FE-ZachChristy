import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('https://newlifegpa.herokuapp.com/api/login', creds)
    .then(res => {
      console.log(res)
      // localStorage.setItem('token', res.data.token);
      // dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${err}`
      });
    });
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  console.log(creds);
  dispatch({ type: REGISTER_START });
  axios
    .post('https://newlifegpa.herokuapp.com/api/register', creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: `${err}`
      });
    });
};

export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const getUserData = () => dispatch => {
  dispatch({ type: FETCH_USER_DATA_START });
  axiosWithAuth()
    .get('/api/users/habits/:id')
    .then(res => {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_DATA_FAILURE,
        payload: `${err}`
      });
    });
};

export const CREATE_HABIT_START = 'CREATE_HABIT_START';
export const CREATE_HABIT_SUCCESS = 'CREATE_HABIT_SUCCESS';
export const CREATE_HABIT_FAILURE = 'CREATE_HABIT_FAILURE';

export const createHabit = habit => dispatch => {
  dispatch({ type: CREATE_HABIT_START });
  return axiosWithAuth()
    .post('/api/userData', habit)
    .then(res => {
      dispatch({ type: CREATE_HABIT_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: CREATE_HABIT_FAILURE,
        payload: `${err}`
      });
    });
};

export const UPDATE_HABIT_START = 'UPDATE_HABIT_START';
export const UPDATE_HABIT_SUCCESS = 'UPDATE_HABIT_SUCCESS';
export const UPDATE_HABIT_FAILURE = 'UPDATE_HABIT_FAILURE';

export const updateHabit = habit => dispatch => {
  dispatch({ type: UPDATE_HABIT_START });
  return axiosWithAuth()
    .put(`/api/userData/${habit.id}`, habit)
    .then(res => {
      dispatch({ type: UPDATE_HABIT_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_HABIT_FAILURE,
        payload: `${err}`
      });
    });
};

export const DELETE_HABIT_START = 'DELETE_HABIT_START';
export const DELETE_HABIT_SUCCESS = 'DELETE_HABIT_SUCCESS';
export const DELETE_HABIT_FAILURE = 'DELETE_HABIT_FAILURE';

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_START });
  return axiosWithAuth()
    .delete(`/api/userData/${id}`)
    .then(res => {
      dispatch({ type: DELETE_HABIT_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: DELETE_HABIT_FAILURE,
        payload: `${err}`
      });
    });
};
