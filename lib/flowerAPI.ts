import axios from "axios";

const flowerApi = axios.create({
  baseURL: "https://flowers-mock-data.firebaseio.com/flowers",
});

export const getAllFlowers = async () => {
  const response = await flowerApi.get("/.json");
  return response.data;
};

export const getFlower = async (flowerId: string) => {
  const response = await flowerApi.get(`/${flowerId}.json`);
  return response.data;
};
