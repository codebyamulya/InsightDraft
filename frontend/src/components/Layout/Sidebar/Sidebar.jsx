import { useState } from "react";
import { Home, FolderOpen, Bot, Settings, Activity } from "lucide-react";

import "./Sidebar.css";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "workspace", label: "Workspace", icon: FolderOpen },
  { key: "ai-history", label: "AI History", icon: Bot },
  { key: "settings", label: "Settings", icon: Settings },
];

function Sidebar() {
  const [activeKey, setActiveKey] = useState("workspace");

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span className="sidebar__logo-mark">
          <Activity size={16} strokeWidth={2.5} />
        </span>
        <h2>InsightDraft</h2>
      </div>

      <span className="sidebar__section-label">Menu</span>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            className={
              key === activeKey
                ? "sidebar__item sidebar__item--active"
                : "sidebar__item"
            }
            onClick={() => setActiveKey(key)}
            aria-current={key === activeKey ? "page" : undefined}
          >
            <span className="sidebar__item-icon">
              <Icon size={18} strokeWidth={2} />
            </span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__avatar">A</span>
        <div className="sidebar__footer-text">
          <span className="sidebar__footer-name">Guest User</span>
          <span className="sidebar__footer-plan">Offline mode</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
