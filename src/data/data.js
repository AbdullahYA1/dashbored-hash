// Navigation Items
export const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "users", label: "Users" },
  { id: "FetchProduct", label: "Fetch Product" },
  { id: "WeatherApi", label: "Weather API" },
  { id: "WeatherSimple", label: "Weather Simple App" }

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
    {
        id: "ORD-001",
        customerName: "John Smith",
        email: "john.smith@email.com",
        date: "2024-02-15",
        status: "completed",
        items: [
            { product: "Wireless Bluetooth Headphones", qty: 1, price: 79.99 },
            { product: "Leather Wallet", qty: 2, price: 49.99 }
        ]
    },
    {
        id: "ORD-002",
        customerName: "Sarah Johnson",
        email: "sarahj@email.com",
        date: "2024-02-16",
        status: "pending",
        items: [
            { product: "Fitness Watch", qty: 1, price: 199.99 }
        ]
    },
    {
        id: "ORD-003",
        customerName: "Mike Williams",
        email: "mikew@email.com",
        date: "2024-02-17",
        status: "completed",
        items: [
            { product: "Cotton T-Shirt", qty: 2, price: 29.99 },
            { product: "Water Bottle", qty: 2, price: 24.99 }
        ]
    },
    {
        id: "ORD-004",
        customerName: "Emily Davis",
        email: "emilyd@email.com",
        date: "2024-02-18",
        status: "pending",
        items: [
            { product: "Wireless Headphones", qty: 1, price: 129.99 }
        ]
    },
    {
        id: "ORD-005",
        customerName: "David Brown",
        email: "davidb@email.com",
        date: "2024-02-19",
        status: "completed",
        items: [
            { product: "Fitness Watch", qty: 1, price: 199.99 },
            { product: "Leather Wallet", qty: 1, price: 49.99 },
            { product: "Water Bottle", qty: 2, price: 24.99 }
        ]
    },
    {
        id: "ORD-006",
        customerName: "Lisa Anderson",
        email: "lisaa@email.com",
        date: "2024-02-20",
        status: "pending",
        items: [
            { product: "Cotton T-Shirt", qty: 3, price: 29.99 },
            { product: "Water Bottle", qty: 1, price: 24.99 }
        ]
    },
    {
        id: "ORD-007",
        customerName: "James Wilson",
        email: "jamesw@email.com",
        date: "2024-02-21",
        status: "cancelled",
        items: [
            { product: "Wireless Headphones", qty: 1, price: 79.98 }
        ]
    },
    {
        id: "ORD-008",
        customerName: "Amanda Taylor",
        email: "amanda1@email.com",
        date: "2024-02-22",
        status: "completed",
        items: [
            { product: "Fitness Watch", qty: 1, price: 169.98 }
        ]
    }
];
