import axios from "axios";

const instance = axios.create({
  baseURL: "https://venkatasurya.herokuapp.com/",
});

export default instance;
