import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Vitamin C Face Serum",
    category: "Skincare",
    price: 599,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  },
  {
    id: 2,
    name: "Matte Lipstick",
    category: "Makeup",
    price: 399,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  },
  {
    id: 3,
    name: "Hydrating Face Cream",
    category: "Skincare",
    price: 499,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    category: "Fragrance",
    price: 899,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
  },
  {
    id: 5,
    name: "Makeup Foundation",
    category: "Makeup",
    price: 699,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 6,
    name: "Hair Care Shampoo",
    category: "Haircare",
    price: 449,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  },
  {
    id: 7,
    name: "Rose Face Mask",
    category: "Skincare",
    price: 349,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
  {
    id: 8,
    name: "Blush Powder",
    category: "Makeup",
    price: 299,
    image: "https://images.unsplash.com/photo-1591360236480-4ed861025fa1",
  },
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  // Filter products
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Sort products
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6 md:px-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-pink-500 font-semibold uppercase tracking-widest">
          Discover Your Beauty
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          Shop Our Products
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Explore our beautiful collection of skincare, makeup, haircare
          and fragrance products.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-5 py-3 rounded-full border border-pink-200 outline-none focus:ring-2 focus:ring-pink-300 bg-white"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 rounded-full border border-pink-200 outline-none bg-white text-gray-600"
        >
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-12">

        {["All", "Skincare", "Makeup", "Haircare", "Fragrance"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          )
        )}

      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
          >

            {/* Product Image */}
            <div className="relative h-72 overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Wishlist */}
              <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-pink-500 shadow">
                <FaHeart />
              </button>

            </div>

            {/* Product Info */}
            <div className="p-5">

              <p className="text-sm text-pink-500 font-medium">
                {product.category}
              </p>

              <h2 className="text-lg font-semibold text-gray-800 mt-1">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span className="text-gray-400 text-sm ml-1">
                  (5.0)
                </span>
              </div>

              {/* Price + Cart */}
              <div className="flex items-center justify-between mt-4">

                <span className="text-xl font-bold text-gray-800">
                  ₹{product.price}
                </span>

                <button className="bg-pink-500 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                  <FaShoppingCart />
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* No Product */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            No products found
          </h2>

          <p className="text-gray-400 mt-2">
            Try another product or category.
          </p>
        </div>
      )}

    </section>
  );
}

export default Shop;