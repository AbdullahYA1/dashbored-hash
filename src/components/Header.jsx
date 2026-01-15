function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <button className="menu-btn" onClick={onToggleSidebar}>
        Menu
      </button>
      <div className="user-info">
        <span>Abod</span>
      </div>
    </header>
  );
}

export default Header;
