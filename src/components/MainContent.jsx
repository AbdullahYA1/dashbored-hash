import StatCard from "./StatCard";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import OrderStatus from "./OrderStatus";
import { productsData, productsOrders } from "../data/data";

function MainContent({ activePage }) {
  // Calculate dynamic stats
  const totalProducts = productsData.length;
  const totalOrders = productsOrders.length;

  // Calculate revenue from orders
  const revenue = productsOrders.reduce((total, order) => {
    const product = productsData.find((p) => p.id === order.productId);
    if (product) {
      return total + product.price * order.quantity;
    }
    return total;
  }, 0);

  if (activePage === "products") {
    return (
      <main className="main-content">
        <ProductsPage />
      </main>
    );
  }

  if (activePage === "orders") {
    return (
      <main className="main-content">
        <OrdersPage />
      </main>
    );
  }

  return (
    <main className="main-content">
      <h2>Dashboard Overview</h2>
      <div className="cards-grid">
        <StatCard title="Total Products" value={totalProducts} />
        <StatCard title="Total Orders" value={totalOrders} />
        <StatCard title="Revenue" value={"$" + revenue.toFixed(2)} />
      </div>
      <OrderStatus orders={productsOrders} />
    </main>
  );
}

export default MainContent;
