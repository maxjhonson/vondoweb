import axios from "axios";

const axios = axios.create({
  baseURL: process.env.REACT_APP_CORE_API,
});

export default axios;
