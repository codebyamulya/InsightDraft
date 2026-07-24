import "./SelectedFileCard.css";

function SelectedFileCard({ file, onRemove }) {
  return (
    <div className="selected-file-card">
      <h3 className="selected-file-card__name">📄 {file.name}</h3>

      <p className="selected-file-card__size">
        {(file.size / (1024 * 1024)).toFixed(2)} MB
      </p>

      <button className="selected-file-card__button" onClick={onRemove}>
        Remove File
      </button>
    </div>
  );
}

export default SelectedFileCard;
