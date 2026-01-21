import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const createProfile = async (payload: Object) => {
  const { data } = await api.post("/create-profile", payload, {
    withCredentials: true,
  });

  return data;
};

export const getUserProfileData = async () => {
  const { data } = await api.get("/getUser", {
    withCredentials: true,
  });

  return data?.data?.[0];
};

export const CreateClient = async (payLoad: object) => {
  const { data } = await api.post("/create-client", payLoad, { 
    withCredentials: true 
  });

  return data;
};