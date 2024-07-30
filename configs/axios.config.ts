import axios from "axios";
import { BASE_URL } from "@/constants";

// base url
export const customAxios = axios.create({
  baseURL: BASE_URL,
});
