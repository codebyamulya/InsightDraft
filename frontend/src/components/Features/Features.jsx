import FEATURES from "../../data/Features";
function Features() {
  return (
    <section className="section" id="features">
      <div className="shell">
        <div className="section__head">
          <div className="section__kicker">FEATURES</div>
          <h2 className="section__title">Built for how teams actually work</h2>
          <p className="section__desc">
            Every meeting and document you process feeds a growing, searchable
            knowledge base.
          </p>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <div className={`feature__icon feature__icon--${f.tone}`}>
                {f.icon}
              </div>
              <div className="feature__title">{f.title}</div>
              <div className="feature__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
