import StatCard from "./StatCard";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import OrderStatus from "./OrderStatus";
import ProductApi from "./ProductApi";
import WeatherApi from "./WeatherApi";
import WeatherSimple from "./WeatherSimple";
import { productsOrders } from "../data/data";

function MainContent({ activePage, products, setProducts }) {
  const totalProducts = products.length;
  const totalOrders = productsOrders.length;

  // Calculate revenue from orders
  const revenue = productsOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + (item.qty * item.price), 0);
    return total + orderTotal;
  }, 0);

  if (activePage === "products") {
    return (
      <main className="main-content">
        <ProductsPage products={products} setProducts={setProducts} />
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

  if (activePage === "FetchProduct") {
    return (
      <main className="main-content">
        <ProductApi />
      </main>
    );
  } 
  if (activePage === "WeatherApi") {
    return (
      <main className="main-content">
        <WeatherApi />
      </main>
    );
  }
  if (activePage === "WeatherSimple") {
    return (
      <main className="main-content">
        <WeatherSimple />
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
