import { useEffect, useState } from "react";

function ProductApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:8000/api/products", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    setProducts(data.data);
    setLoading(false);
  })
  .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="page-header">
        <h2>Products from API</h2>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductApi;
