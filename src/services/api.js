import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

export const predictCurrency = (file) => {

  const formData = new FormData();
  formData.append("file", file);

  return API.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

};