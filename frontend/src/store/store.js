import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order/orderSlice";
import propertyInfoReducer from "./features/propertyInfo/propertyInfoSlice";
import orderRecipientsReducer from "./features/orderRecipients/orderRecipientsSlice";
import excelReducer from "./features/excelSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    propertyInfo: propertyInfoReducer,
    orderRecipients: orderRecipientsReducer,
    excel: excelReducer,
  },
});
