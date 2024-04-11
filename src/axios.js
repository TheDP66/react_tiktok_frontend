import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend66.herokuapp.com/",
});

export default instance;
