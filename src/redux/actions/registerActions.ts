import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "../../services/authService";
import type { RegisterInterface } from "../../interface/registerInterface";

export const submitUserForm = createAsyncThunk(
  "userRegister",
  async (formData: RegisterInterface, { rejectWithValue }) => {
    try {
      return await registerApi(formData);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
