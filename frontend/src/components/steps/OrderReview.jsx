import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderReview = ({ back, setOrderId, setSubmitted, submitted }) => {
  const order = useSelector((state) => state.order);
  const orderRecipients = useSelector((state) => state.orderRecipients);
  const propertyInfo = useSelector((state) => state.propertyInfo);
  const excelData = useSelector((state) => state.excel.data);

  const handleSubmit = async () => {
    try {
      const payload = {
        order,
        propertyInfo,
        orderRecipients,
        excelData,
      };

      const response = await axios.post(
        "http://localhost:4000/api/orders/submit",
        payload
      );
      if (response.data.success) {
        setSubmitted(true);
        setOrderId(response.data.orderId);
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

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
            <label>Client:</label>
            <p>{order?.selectedClient.label || "N/A"}</p>
          </div>
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
            <label>Has basement?:</label>
            <p>
              {propertyInfo?.specs?.hasBasement === true
                ? "Yes"
                : propertyInfo?.specs?.hasBasement === false
                ? "No"
                : "N/A"}
            </p>
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
        <p className="font-semibold px-3">File Uploaded Line Items</p>

        <div className="mt-1 space-y-2 px-3">
          <div className="flex justify-between">
            <label className="font-semibold">Description of Work</label>
            <p className="font-semibold">Budget</p>
          </div>
          <div>
            <hr className="border-gray-300" />
          </div>

          <div className="space-y-1">
            {Array.isArray(excelData) && excelData.length > 0 ? (
              excelData.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item["DESCRIPTION OF WORK"] || "N/A"}</span>
                  <span>
                    $
                    {item[" BUDGET "] !== undefined && !isNaN(item[" BUDGET "])
                      ? Number(item[" BUDGET "]).toLocaleString()
                      : "0"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No line items uploaded.</p>
            )}
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
          className={`py-2 px-4 rounded text-white ${
            submitted ? "bg-gray-400 cursor-not-allowed" : "bg-skycustom"
          }`}
          onClick={handleSubmit}
          disabled={submitted}
        >
          {submitted ? "Order Submitted" : "Submit Order"}
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
