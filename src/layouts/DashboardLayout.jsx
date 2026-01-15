import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="layout">
      {showSidebar && (
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
      )}
      <div className="main-area">
        <Header onToggleSidebar={toggleSidebar} />
        <MainContent activePage={activePage} />
      </div>
    </div>
  );
}

export default DashboardLayout;
