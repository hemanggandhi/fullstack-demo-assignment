import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUploadType,
  setAddress,
  setPropertyType,
} from "../store/features/propertyInfo/propertyInfoSlice";

function ProperTypes() {
  const dispatch = useDispatch();
  const { uploadType, address, propertyType } = useSelector(
    (state) => state.propertyInfo
  );

  const propertyTypes = [
    "Single Family Residential (SFR) - Detached",
    "Townhouse/Rawhouse (Single-Family Attached)",
    "Condominium",
    "Duplex (Both Unit-Single Ownership)",
    "Triplex",
    "Quadurplex",
    "Mobile",
  ];

  return (
    <>
      <div className="pl-5 text-left">
        <label className="font-semibold">
          Property Upload Type<span className="text-red-500 font-bold">*</span>
        </label>
      </div>
      <div className="pl-5 text-left mt-1">
        {["Single", "Batch"].map((type) => (
          <button
            key={type}
            onClick={() => dispatch(setUploadType(type))}
            className={`${
              uploadType === type ? "bg-skycustom" : "bg-gray-300"
            } text-black px-4 py-2 rounded mr-2`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="pl-5 text-left mt-4">
        <label className="font-semibold">
          Address<span className="text-red-500 font-bold">*</span>
        </label>
        <div className="mt-1">
          <input
            type="text"
            value={address}
            onChange={(e) => dispatch(setAddress(e.target.value))}
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
          {propertyTypes.map((type) => (
            <div key={type}>
              <button
                onClick={() => dispatch(setPropertyType(type))}
                className={`w-[90%] text-black px-4 py-2 mb-2 rounded ${
                  propertyType === type ? "bg-skycustom" : "bg-gray-200"
                }`}
              >
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
