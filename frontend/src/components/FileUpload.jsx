import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const MAX_FILES = 4;

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
      setError("Maximum 4 files are allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
    setError(""); // Clear previous error
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
      setError("Maximum 4 files are allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
    setError(""); // Clear previous error
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-upload-wrapper">
      {/* Error message */}
      {error && <div className="text-red-500 mb-2 font-medium">{error}</div>}

      <div
        className="upload-container border-dashed border-2 border-gray-400 p-4 rounded-md"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept=".xlsx"
          multiple
          onChange={handleFileChange}
          className="file-input mb-2"
        />
        <p className="text-center">
          <strong>Click to Select</strong> or <strong>Drag it Here</strong>.
          <br />
          <small>
            Upload only <code>.xlsx</code>
            <br />
            Maximum 4 files are allowed.
          </small>
        </p>

        {files.length > 0 && (
          <ul className="mt-3 list-disc pl-5">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
