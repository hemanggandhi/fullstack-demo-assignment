import React from "react";
import OrderForm from "../components/OrderForm";

function HomePage({ setOrderId, setSubmitted, submitted }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <OrderForm
        setOrderId={setOrderId}
        setSubmitted={setSubmitted}
        submitted={submitted}
      />
    </div>
  );
}

export default HomePage;
