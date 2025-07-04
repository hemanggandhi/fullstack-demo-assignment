import React from "react";

const OrderReview = ({ next, back }) => {
  return (
    <div className="min-h-[350px] relative px-6 pt-4">
      <h2>Order Review</h2>
      {/* Your form fields here */}
      {/* Bottom-right Continue button */}
      <div className="absolute bottom-4 right-20">
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

export default OrderReview;
