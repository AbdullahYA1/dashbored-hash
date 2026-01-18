function OrderStatus({ orders }) {
  const total = orders.length;
  const completed = orders.filter((o) => o.status === "shipped").length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const cancelled = orders.filter((o) => o.status === "cancelled").length;

  return (
    <div className="order-status">
      <h3>Order Status</h3>

      <div className="status-item">
        <div className="status-header">
          <span>Completed</span>
          <span>{completed}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill green" style={{ width: (completed / total) * 100 + "%" }}></div>
        </div>
      </div>

      <div className="status-item">
        <div className="status-header">
          <span>Pending</span>
          <span>{pending}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill yellow" style={{ width: (pending / total) * 100 + "%" }}></div>
        </div>
      </div>

      <div className="status-item">
        <div className="status-header">
          <span>Cancelled</span>
          <span>{cancelled}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill red" style={{ width: (cancelled / total) * 100 + "%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
