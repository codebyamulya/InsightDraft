import "./Hero.css";
import { IconUpload, IconArrow } from "../Icons/Icons";
function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__grid">
        <div>
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            AI MEETING &amp; DOCUMENT INTELLIGENCE
          </span>
          <h1 className="hero__title">
            Turn meetings and documents into <em>clear, structured</em> insight.
          </h1>
          <p className="hero__subtitle">
            InsightDraft listens to your calls and reads your files, then hands
            back summaries, minutes of meeting, and action items — in seconds,
            not hours.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary">
              <IconUpload /> Get Started
            </button>
            <a className="btn btn--ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="hero__formats">
            <span className="hero__formats-label">SUPPORTS</span>
            <span className="chip">Audio</span>
            <span className="chip">Video</span>
            <span className="chip">PDF</span>
            <span className="chip">DOCX</span>
          </div>
        </div>

        {/* ---------- Signature: live transform demo ---------- */}
        <div className="demo">
          <div className="demo__pane demo__input">
            <div className="demo__pane-head">
              <span className="demo__dot" />
              <span className="demo__dot" />
              <span className="demo__dot" />
              <span className="demo__pane-label">transcript.mp3</span>
            </div>
            <div className="demo__lines">
              <p className="demo__line demo__line--1">
                <b>Sarah:</b> Let's finalize the Q3 roadmap today.
              </p>
              <p className="demo__line demo__line--2">
                <b>Mike:</b> I'll own the API migration by Friday.
              </p>
              <p className="demo__line demo__line--3">
                <b>Priya:</b> We still need legal sign-off first.
              </p>
              <p className="demo__line demo__line--4">
                <b>Sarah:</b> Agreed — let's block the launch on that.
              </p>
              <p className="demo__line demo__line--5">
                <b>Mike:</b> I'll follow up with legal tomorrow.
              </p>
            </div>
            <div className="demo__scan" />
          </div>

          <div className="demo__arrow">
            <IconArrow />
          </div>

          <div className="demo__pane demo__output">
            <div className="demo__pane-head">
              <span className="demo__dot" />
              <span className="demo__dot" />
              <span className="demo__dot" />
              <span className="demo__pane-label">structured_output</span>
            </div>
            <span className="demo__tag demo__tag--summary">SUMMARY</span>
            <p className="demo__card demo__card--summary">
              Q3 roadmap finalized, pending legal review before launch.
            </p>
            <span className="demo__tag demo__tag--action">ACTION ITEMS</span>
            <p className="demo__card demo__card--action">
              → Mike — API migration, due Friday
            </p>
            <span className="demo__tag demo__tag--decision">DECISIONS</span>
            <p className="demo__card demo__card--decision">
              Legal sign-off required before launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
