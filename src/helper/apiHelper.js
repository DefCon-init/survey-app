import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://0.0.0.0:4000/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getApi = api => {
  return new Promise((resolve, reject) => {
    fetcher
      .get(api, { headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') } })
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
          localStorage.removeItem('token')
        }
        reject(err)
      });
  });
};

export const postApi = (api, params, headers = { headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') } }) => {
  return new Promise((resolve, reject) => {
    fetcher
      .post(api, params, headers)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
          localStorage.removeItem('token')
        }
        reject(err)
      });
  });
};

export const putApi = (api, params, headers = { headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') } }) => {
  return new Promise((resolve, reject) => {
    fetcher
      .put(api, params, headers)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
          localStorage.removeItem('token')
        }
        reject(err)
      });
  });
};

export const deleteApi = api => {
  return new Promise((resolve, reject) => {
    fetcher
      .delete(api, { headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') } })
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
          localStorage.removeItem('token')
        }
        reject(err)
      });
  });
};
