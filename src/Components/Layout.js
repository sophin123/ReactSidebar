import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !collapsed);
  };
  return (
    <div className="app">
      <Sidebar
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main />
    </div>
  );
}
