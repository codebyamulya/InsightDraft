import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <h2>InsightDraft</h2>
      </div>

      <nav className="sidebar__nav">
        <button className="sidebar__item">🏠 Dashboard</button>

        <button className="sidebar__item sidebar__item--active">
          📁 Workspace
        </button>

        <button className="sidebar__item">🤖 AI History</button>

        <button className="sidebar__item">⚙ Settings</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
