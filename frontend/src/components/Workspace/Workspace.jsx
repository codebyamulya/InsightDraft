import "./Workspace.css";

import Sidebar from "../Layout/Sidebar/Sidebar";
import UploadPanel from "./UploadPanel/UploadPanel";
import OutputPanel from "./OutputPanel/OutputPanel";

function Workspace() {
  return (
    <div className="workspace">
      <Sidebar />

      <main className="workspace__content">
        <h1 className="workspace__title">InsightDraft Workspace</h1>

        <p className="workspace__description">
          Upload your meeting recordings and documents to generate summaries,
          action items, test cases, and more.
        </p>

        <div className="workspace__panels">
          <UploadPanel />
          <OutputPanel />
        </div>
      </main>
    </div>
  );
}

export default Workspace;
