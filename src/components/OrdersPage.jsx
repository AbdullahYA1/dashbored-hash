import { productsOrders } from "../data/data";
import { useState } from "react";
import InvoiceModal from "./InvoiceModal";

function OrdersPage() {
    const [orders, setOrders] = useState(productsOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + (item.qty * item.price), 0);
    };

    const viewOrder = (order) => {
        setSelectedOrder(order);
    };

    const closeModal = () => {
        setSelectedOrder(null);
    };

    const updateOrderStatus = (status) => {
        const updatedOrders = orders.map(order =>
            order.id === selectedOrder.id ? { ...order, status } : order
        );
        setOrders(updatedOrders);
        setSelectedOrder({ ...selectedOrder, status });
    };

    return (
        <div>
            <div className="page-header">
                <h2>Orders</h2>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                <div>
                                    <strong>{order.customerName}</strong>
                                    <br />
                                    <small style={{ color: "#666" }}>{order.email}</small>
                                </div>
                            </td>
                            <td>{order.items.length} items</td>
                            <td>${calculateTotal(order.items).toFixed(2)}</td>
                            <td>{order.date}</td>
                            <td>
                                <span className={
                                    order.status === "completed" ? "badge active" :
                                    order.status === "pending" ? "badge pending" :
                                    "badge inactive"
                                }>
                                    {order.status}
                                </span>
                            </td>
                            <td>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <i
                                        onClick={() => viewOrder(order)}
                                        className="fas fa-eye"
                                        style={{ cursor: "pointer", color: "#666" }}
                                    ></i>
                                    <span>View</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <InvoiceModal
                selectedOrder={selectedOrder}
                closeModal={closeModal}
                calculateTotal={calculateTotal}
                updateOrderStatus={updateOrderStatus}
            />
        </div>
    );
}

export default OrdersPage;
