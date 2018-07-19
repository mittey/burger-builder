import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c5f11.firebaseio.com/"
});

export default instance;
