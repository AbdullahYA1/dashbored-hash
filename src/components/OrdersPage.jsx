import { productsOrders } from "../data/data";
import { useState } from "react";
function OrdersPage() {
    const [orders, setOrders] = useState(productsOrders);
    const deleteOrder = (id) => {
        setOrders(orders.filter((o) => o.id !== id));
    };
    const editOrder = (id) => {

    };
  return (
    <div>
      <div className="page-header">
        <h2>Orders</h2>
      </div>
      <button className="btn-add"> + Add Order</button>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productId}</td>
              <td>{order.quantity}</td>
              <td>
                <span className={order.status === "shipped" ? "badge active" : "badge inactive"}>
                  {order.status}
                </span>
              </td>
              <td>
               <div>
                <i style={{ padding: "0 8px"  }} className="fas fa-eye"></i>
                <i onClick={() => editOrder(order.id)} className="fas fa-edit"></i>
               </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
