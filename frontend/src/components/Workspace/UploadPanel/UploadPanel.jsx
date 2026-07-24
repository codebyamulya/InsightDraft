import "./UploadPanel.css";
import { useState, useRef } from "react";
import SelectedFileCard from "../SelectedFileCard/SelectedFileCard";
import EmptyUploadState from "../EmptyUploadState/EmptyUploadState";

function UploadPanel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const ALLOWED_FILE_TYPES = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "audio/mpeg",
    "audio/wav",
    "audio/x-wav",
    "video/mp4",
  ];

  const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

  const processSelectedFile = (file) => {
    if (!file) return;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setError(
        "Unsupported file type. Please upload a PDF, DOCX, MP3, WAV, or MP4 file.",
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File size must be less than 100 MB.");
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleFileSelect = (event) => {
    processSelectedFile(event.target.files[0]);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError("");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setIsDragging(false);

    processSelectedFile(event.dataTransfer.files[0]);
  };

  return (
    <div className="upload-panel">
      <h2 className="upload-panel__title">Upload Files</h2>

      <p className="upload-panel__subtitle">
        Drag & Drop your meeting recordings or documents here
      </p>

      <div
        className={`upload-panel__dropzone ${
          isDragging ? "upload-panel__dropzone--dragging" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <SelectedFileCard file={selectedFile} onRemove={handleRemoveFile} />
        ) : (
          <EmptyUploadState onBrowseClick={handleBrowseClick} />
        )}

        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleFileSelect}
        />
      </div>

      {error && <p className="upload-panel__error">{error}</p>}

      <p className="upload-panel__formats">
        Supports: MP3 • WAV • MP4 • PDF • DOCX
      </p>
    </div>
  );
}

export default UploadPanel;
