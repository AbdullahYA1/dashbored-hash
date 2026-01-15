import { useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99, stock: 45, active: true },
    { id: 2, name: "Cotton T-Shirt", category: "Clothing", price: 29.99, stock: 120, active: true },
    { id: 3, name: "Water Bottle", category: "Home", price: 24.99, stock: 0, active: false },
    { id: 4, name: "Leather Wallet", category: "Accessories", price: 49.99, stock: 30, active: true },
    { id: 5, name: "Fitness Watch", category: "Electronics", price: 199.99, stock: 15, active: true },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="page-header">
        <h2>Products</h2>
        <button className="btn-add">+ Add Product</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <span className={product.active ? "badge active" : "badge inactive"}>
                  {product.active ? "Active" : "Out of Stock"}
                </span>
              </td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
