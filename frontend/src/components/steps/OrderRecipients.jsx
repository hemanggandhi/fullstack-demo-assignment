import React from "react";

const OrderRecipients = ({ next, back }) => {
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
            className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Horizontal line at 50px */}
      <div className="mt-[10px] mb-[10px]">
        <hr className="border-gray-300" />
      </div>

      {/* Buttons */}
      <div className="mb-[10px] text-right pr-5">
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={next}
        >
          Continue
        </button>
        <button
          className="bg-skycustom text-white py-2 px-4 ml-4 rounded"
          onClick={back}
        >
          Back
        </button>
      </div>
    </div>
  );
};
export default OrderRecipients;
