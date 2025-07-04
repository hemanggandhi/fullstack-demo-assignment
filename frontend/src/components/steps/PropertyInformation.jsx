import React from "react";
import FileUpload from "../FileUpload";
import PropertySpecs from "../PropertySpecs";
import ProperTypes from "../ProperTypes";

const PropertyInformation = ({ next, back }) => {
  return (
    <div className="flex flex-wrap justify-between gap-6 px-6">
      {/* Section 1 */}
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[32%] border border-gray-200 rounded-md shadow-sm bg-white">
        <ProperTypes />
      </div>

      {/* SECTION 2 - New */}
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[42%] border border-gray-200 rounded-md shadow-sm bg-white">
        <PropertySpecs />
      </div>

      {/* SECTION 3 - New */}
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[22%] border border-gray-200 rounded-md shadow-sm bg-white">
        <div className="pl-5 text-left">&nbsp;</div>
        <div className="pl-5 text-left mt-1">&nbsp;</div>
        <div className="pl-5 text-left mt-1">&nbsp;</div>
        <div className="pl-5 pr-5 text-left mt-10">
          <label className="font-semibold">Upload File(s)</label>
          <div className="mt-1">
            <hr className="border-gray-300" />
          </div>
        </div>
        <div>
          <FileUpload />
        </div>
      </div>
      {/* Divider */}
      <div className="mt-[30px] mb-[10px]">
        <hr className="border-gray-300" />
      </div>

      {/* Buttons */}
      <div className="mb-[10px] text-right pr-5">
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
export default PropertyInformation;
