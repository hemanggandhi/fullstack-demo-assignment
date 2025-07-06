import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSpec,
  setHasBasement,
} from "../store/features/propertyInfo/propertyInfoSlice";

function PropertySpecs() {
  const dispatch = useDispatch();
  const specs = useSelector((state) => state.propertyInfo.specs);

  const handleChange = (key) => (e) => {
    dispatch(updateSpec({ key, value: e.target.value }));
  };

  return (
    <>
      <div className="pl-5 pr-5 text-left mt-10">
        <label className="font-semibold">Property Specs</label>
        <div className="mt-1">
          <hr className="border-gray-300" />
        </div>
      </div>

      <div className="flex p-2 pl-5 justify-between">
        <label className="font-semibold">
          Above Grade Sqft<span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          value={specs.aboveGradeSqft}
          onChange={handleChange("aboveGradeSqft")}
          className="w-[300px] px-4 py-2 border rounded-md"
        />
      </div>

      <div className="flex p-2 pl-5 justify-between">
        <label className="font-semibold">
          Is there a basement?<span className="text-red-500 font-bold">*</span>
        </label>
        <div>
          {["No", "Yes"].map((value) => (
            <button
              key={value}
              onClick={() => dispatch(setHasBasement(value === "Yes"))}
              className={`${
                specs.hasBasement === (value === "Yes")
                  ? "bg-skycustom"
                  : "bg-gray-300"
              } text-black px-4 py-2 rounded mr-2`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {["bedrooms", "bathrooms", "yearBuilt", "stories", "lotSize"].map(
        (key) => (
          <div className="flex p-2 pl-5 justify-between" key={key}>
            <label className="font-semibold capitalize">
              {key.replace(/([A-Z])/g, " $1")}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              value={specs[key]}
              onChange={handleChange(key)}
              className="w-[300px] px-4 py-2 border rounded-md"
            />
          </div>
        )
      )}
    </>
  );
}

export default PropertySpecs;
