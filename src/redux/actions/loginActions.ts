import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const submitLoginForm = createAsyncThunk(
    "login",
    async (formData: { email: string; password: string }) => {
      const response = await axios.post(BASE_URL + '/login', formData);
      return response.data;
    }
  );