import StatCard from "./StatCard";
import ProductsPage from "./ProductsPage";

function MainContent({ activePage }) {
  if (activePage === "products") {
    return (
      <main className="main-content">
        <ProductsPage />
      </main>
    );
  }

  return (
    <main className="main-content">
      <h2>Dashboard Overview</h2>
      <div className="cards-grid">
        <StatCard title="Total Users" value="1,234" />
        <StatCard title="Total Orders" value="567" />
        <StatCard title="Revenue" value="$12,345" />
      </div>
    </main>
  );
}

export default MainContent;
