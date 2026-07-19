import STEPS from "../../data/steps";
function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="shell">
        <div className="section__head">
          <div className="section__kicker">HOW IT WORKS</div>
          <h2 className="section__title">From raw input to ready output</h2>
          <p className="section__desc">
            Three steps stand between a messy recording and a document your team
            can act on.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__num">{s.num}</div>
              <div className="step__title">{s.title}</div>
              <div className="step__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
