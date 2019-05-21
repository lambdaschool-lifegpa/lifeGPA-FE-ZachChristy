import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log(localStorage)
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
      'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://newlifegpa.herokuapp.com'
  });
};
