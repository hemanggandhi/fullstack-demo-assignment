import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((file) =>
      file.name.endsWith(".xlsx")
    );

    if (validFiles.length + files.length > 4) {
      alert("Maximum 4 files are allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter((file) =>
      file.name.endsWith(".xlsx")
    );

    if (validFiles.length + files.length > 4) {
      alert("Maximum 4 files are allowed.");
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="upload-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        accept=".xlsx"
        multiple
        onChange={handleFileChange}
        className="file-input"
      />
      <p>
        <strong>Click to Select</strong> or <strong>Drag it Here</strong>.<br />
        <small>
          Upload only <code>.xlsx</code>
          <br />
          Maximum 4 files are allowed.
        </small>
      </p>
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
