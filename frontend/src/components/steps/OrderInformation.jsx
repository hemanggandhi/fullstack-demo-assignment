import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedClient,
  setClientLoanNumber,
  setReportTypes,
  setSelectedReportTypes,
} from "../../store/features/order/orderSlice";

const OrderInformation = ({ next }) => {
  const dispatch = useDispatch();

  const { selectedClient, clientLoanNumber, reportTypes, selectedReportTypes } =
    useSelector((state) => state.order);

  const [clientOptions, setClientOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clientError, setClientError] = useState(false);

  // Fetch clients API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/clients?search=${searchTerm}`
        );
        const options = response.data.map((client) => ({
          label: client.name,
          value: client._id,
        }));
        setClientOptions(options);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchClients();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // Fetch report types API
  const fetchReportTypes = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/reportTypes");
      const data = await response.json();
      const names = data.map((item) => item.name);
      dispatch(setReportTypes(names));
    } catch (error) {
      console.error("Failed to fetch report types:", error);
    }
  };

  const handleClientChange = (option) => {
    dispatch(setSelectedClient(option));

    if (option) {
      fetchReportTypes();
    } else {
      dispatch(setReportTypes([]));
    }
  };

  return (
    <div className="min-h-[350px] relative pt-4 left-10 w-full lg:w-[95%] border border-gray-200 rounded-md shadow-sm bg-white">
      <div className="left-10 pl-5 text-left">
        {clientError && (
          <p className="text-red-500 mt-1 text-sm">Please select a client.</p>
        )}

        <label className="font-semibold">
          Clients<span className="text-red-500 font-bold">*</span>
        </label>
      </div>
      <div className="left-10 pl-5 text-left">
        <Select
          className="w-60"
          options={clientOptions}
          value={selectedClient}
          onInputChange={(inputValue) => setSearchTerm(inputValue)}
          onChange={handleClientChange}
          placeholder="Search client..."
          isClearable
        />
      </div>

      {selectedClient && (
        <div className="block mt-4">
          <div className="left-10 pl-5 text-left">
            <label className="font-semibold">Client Loan Number</label>
            <div className="mt-1 flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Enter client loan number"
                value={clientLoanNumber}
                onChange={(e) => dispatch(setClientLoanNumber(e.target.value))}
                className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="left-10 pl-5 text-left mt-4">
            <label className="font-semibold">
              Select Report Types
              <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="mt-4 flex flex-wrap gap-2">
              {reportTypes.map((name, index) => {
                const isSelected = selectedReportTypes.includes(name);

                return (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded ${
                      isSelected
                        ? "bg-skycustom text-white"
                        : "bg-gray-300 text-black hover:bg-skycustom-300"
                    }`}
                    onClick={() => {
                      const updatedTypes = isSelected
                        ? selectedReportTypes.filter((item) => item !== name)
                        : [...selectedReportTypes, name];

                      dispatch(setSelectedReportTypes(updatedTypes));
                    }}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="mt-[30px]">
        <hr className="border-gray-300" />
      </div>

      <div className="absolute bottom-2 right-20">
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={() => {
            if (!selectedClient) {
              setClientError(true);
              return;
            }
            setClientError(false);
            next();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrderInformation;
