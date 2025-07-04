import React from "react";

function ProperTypes() {
  return (
    <>
      <div className="pl-5 text-left">
        <label className="font-semibold">
          Property Upload Type
          <span className="text-red-500 font-bold">*</span>
        </label>
      </div>
      <div className="pl-5 text-left mt-1">
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-skycustom focus:bg-skycustom">
          Single
        </button>
        &nbsp;
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-skycustom focus:bg-skycustom">
          Batch
        </button>
      </div>

      <div className="pl-5 text-left mt-4">
        <label className="font-semibold">
          Address<span className="text-red-500 font-bold">*</span>
        </label>
        <div className="mt-1">
          <input
            type="text"
            placeholder="Enter address"
            className="w-[90%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="pl-5 text-left mt-4">
        <label className="font-semibold">
          Select Property Types
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="mt-4 gap-2">
          {[
            "Single Family Residential (SFR) - Detached",
            "Townhouse/Rawhouse (Single-Family Attached)",
            "Condominium",
            "Duplex (Both Unit-Single Ownership)",
            "Triplex",
            "Quadurplex",
            "Mobile",
          ].map((type) => (
            <div key={type}>
              <button className="bg-gray-200 w-[90%] text-black px-4 py-2 mb-2 rounded hover:bg-skycustom focus:bg-skycustom">
                {type}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProperTypes;
