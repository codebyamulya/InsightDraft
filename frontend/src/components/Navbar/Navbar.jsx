import { IconMark, IconUpload } from "../Icons/Icons";

function Navbar() {
  return (
    <header className="nav">
      <div className="shell nav__row">
        <div className="nav__brand">
          <div className="nav__mark">
            <IconMark />
          </div>
          <span className="nav__wordmark">InsightDraft</span>
        </div>

        <nav className="nav__links nav__links--center">
          <a className="nav__link" href="#how-it-works">
            How it works
          </a>
          <a className="nav__link" href="#features">
            Features
          </a>
          <a className="nav__link" href="#">
            Docs
          </a>
        </nav>

        <button className="btn btn--primary btn--sm">
          <IconUpload /> Get Started
        </button>
      </div>
    </header>
  );
}

export default Navbar;
