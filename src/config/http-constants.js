import axios from "axios";
let baseURL;
if ((!process.env.NODE_ENV !== process.env.NODE_ENV) === "production") {
  baseURL = "http://localhost:3000/";
} else {
  baseURL = "";
}

export const HTTP = axios.create({
  baseURL: baseURL
});
