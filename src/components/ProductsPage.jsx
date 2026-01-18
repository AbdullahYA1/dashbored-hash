import { useState } from "react";
import { productsData } from "../data/data";

function ProductsPage() {
  const [products, setProducts] = useState(productsData);

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
