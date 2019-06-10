/**
 * api
 */

import axios from "axios";

const BASE_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;


export const apiClient = params => {
  const headers = () => ({
    "Content-Type": "application/json",
    Accept: "application/json"
  });
  const url = `${params.module}${params.module.includes('?') ? '&' : '?'}apikey=${PUBLIC_KEY}`

  const options = {
    method: params.method.toLowerCase(),
    baseURL: BASE_URL,
    url,
    // params: localParams,
    data: params.data,
    headers: headers()
  };
  return axios
    .request(options)
    .then(res => res.data)
    .catch(err => {
      throw err.response;
    });
};
