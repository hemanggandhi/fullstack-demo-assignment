import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactName: "",
  contactNumber: "",
  contactEmail: "",
};

const orderRecipientsSlice = createSlice({
  name: "orderRecipients",
  initialState,
  reducers: {
    setContactName: (state, action) => {
      state.contactName = action.payload;
    },
    setContactNumber: (state, action) => {
      state.contactNumber = action.payload;
    },
    setContactEmail: (state, action) => {
      state.contactEmail = action.payload;
    },
    resetOrderRecipients: () => initialState,
  },
});

export const {
  setContactName,
  setContactNumber,
  setContactEmail,
  resetOrderRecipients,
} = orderRecipientsSlice.actions;

export default orderRecipientsSlice.reducer;
