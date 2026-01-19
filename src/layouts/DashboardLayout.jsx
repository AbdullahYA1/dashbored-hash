import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function DashboardLayout({ setIsLoggedIn }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="layout">
      {showSidebar && (
        <Sidebar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogout} />
      )}
      <div className="main-area">
        <Header onToggleSidebar={toggleSidebar} />
        <MainContent activePage={activePage} />
      </div>
    </div>
  );
}

export default DashboardLayout;
