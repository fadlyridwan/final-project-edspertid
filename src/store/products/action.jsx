import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getAll = createAsyncThunk("feat/getAllProducts", async () => {
  try {
    const response = await httpService.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getDetail = createAsyncThunk(
  "feat/getProduct",
  async (productId) => {
    try {
      const response = await httpService.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
