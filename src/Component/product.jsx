import React from "react";

export default function Product() {
  const products = [
    { id: 1, name: "Soft Drink" },
    { id: 2, name: "Soft Drink" },
    { id: 3, name: "Soft Drink" },
    { id: 4, name: "Soft Drink" },
  ];
  return (
    <div className="px-4 py-10 max-w-screen-xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Let see more Product!
      </h2>

      {/* Product Wrapper */}
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 flex overflow-x-auto space-x-4 sm:space-x-0 sm:overflow-x-visible px-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md min-w-[230px] sm:min-w-0 sm:w-full text-center rounded overflow-hidden  flex-shrink-0"
          >
            <img
              src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
              alt={product.name}
              className="w-full h-40 object-cover bg-gray-200"
            />
            <h3 className="py-4 text-blue-500 font-bold text-xl">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
