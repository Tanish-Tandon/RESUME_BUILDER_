// import axios from "axios";

// const api = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:9000",
//     timeout: 10000,
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL ||
    "https://resume-builder-backend-oh6y.onrender.com",
  timeout: 10000,
});

export default api;