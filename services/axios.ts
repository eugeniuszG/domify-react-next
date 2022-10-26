import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Content-Type": "application/vnd.api+json",
    "token": process.env.NEXT_PUBLIC_TOKEN as string
  }
});