import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderInfo = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/orders/${id}`).then((res) => {
      setOrder(res.data);
    });
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="min-h-[550px] flex flex-wrap justify-between gap-6 px-6 mb-10">
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[50%] border border-gray-200 rounded-md shadow-sm bg-gray mt-10">
        <h2 className="text-xl font-semibold mb-4">Order Information</h2>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>
        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Client:</label>
            <p>{order.selectedClient.label || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Client Loan Number:</label>
            <p>{order.clientLoanNumber || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Report Type:</label>
            <p>{order.selectedReportTypes.join(", ") || "N/A"}</p>
          </div>
        </div>

        <h3 className="mt-4 pl-4 font-semibold text-left">Order Recipent</h3>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>
        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Contact Name:</label>
            <p>{order.orderRecipients.contactName || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Contact Email:</label>
            <p>{order.orderRecipients.contactEmail || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Contact Number:</label>
            <p>{order.orderRecipients.contactNumber || "N/A"}</p>
          </div>
        </div>

        <h3 className="mt-4 pl-4 font-semibold text-left">Property</h3>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>
        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Type:</label>
            <p>{order.propertyInfo.propertyType || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Address:</label>
            <p>{order.propertyInfo.address || "N/A"}</p>
          </div>
        </div>
        <h3 className="mt-4 pl-4 font-semibold text-left">
          Property Specifications
        </h3>
        <div className="px-4">
          <hr className="border-gray-300" />
        </div>
        <div className="mt-4 space-y-2 px-4">
          <div className="flex justify-between">
            <label>Above Grade Sqft:</label>
            <p>{order.propertyInfo.specs.aboveGradeSqft || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Has basement?::</label>
            <p>
              {order.propertyInfo.specs.hasBasement === true
                ? "Yes"
                : order.propertyInfo.specs.hasBasement === false
                ? "No"
                : "N/A"}
            </p>
          </div>
          <div className="flex justify-between">
            <label>Bedrooms:</label>
            <p>{order.propertyInfo.specs.bedrooms || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Bathrooms:</label>
            <p>{order.propertyInfo.specs.bathrooms || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Stories:</label>
            <p>{order.propertyInfo.specs.stories || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Year Built:</label>
            <p>{order.propertyInfo.specs.yearBuilt || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <label>Lot Size:</label>
            <p>{order.propertyInfo.specs.lotSize || "N/A"}</p>
          </div>
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default OrderInfo;
