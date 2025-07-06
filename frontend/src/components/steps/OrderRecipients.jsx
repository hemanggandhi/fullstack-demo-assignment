import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setContactName,
  setContactNumber,
  setContactEmail,
} from "../../store/features/orderRecipients/orderRecipientsSlice";

const OrderRecipients = ({ next, back }) => {
  const dispatch = useDispatch();
  const { contactName, contactNumber, contactEmail } = useSelector(
    (state) => state.orderRecipients
  );

  const [error, setError] = useState("");

  const validateFields = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactName.trim()) return "Contact Name is required.";
    if (!nameRegex.test(contactName.trim()))
      return "Contact Name must contain only letters and spaces.";

    if (!contactNumber.trim()) return "Contact Number is required.";
    if (!numberRegex.test(contactNumber.trim()))
      return "Contact Number must contain only digits.";

    if (!contactEmail.trim()) return "Contact Email is required.";
    if (!emailRegex.test(contactEmail.trim()))
      return "Contact Email is not valid.";

    return "";
  };

  const handleContinue = () => {
    const errorMsg = validateFields();
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setError("");
      next();
    }
  };

  return (
    <div className="min-h-[350px] relative pt-4 left-10 w-full lg:w-[95%] border border-gray-200 rounded-md shadow-sm bg-white">
      {/* Top-left label */}
      <div className="left-10 pl-5 text-left">
        <label className="font-semibold">Report Contact Information</label>
      </div>

      <div className="min-h-[275px] left-10 pl-5 mt-2 text-left">
        <div className="flex items-center gap-4">
          <label className="font-semibold min-w-[126px]">
            Contact Name<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter contact name"
            value={contactName}
            onChange={(e) => dispatch(setContactName(e.target.value))}
            className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-4 mt-2">
          <label className="font-semibold min-w-[120px]">
            Contact Number<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) => dispatch(setContactNumber(e.target.value))}
            className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-4 mt-2">
          <label className="font-semibold min-w-[126px]">
            Contact Email<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter contact email"
            value={contactEmail}
            onChange={(e) => dispatch(setContactEmail(e.target.value))}
            className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 font-semibold px-5 mt-2">{error}</div>
      )}

      {/* Divider */}
      <div className="mt-[10px] mb-[10px]">
        <hr className="border-gray-300" />
      </div>

      {/* Buttons */}
      <div className="mb-[10px] text-right pr-5">
        <button
          className="bg-skycustom text-white py-2 px-4 mr-4 rounded"
          onClick={back}
        >
          Back
        </button>
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrderRecipients;
