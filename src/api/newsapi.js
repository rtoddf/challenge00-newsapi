import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org",
  headers: {
    Authorization: "9d4f357bf80f41a1be1dedbe65929067"
  }
});
