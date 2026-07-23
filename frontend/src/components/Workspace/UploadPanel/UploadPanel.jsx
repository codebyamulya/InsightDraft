import "./UploadPanel.css";

function UploadPanel() {
  return (
    <div className="upload-panel">
      <h2 className="upload-panel__title">Upload Files</h2>

      <p className="upload-panel__subtitle">
        Drag & Drop your meeting recordings or documents here
      </p>

      <div className="upload-panel__dropzone">
        <p>📁 Drop files here</p>

        <span>or</span>

        <button className="upload-panel__button">Browse Files</button>
      </div>

      <p className="upload-panel__formats">
        Supports: MP3 • WAV • MP4 • PDF • DOCX
      </p>
    </div>
  );
}

export default UploadPanel;
