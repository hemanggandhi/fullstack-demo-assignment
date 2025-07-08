import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderLineItems = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/orders/${id}/line-items`)
      .then((res) => {
        setItems(res.data);
      });
  }, [id]);

  if (!items.length) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Line Items</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Description of Work</th>
            <th className="border px-4 py-2">Budget</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{item.descriptionOfWork}</td>
              <td className="border px-4 py-2">
                ${Number(item.budget).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderLineItems;
