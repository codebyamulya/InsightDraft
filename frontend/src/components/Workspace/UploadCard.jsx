import "./UploadCard.css";

function UploadCard() {
  return (
    <div className="upload-card">
      <h2 className="upload-card__title">Upload Files</h2>

      <p className="upload-card__subtitle">
        Drag & Drop your meeting recordings or documents here
      </p>

      <div className="upload-card__dropzone">
        <p>📁 Drop files here</p>

        <span>or</span>

        <button className="upload-card__button">Browse Files</button>
      </div>

      <p className="upload-card__formats">
        Supports: MP3 • WAV • MP4 • PDF • DOCX
      </p>
    </div>
  );
}

export default UploadCard;
