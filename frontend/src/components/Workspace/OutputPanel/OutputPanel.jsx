import "./OutputPanel.css";

function OutputPanel() {
  return (
    <div className="output-panel">
      <h2 className="output-panel__title">AI Output</h2>

      <div className="output-panel__tabs">
        <button className="output-panel__tab output-panel__tab--active">
          Executive Summary
        </button>

        <button className="output-panel__tab">Minutes of Meeting</button>

        <button className="output-panel__tab">Action Items</button>

        <button className="output-panel__tab">Test Cases</button>

        <button className="output-panel__tab">Jira Stories</button>
      </div>

      <div className="output-panel__content">
        <p>
          AI generated content will appear here after processing your uploaded
          files.
        </p>
      </div>
    </div>
  );
}

export default OutputPanel;
