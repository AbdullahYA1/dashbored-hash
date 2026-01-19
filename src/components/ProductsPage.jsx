import { useState } from "react";
import { productsData } from "../data/data";

function ProductsPage() {
  const [products, setProducts] = useState(productsData);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: formData.name,
                category: formData.category,
                price: Number(formData.price),
                stock: Number(formData.stock),
                active: Number(formData.stock) > 0,
              }
            : p
        )
      );
    } else {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        category: formData.category,
        price: Number(formData.price),
        stock: Number(formData.stock),
        active: Number(formData.stock) > 0,
      };
      setProducts([...products, newProduct]);
    }

    closeForm();
  };

  const openAddForm = () => {
    setEditingProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "" });
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn-add">
                  {editingProduct ? "Update" : "Add"}
                </button>
                <button type="button" className="btn-cancel" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={showForm ? "page-blur" : ""}>
        <div className="page-header">
          <h2>Products</h2>
          <button className="btn-add" onClick={openAddForm}>+ Add Product</button>
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
                <button className="btn-edit" onClick={() => openEditForm(product)}>Edit</button>
                <button className="btn-delete" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default ProductsPage;
