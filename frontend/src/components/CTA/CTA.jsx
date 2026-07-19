import { IconUpload } from "../Icons/Icons";
function CTA({ handleUploadClick }) {
  return (
    <section className="cta-band">
      <div className="shell">
        <div className="cta-card">
          <div>
            <div className="cta-card__title">
              Ready to clear your meeting backlog?
            </div>
            <p className="cta-card__desc">
              Upload your first recording or document and see structured output
              in seconds.
            </p>
          </div>
          <button className="btn btn--primary" onClick={handleUploadClick}>
            <IconUpload /> Upload a file
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTA;
