function Sidebar({ activePage, onPageChange }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "orders", label: "Orders" },
    { id: "users", label: "Users" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="brand">Admin</h2>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activePage === item.id ? "nav-item active" : "nav-item"}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
