import "./UploadPanel.css";
import { useState, useRef } from "react";
import SelectedFileCard from "../SelectedFileCard/SelectedFileCard";
import EmptyUploadState from "../EmptyUploadState/EmptyUploadState";

function UploadPanel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-panel">
      <h2 className="upload-panel__title">Upload Files</h2>

      <p className="upload-panel__subtitle">
        Drag & Drop your meeting recordings or documents here
      </p>

      <div className="upload-panel__dropzone">
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

      <p className="upload-panel__formats">
        Supports: MP3 • WAV • MP4 • PDF • DOCX
      </p>
    </div>
  );
}

export default UploadPanel;
