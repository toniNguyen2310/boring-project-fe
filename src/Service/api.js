import axios from "../Utilities/axios-customer";

//AUTH
export const callRegister = (email, username, password, phone) => {
  return axios.post("/v1/api/auth/register", {
    email,
    username,
    password,
    phone,
  });
};

export const createData = (data) => {
  return axios.post("/v1/api/data/create", data);
};

export const fetchDataById = (data) => {
  return axios.get(`/v1/api/data?id=${data.id}`);
};






