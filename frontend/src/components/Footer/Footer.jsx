function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__row">
        <div className="footer__brand">
          <div
            className="nav__mark"
            style={{ width: 22, height: 22, borderRadius: 6 }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="12" height="12">
              <path
                d="M4 12h3l2-6 4 12 2-6h5"
                stroke="#0F1216"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          © {new Date().getFullYear()} InsightDraft
        </div>
        <div className="footer__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Docs</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
