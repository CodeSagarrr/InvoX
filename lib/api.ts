import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface CreateProfileInterface {
  name: string;
  email: string;
  businessName: string;
  logo: string;
  gstNumber: string;
  pan: string;
  address: string;
}

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
