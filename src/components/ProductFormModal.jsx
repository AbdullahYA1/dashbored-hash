import React from "react";

function ProductFormModal({
  show,
  editingProduct,
  formData,
  handleInputChange,
  handleSubmit,
  closeForm,
}) {
  if (!show) return null;
  return (
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
  );
}

export default ProductFormModal;
