import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { setExcelData } from "../store/features/excelSlice";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const readExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      dispatch(setExcelData(json));
    };
    reader.readAsArrayBuffer(file);
  };

  const MAX_FILES = 1;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const validFiles = selectedFiles.filter((file) =>
      file.name.endsWith(".xlsx")
    );

    const invalidFiles = selectedFiles.filter(
      (file) => !file.name.endsWith(".xlsx")
    );

    if (invalidFiles.length > 0) {
      setError("Only .xlsx files are allowed.");
      return;
    }

    if (validFiles.length + files.length > MAX_FILES) {
      setError("Maximum 1 file is allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
    setError(""); // Clear previous error

    // Read content from the valid file
    readExcel(validFiles[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);

    const validFiles = droppedFiles.filter((file) =>
      file.name.endsWith(".xlsx")
    );

    const invalidFiles = droppedFiles.filter(
      (file) => !file.name.endsWith(".xlsx")
    );

    if (invalidFiles.length > 0) {
      setError("Only .xlsx files are allowed.");
      return;
    }

    if (validFiles.length + files.length > MAX_FILES) {
      setError("Maximum 1 file is allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
    setError(""); // Clear previous error

    readExcel(validFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-upload-wrapper">
      {/* Error message */}
      {error && <div className="text-red-500 mb-2 font-medium">{error}</div>}

      <label
        htmlFor="file-upload"
        className="upload-container border-dashed border-2 border-gray-400 p-4 rounded-md cursor-pointer block"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          id="file-upload"
          type="file"
          accept=".xlsx"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-center">
          <strong>Click to Select</strong> or <strong>Drag it Here</strong>.
          <br />
          <small>
            Upload only <code>.xlsx</code>
            <br />
            Maximum 1 file is allowed.
          </small>
        </p>

        {files.length > 0 && (
          <ul className="mt-3 list-disc pl-5">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
