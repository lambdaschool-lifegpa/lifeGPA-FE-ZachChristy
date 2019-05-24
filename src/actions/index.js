import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  console.log(creds)
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://newlifegpa.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('userId', res.data.user.id);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.message
      });
    });
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = creds => dispatch => {
    dispatch({type: LOGOUT_SUCCESS})
    return {
      payload: creds
    }
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://newlifegpa.herokuapp.com/api/register', creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message
      });
    });
};

export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const getUserData = id => dispatch => {
  dispatch({ type: FETCH_USER_DATA_START });
  return axiosWithAuth()
    .get(`/api/users/habits/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_USER_DATA_FAILURE,
        payload: err.message
      });
    });
};

export const FETCH_HABIT_START = 'FETCH_HABIT_START';
export const FETCH_HABIT_SUCCESS = 'FETCH_HABIT_SUCCESS';
export const FETCH_HABIT_FAILURE = 'FETCH_HABIT_FAILURE';

export const getHabit = id => dispatch => {
  dispatch({ type: FETCH_HABIT_START });
  axiosWithAuth()
    .get(`/api/habits/${id}/`)
    .then(res => {
      console.log('gethabit', res.data)
      dispatch({ type: FETCH_HABIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_HABIT_FAILURE,
        payload: err.message
      });
    });
};

export const CREATE_HABIT_START = 'CREATE_HABIT_START';
export const CREATE_HABIT_SUCCESS = 'CREATE_HABIT_SUCCESS';
export const CREATE_HABIT_FAILURE = 'CREATE_HABIT_FAILURE';

export const createHabit = habit => dispatch => {
  dispatch({ type: CREATE_HABIT_START });
  return axiosWithAuth()
    .post('/api/habits', habit)
    .then(res => {
      dispatch({ type: CREATE_HABIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: CREATE_HABIT_FAILURE,
        payload: err.message
      });
    });
};

export const UPDATE_HABIT_START = 'UPDATE_HABIT_START';
export const UPDATE_HABIT_SUCCESS = 'UPDATE_HABIT_SUCCESS';
export const UPDATE_HABIT_FAILURE = 'UPDATE_HABIT_FAILURE';

export const updateHabit = habit => dispatch => {
  dispatch({ type: UPDATE_HABIT_START });
  return axiosWithAuth()
    .put(`/api/habits/${habit.id}`, habit)
    .then(res => {
      dispatch({ type: UPDATE_HABIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_HABIT_FAILURE,
        payload: err.message
      });
    });
};

export const DELETE_HABIT_START = 'DELETE_HABIT_START';
export const DELETE_HABIT_SUCCESS = 'DELETE_HABIT_SUCCESS';
export const DELETE_HABIT_FAILURE = 'DELETE_HABIT_FAILURE';

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_START });
  return axiosWithAuth()
    .delete(`/api/habits/${id}`)
    .then(res => {
      dispatch({ type: DELETE_HABIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_HABIT_FAILURE,
        payload: err.message
      });
    });
};

export const FETCH_CATEGORY_LIST_START = 'FETCH_CATEGORY_LIST_START';
export const FETCH_CATEGORY_LIST_SUCCESS = 'FETCH_CATEGORY_LIST_SUCCESS';
export const FETCH_CATEGORY_LIST_FAILURE = 'FETCH_CATEGORY_LIST_FAILURE';

export const getCategoryList= () => dispatch => {
  dispatch({ type: FETCH_CATEGORY_LIST_START });
  axiosWithAuth()
    .get(`/api/categories`)
    .then(res => {
      dispatch({ type: FETCH_CATEGORY_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_CATEGORY_LIST_FAILURE,
        payload: err.message
      });
    });
};

export const CREATE_CATEGORY_START = 'CREATE_CATEGORY_START';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export const createCategory = category => dispatch => {
  dispatch({ type: CREATE_CATEGORY_START });
  return axiosWithAuth()
    .post('/api/categories', category)
    .then(res => {
      console.log(res)
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data.categories });
    })
    .catch(err => {
      dispatch({
        type: CREATE_CATEGORY_FAILURE,
        payload: err.message
      });
    });
};

export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

export const updateProfile = profile => dispatch => {
  dispatch({ type: UPDATE_PROFILE_START });
  return axiosWithAuth()
    .put(`/api/users/${profile.id}`, profile)
    .then(res => {
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        payload: err.message
      });
    });
};

export const DELETE_PROFILE_START = 'DELETE_PROFILE_START';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_FAILURE = 'DELETE_PROFILE_FAILURE';

export const deleteProfile = id => dispatch => {
  dispatch({ type: DELETE_PROFILE_START });
  return axiosWithAuth()
    .delete(`/api/users/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_PROFILE_FAILURE,
        payload: err.message
      });
    });
};
