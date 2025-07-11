import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ orderId, showLinks }) => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>Welcome, {username}</div>
      <Link to="/" className="font-semibold text-white">
        | Home |
      </Link>

      {showLinks && orderId && (
        <>
          <Link
            to={`/order/${orderId}/info`}
            className="font-semibold text-white"
          >
            | Order Information |
          </Link>
          <Link
            to={`/order/${orderId}/line-items`}
            className="font-semibold text-white"
          >
            | Line Items |
          </Link>
        </>
      )}
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
  },
  left: {
    fontSize: "18px",
  },
  logoutButton: {
    padding: "8px 16px",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
