// Navigation Items
export const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "users", label: "Users" },
  { id: "FetchProduct", label: "Fetch Product" },

];

// Products Data
export const productsData = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99, stock: 45, active: true },
  { id: 2, name: "Cotton T-Shirt", category: "Clothing", price: 29.99, stock: 120, active: true },
  { id: 3, name: "Water Bottle", category: "Home", price: 24.99, stock: 0, active: false },
  { id: 4, name: "Leather Wallet", category: "Accessories", price: 49.99, stock: 30, active: true },
  { id: 5, name: "Fitness Watch", category: "Electronics", price: 199.99, stock: 15, active: true },
];

export const productsOrders = [
    { id: 1, productId: 1, quantity: 2, status: "shipped" },
    { id: 2, productId: 2, quantity: 1, status: "pending" },
    { id: 3, productId: 3, quantity: 5, status: "shipped" },
    { id: 4, productId: 4, quantity: 3, status: "cancelled" },
    { id: 5, productId: 5, quantity: 1, status: "shipped" },
];
