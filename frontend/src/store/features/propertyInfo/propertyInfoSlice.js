import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadType: "Single",
  address: "",
  propertyType: "",
  specs: {
    aboveGradeSqft: "",
    hasBasement: null,
    bedrooms: "",
    bathrooms: "",
    yearBuilt: "",
    stories: "",
    lotSize: "",
  },
  uploadedFiles: [],
};

const propertyInfoSlice = createSlice({
  name: "propertyInfo",
  initialState,
  reducers: {
    setUploadType(state, action) {
      state.uploadType = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setPropertyType(state, action) {
      state.propertyType = action.payload;
    },
    updateSpec(state, action) {
      const { key, value } = action.payload;
      state.specs[key] = value;
    },
    setHasBasement(state, action) {
      state.specs.hasBasement = action.payload;
    },
    setUploadedFiles(state, action) {
      state.uploadedFiles = action.payload;
    },
  },
});

export const {
  setUploadType,
  setAddress,
  setPropertyType,
  updateSpec,
  setHasBasement,
  setUploadedFiles,
} = propertyInfoSlice.actions;

export default propertyInfoSlice.reducer;
