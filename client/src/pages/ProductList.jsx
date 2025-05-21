import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5001/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch products");
      }

      const data = await res.json();

      if (data.products && data.products.length > 0) {
        setProducts(data.products);
        setSuccess(data.message || "Products fetched successfully");
      } else {
        setProducts([]);
        setError("No products found");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Product List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md font-semibold transition"
          >
            Add Product
          </button>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && !loading && !error && (
          <p className="text-green-500 mb-4 text-center">{success}</p>
        )}
        {!loading && !error && products.length === 0 && (
          <p>No products available.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <ul className="space-y-4">
            {products.map((product) => (
              <li
                key={product._id}
                className="bg-gray-800 p-4 rounded-md shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p>Price: ₹{product.price}</p>
                  <p>Company: {product.company}</p>
                  <p>
                    Rating:{" "}
                    {product.rating
                      ? Number(product.rating).toFixed(1)
                      : "N/A"}
                  </p>
                  <p>Featured: {product.featured ? "Yes" : "No"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-[90%] max-w-xl">
            <AddProduct
              onClose={() => {
                setIsModalOpen(false);
                fetchProducts();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
