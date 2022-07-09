/* import axios from "axios";

const HTTP = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:3010/" : "",
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    // "Access-Control-Allow-Headers":
    //   "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Content-Type": "application/json"
    // mode: "cors"
  }
  // timeout: 15000,
});

HTTP.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response) {
      if (error.response.status == 401) {
        // if(router.currentRoute.value.fullPath !== "/auth") {
        //   router.replace("/");
        // }
      }
    }
    return Promise.reject(error);
  }
);

export { HTTP }; */

import axios from "axios";

export const HTTP = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8000/user/" : "",
  headers: {
    "Content-Type": "application/json"
  }
});

/* import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8000",
  Headers: {
    "Content-Type": "application/json"
  }
}); */
