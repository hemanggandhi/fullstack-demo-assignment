import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import OrderInfo from "./pages/OrderInfo";
import OrderLineItems from "./pages/OrderLineItems";
import "./App.css";
import "./index.css";

function PrivateRoute({ children }) {
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}

function App() {
  const location = useLocation();
  const [orderId, setOrderId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // 👇 Add this line to conditionally hide Navbar on login page
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {/* 👇 Navbar is conditionally shown */}
      {!hideNavbar && <Navbar orderId={orderId} showLinks={submitted} />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order/:id/info" element={<OrderInfo />} />
        <Route path="/order/:id/line-items" element={<OrderLineItems />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage
                setOrderId={setOrderId}
                setSubmitted={setSubmitted}
                submitted={submitted}
              />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
