import { UploadCloud } from "lucide-react";
import "./EmptyUploadState.css";

function EmptyUploadState({ onBrowseClick }) {
  return (
    <div className="empty-upload-state">
      <div className="empty-upload-state__icon">
        <UploadCloud size={48} strokeWidth={1.8} />
      </div>

      <h3 className="empty-upload-state__title">Drop your files here</h3>

      <p className="empty-upload-state__description">
        Drag & Drop your meeting recordings or documents
      </p>

      <span className="empty-upload-state__divider">or</span>

      <button className="empty-upload-state__button" onClick={onBrowseClick}>
        Browse Files
      </button>
    </div>
  );
}

export default EmptyUploadState;
