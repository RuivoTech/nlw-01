import axois from "axios";

const api = axois.create({
    baseURL: "http://192.168.1.8:3333"
});

export default api;