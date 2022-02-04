import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uploadAvatar } from "../services/profileService"

export const upload = createAsyncThunk(
  'profile/UPLOAD',
  async (image) => {
    const response = await uploadAvatar(image); 
    return response.data;
  }
)

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    status: "idle",
    value: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(upload.pending, (state) => {
        state.status = "loading";
      })
      .addCase(upload.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(upload.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload.data; 
      })
  }
})

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer;
