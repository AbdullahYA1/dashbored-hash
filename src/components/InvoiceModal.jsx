import React from 'react'

function InvoiceModal( { selectedOrder, closeModal, calculateTotal, updateOrderStatus } ) {

  return (
    <div>
            {selectedOrder && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="order-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Order Details - {selectedOrder.id}</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>

                        <div className="order-details">
                            <div className="detail-row">
                                <div className="detail-item">
                                    <label>Customer Name</label>
                                    <p>{selectedOrder.customerName}</p>
                                </div>
                                <div className="detail-item">
                                    <label>Email</label>
                                    <p>{selectedOrder.email}</p>
                                </div>
                            </div>

                            <div className="detail-row">
                                <div className="detail-item">
                                    <label>Order Date</label>
                                    <p>{selectedOrder.date}</p>
                                </div>
                                <div className="detail-item">
                                    <label>Status</label>
                                    <span className={
                                        selectedOrder.status === "completed" ? "badge active" :
                                        selectedOrder.status === "pending" ? "badge pending" :
                                        "badge inactive"
                                    }>
                                        {selectedOrder.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="order-items-section">
                            <h4>Order Items</h4>
                            <table className="invoice-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedOrder.items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.product}</td>
                                            <td>{item.qty}</td>
                                            <td>${item.price.toFixed(2)}</td>
                                            <td>${(item.qty * item.price).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: "right", fontWeight: "600" }}>Total</td>
                                        <td style={{ fontWeight: "700", color: "#2563eb", fontSize: "1.1rem" }}>
                                            ${calculateTotal(selectedOrder.items).toFixed(2)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="modal-actions">
                            <button
                                className="btn-pending"
                                onClick={() => updateOrderStatus("pending")}
                            >
                                Mark Pending
                            </button>
                            <button
                                className="btn-completed"
                                onClick={() => updateOrderStatus("completed")}
                            >
                                Mark Completed
                            </button>
                            <button
                                className="btn-cancel-order"
                                onClick={() => updateOrderStatus("cancelled")}
                            >
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default InvoiceModal