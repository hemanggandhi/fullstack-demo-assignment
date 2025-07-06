import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedClient: null,
  clientLoanNumber: "",
  reportTypes: [],
  selectedReportTypes: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSelectedClient(state, action) {
      state.selectedClient = action.payload;
    },
    setClientLoanNumber(state, action) {
      state.clientLoanNumber = action.payload;
    },
    setReportTypes(state, action) {
      state.reportTypes = action.payload;
    },
    setSelectedReportTypes: (state, action) => {
      state.selectedReportTypes = action.payload;
    },
    resetOrderData(state) {
      return initialState;
    },
  },
});

export const {
  setSelectedClient,
  setClientLoanNumber,
  setReportTypes,
  resetOrderData,
  setSelectedReportTypes,
} = orderSlice.actions;

export default orderSlice.reducer;
