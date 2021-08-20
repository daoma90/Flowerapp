import axios from "axios";

export const flowerApi = axios.create({
  baseURL: "https://flowers-mock-data.firebaseio.com/flowers",
});

export const commentApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
