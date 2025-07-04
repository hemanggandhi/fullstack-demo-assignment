import React from "react";

function PropertySpecs() {
  return (
    <>
      <div className="pl-5 text-left">&nbsp;</div>
      <div className="pl-5 text-left mt-1">&nbsp;</div>
      <div className="pl-5 text-left mt-1">&nbsp;</div>
      <div className="pl-5 pr-5 text-left mt-10">
        <label className="font-semibold">Property Specs</label>
        <div className="mt-1">
          <hr className="border-gray-300" />
        </div>
      </div>
      <div className="flex p-5 pb-0 justify-between">
        <label>&nbsp;</label>
        <label className="font-semibold">Current</label>
      </div>
      <div className="flex p-2 pl-5 justify-between">
        <label className="font-semibold">
          Above Grade Sqft<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Is there a basement?
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div>
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-skycustom focus:bg-skycustom">
            No
          </button>
          &nbsp;
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-skycustom focus:bg-skycustom">
            Yes
          </button>
        </div>
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Bedrooms<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Bathroom<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Year Built<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Stories<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex p-2 pl-5 pb-0 justify-between">
        <label className="font-semibold">
          Lot Size<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </>
  );
}

export default PropertySpecs;
