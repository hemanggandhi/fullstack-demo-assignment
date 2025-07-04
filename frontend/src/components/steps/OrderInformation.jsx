import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const OrderInformation = ({ next }) => {
  const [clientOptions, setClientOptions] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [reportTypeNames, setReportTypeNames] = useState([]);

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

    // Debounce search input
    const delayDebounce = setTimeout(() => {
      fetchClients();
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // Api for Report Types.
  const fetchReportTypes = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/reportTypes");
      const data = await response.json();

      // If data is [{ name: "Type A" }, ...], convert to just names
      const names = data.map((item) => item.name);

      setReportTypeNames(names);
    } catch (error) {
      console.error("Failed to fetch report types:", error);
    }
  };

  // Action when client drop down selects the option
  const handleClientChange = (option) => {
    setSelectedClient(option);

    if (option) {
      fetchReportTypes(); // Only fetch if a client is selected
    } else {
      setReportTypeNames([]); // Clear if client is cleared
    }
  };

  return (
    <div className="min-h-[350px] relative pt-4 left-10 w-full lg:w-[95%] border border-gray-200 rounded-md shadow-sm bg-white">
      {/* Top-left label */}
      <div className="left-10 pl-5 text-left">
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
      <div className={selectedClient ? "block mt-4" : "hidden"}>
        <div className="left-10 pl-5 text-left">
          <label className="font-semibold">Client Loan Number</label>
          <div className="mt-1 flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Enter client loan number"
              className="w-[250px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="left-10 pl-5 text-left">
          <label className="font-semibold">
            Select Report Types<span className="text-red-500 font-bold">*</span>
          </label>
          <div className="mt-4 flex flex-wrap gap-2">
            {reportTypeNames.map((name, index) => (
              <button
                key={index}
                className="bg-skycustom text-black px-4 py-2 rounded hover:bg-skycustom-300"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal line at 50px */}
      <div className="mt-[30px]">
        <hr className="border-gray-300" />
      </div>

      {/* Bottom-right Continue button */}
      <div className="absolute bottom-4 right-20">
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrderInformation;
