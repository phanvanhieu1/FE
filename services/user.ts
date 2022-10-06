import axios from "axios";
import { User, UserLogin } from "../interfaces";

const res = process.env.API_URL;

export const registerUser = async (user: User) => {
  return await axios.post(`https://testapiv1.herokuapp.com/core/auth/sign-up`, {
    fullName: user.fullName,
    username: user.username,
    phone: user.phone,
    email: user.email,
    password: user.password,
  });
};

export const loginUser = async (user: UserLogin) => {
  return await axios.post(`https://testapiv1.herokuapp.com/core/auth/sign-in`, {
    email: user.email,
    password: user.password,
  });
};
