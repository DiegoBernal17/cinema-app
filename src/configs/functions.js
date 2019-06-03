import { url_API } from "./config";
import Axios from "axios";

const get = url => {
  return Axios.get(url_API + url);
};

const post = (url, data) => {
  return Axios.post(url_API + url, data);
};

export { get, post };
