import React, { useState } from "react";
import { useSelector } from "react-redux";
import FileUpload from "../FileUpload";
import PropertySpecs from "../PropertySpecs";
import ProperTypes from "../ProperTypes";

const PropertyInformation = ({ next, back }) => {
  const [error, setError] = useState("");
  const { uploadType, address, propertyType, specs } = useSelector(
    (state) => state.propertyInfo
  );
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const validateFields = () => {
    if (!uploadType || (uploadType !== "Single" && uploadType !== "Batch")) {
      return "Please select an upload type.";
    }
    if (!address.trim()) {
      return "Address is required.";
    }
    if (!propertyType) {
      return "Please select a property type.";
    }

    if (!specs.aboveGradeSqft.trim()) return "Above Grade Sqft is required.";
    if (!/^\d+$/.test(specs.aboveGradeSqft.trim()))
      return "Above Grade Sqft must be a number.";

    if (specs.hasBasement === null)
      return "Please select if there is a basement.";

    if (!specs.bedrooms.trim()) return "Bedrooms field is required.";
    if (!/^\d+$/.test(specs.bedrooms.trim()))
      return "Bedrooms must be a number.";

    if (!specs.bathrooms.trim()) return "Bathrooms field is required.";
    if (!/^\d+$/.test(specs.bathrooms.trim()))
      return "Bathrooms must be a number.";

    if (!specs.yearBuilt.trim()) return "Year Built field is required.";
    if (!/^\d+$/.test(specs.yearBuilt.trim()))
      return "Year Built must be a number.";

    if (!specs.stories.trim()) return "Stories field is required.";
    if (!/^\d+$/.test(specs.stories.trim())) return "Stories must be a number.";

    if (!specs.lotSize.trim()) return "Lot Size field is required.";
    if (!/^\d+$/.test(specs.lotSize.trim()))
      return "Lot Size must be a number.";

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return "Please upload at least one .xlsx file.";
    }

    return "";
  };

  const handleContinue = () => {
    const errorMessage = validateFields();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    setError("");
    next();
  };

  return (
    <div className="flex flex-wrap justify-between gap-6 px-6">
      {/* Section 1 */}
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[32%] border border-gray-200 rounded-md shadow-sm bg-white">
        <ProperTypes />
      </div>

      {/* SECTION 2 */}
      <div className="min-h-[350px] relative pt-4 w-full lg:w-[42%] border border-gray-200 rounded-md shadow-sm bg-white">
        <PropertySpecs />
      </div>

      {/* SECTION 3 */}
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
          <FileUpload onFileUploadChange={setUploadedFiles} />
        </div>
      </div>

      {error && (
        <div className="text-red-600 font-semibold w-full px-5 mb-2">
          {error}
        </div>
      )}

      <div className="mt-[30px] mb-[10px] w-full">
        <hr className="border-gray-300" />
      </div>

      <div className="mb-[10px] text-right pr-5 w-full">
        <button
          className="bg-skycustom text-white py-2 px-4 mr-4 rounded"
          onClick={back}
        >
          Back
        </button>
        <button
          className="bg-skycustom text-white py-2 px-4 rounded"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropertyInformation;
