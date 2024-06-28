import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_BASE_URL = BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { axiosInstance };
