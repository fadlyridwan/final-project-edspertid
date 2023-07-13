import { createSlice } from "@reduxjs/toolkit";
import { getAll, getDetail } from "./action";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      title: "",
      description: "",
      category: "",
      image: "",
      price: "",
      rating: "",
      count: "",
      rate: "",
    },
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default productSlice.reducer;
