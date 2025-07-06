import React from "react";
import { useSelector } from "react-redux";

const OrderReview = ({ next, back }) => {
  const order = useSelector((state) => state.order);
  const orderRecipients = useSelector((state) => state.orderRecipients);
  const propertyInfo = useSelector((state) => state.propertyInfo);

  return (
    <div className="flex flex-wrap justify-between gap-6 px-6">
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[22%] border border-gray-200 rounded-md shadow-sm bg-white">
        <div className="px-4 text-left">
          <label className="font-semibold">Order Information</label>
        </div>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>

        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Client Loan Number:</label>
            <p>{order?.clientLoanNumber || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Report Type:</label>
            <p>{order?.selectedReportTypes?.join(", ") || "N/A"}</p>
          </div>
        </div>

        <div className="mt-4 px-4 text-left">
          <label className="font-semibold">Property Specs</label>
        </div>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>

        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Above Grade Sqft:</label>
            <p>{propertyInfo?.specs?.aboveGradeSqft || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Bedrooms:</label>
            <p>{propertyInfo?.specs?.bedrooms || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Bathrooms:</label>
            <p>{propertyInfo?.specs?.bathrooms || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Year Built:</label>
            <p>{propertyInfo?.specs?.yearBuilt || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Stories:</label>
            <p>{propertyInfo?.specs?.stories || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Lot Size:</label>
            <p>{propertyInfo?.specs?.lotSize || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="min-h-[350px] relative pt-4 w-full lg:w-[45%] border border-gray-200 rounded-md shadow-sm bg-white">
        <div className="px-4 text-left">
          <label className="font-semibold">Property Information</label>
        </div>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>

        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Residential Property Type:</label>
            <p>{propertyInfo?.propertyType || "N/A"}</p>
          </div>
        </div>
        <div className="mt-1 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Address:</label>
            <p>{propertyInfo?.address || "N/A"}</p>
          </div>
        </div>

        <div className="mt-4 px-4 text-left">
          <label className="font-semibold">Report Contact Information</label>
        </div>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>

        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Contact Name:</label>
            <p>{orderRecipients?.contactName || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Contact Number:</label>
            <p>{orderRecipients?.contactNumber || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Contact Email:</label>
            <p>{orderRecipients?.contactEmail || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="min-h-[350px] relative pt-4 w-full lg:w-[29%] border border-gray-200 rounded-md shadow-sm bg-white">
        <p className="font-semibold">File Uploaded Line Items</p>
        <div className="mt-1 space-y-2 px-3">
          <div className="flex justify-between">
            <label className="font-semibold">Description of Work</label>
            <p className="font-semibold">Budget</p>
          </div>
          <div>
            <hr className="border-gray-300" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bottom-4 w-full">
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={back}
        >
          Back
        </button>
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={next}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
