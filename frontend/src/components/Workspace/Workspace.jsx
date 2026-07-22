import "./Workspace.css";

import Sidebar from "../Layout/Sidebar";
import UploadCard from "./UploadCard";

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

        <UploadCard />
      </main>
    </div>
  );
}

export default Workspace;
