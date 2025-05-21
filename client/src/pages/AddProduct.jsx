import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import PropTypes from 'prop-types';

const AddProduct = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    company: '',
    rating: '',
    featured: false
  });

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : null;
  const userId = decoded?.id;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || !userId) {
      alert("You must be logged in to add a product.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5001/api/products/",
        {
          ...formData,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Product added successfully!");
      setFormData({
        name: '',
        price: '',
        company: '',
        rating: '',
        featured: false
      });
      if (onClose) onClose();
    } catch (error) {
      console.error("Error creating product:", error);
      alert(
        `Error: ${error.response?.data?.message || error.message || "Something went wrong."}`
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md mx-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-8 text-teal-400 text-center">Add Product</h2>

          <label className="block mb-2 text-teal-300 font-semibold" htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
            required
          />

          <label className="block mb-2 text-teal-300 font-semibold" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
            required
          />

          <label className="block mb-2 text-teal-300 font-semibold" htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
            required
          />

          <label className="block mb-2 text-teal-300 font-semibold" htmlFor="rating">Rating (0-5)</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            min="0"
            max="5"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
          />

          <label className="flex items-center text-teal-300 font-semibold mb-6">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="mr-2 accent-teal-500"
            />
            Featured
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 rounded-md font-semibold hover:bg-teal-600 transition"
          >
            Add Product
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

AddProduct.propTypes = {
  onClose: PropTypes.func
};

export default AddProduct;
