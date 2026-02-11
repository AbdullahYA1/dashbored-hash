import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { productsData } from "../data/data";

function DashboardLayout({ setIsLoggedIn }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  // Manage products in one place
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : productsData;
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
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
        <MainContent activePage={activePage} products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default DashboardLayout;
