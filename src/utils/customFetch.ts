import axios from "axios";

const prodcuctionUrl = " https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: prodcuctionUrl
});
